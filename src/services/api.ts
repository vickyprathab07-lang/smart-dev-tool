const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Capability {
  id: number;
  title: string;
  description: string;
}

export const fetchFeatures = async (): Promise<Feature[]> => {
  const response = await fetch(`${API_BASE_URL}/api/features`);
  if (!response.ok) {
    throw new Error('Failed to fetch features');
  }
  return response.json();
};

export const fetchCapabilities = async (): Promise<Capability[]> => {
  const response = await fetch(`${API_BASE_URL}/api/capabilities`);
  if (!response.ok) {
    throw new Error('Failed to fetch capabilities');
  }
  return response.json();
};

export const fetchHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/api/health`);
  if (!response.ok) {
    throw new Error('Failed to fetch health status');
  }
  return response.json();
};