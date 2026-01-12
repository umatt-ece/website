import { IStorageService } from '../interfaces/storage.interface';

/**
 * Cloudflare R2 Storage Service implementation
 */
export class R2StorageService implements IStorageService {
  constructor(private bucket: R2Bucket) {}

  async upload(key: string, file: ArrayBuffer, contentType: string): Promise<string> {
    await this.bucket.put(key, file, {
      httpMetadata: { contentType }
    });
    return key;
  }

  async get(key: string): Promise<{ content: ArrayBuffer; contentType: string } | null> {
    const object = await this.bucket.get(key);
    
    if (!object) {
      return null;
    }

    const content = await object.arrayBuffer();
    const contentType = object.httpMetadata?.contentType || 'application/octet-stream';
    
    return { content, contentType };
  }

  async delete(key: string): Promise<void> {
    await this.bucket.delete(key);
  }

  async exists(key: string): Promise<boolean> {
    const object = await this.bucket.head(key);
    return object !== null;
  }

  /**
   * Generate a unique key for resume uploads
   */
  static generateResumeKey(filename: string): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    return `resumes/${timestamp}-${random}-${sanitizedFilename}`;
  }
}
