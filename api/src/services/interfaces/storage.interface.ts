/**
 * Storage service interface for file uploads (resumes, assets)
 */
export interface IStorageService {
  /**
   * Upload a file and return the key
   */
  upload(key: string, file: ArrayBuffer, contentType: string): Promise<string>;

  /**
   * Get a file by key
   */
  get(key: string): Promise<{ content: ArrayBuffer; contentType: string } | null>;

  /**
   * Delete a file by key
   */
  delete(key: string): Promise<void>;

  /**
   * Check if a file exists
   */
  exists(key: string): Promise<boolean>;
}
