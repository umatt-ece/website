/**
 * API client for UMATT backend services
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8787';
const API_KEY = import.meta.env.VITE_API_KEY || '';

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

interface SponsorInquiryData {
  companyName: string;
  contactName: string;
  email: string;
  message?: string;
}

interface MemberJoinData {
  name: string;
  email: string;
  resume?: File;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers: HeadersInit = {
    'X-API-Key': API_KEY,
    ...options.headers,
  };

  // Don't set Content-Type for FormData (browser will set it with boundary)
  if (!(options.body instanceof FormData)) {
    (headers as Record<string, string>)['Content-Type'] = 'application/json';
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `Request failed with status ${response.status}`,
      };
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    return {
      success: false,
      error: 'Network error. Please try again.',
    };
  }
}

export const api = {
  /**
   * Health check
   */
  async health(): Promise<ApiResponse<{ status: string; timestamp: string }>> {
    return request('/health');
  },

  /**
   * Submit sponsor inquiry
   * Sends thank you email to sponsor and notifies team
   */
  async submitSponsorInquiry(data: SponsorInquiryData): Promise<ApiResponse> {
    return request('/api/sponsor/inquiry', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Submit member join request
   * Sends welcome email to member and notifies team (with resume if provided)
   */
  async submitMemberJoin(data: MemberJoinData): Promise<ApiResponse> {
    if (data.resume) {
      // Use FormData for file upload
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('resume', data.resume);

      return request('/api/member/join', {
        method: 'POST',
        body: formData,
      });
    }

    // JSON request without resume
    return request('/api/member/join', {
      method: 'POST',
      body: JSON.stringify({ name: data.name, email: data.email }),
    });
  },
};

export type { SponsorInquiryData, MemberJoinData, ApiResponse };
