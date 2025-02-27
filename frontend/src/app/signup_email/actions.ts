import { apiRequest } from '@/config/api';

export const resendVerificationEmail = async (email: string) => {
  try {
    await apiRequest('/auth/resend-verification', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
    return true;
  } catch (error) {
    console.error('Failed to resend verification email:', error);
    return false;
  }
}; 