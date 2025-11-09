import { useQuery } from '@tanstack/react-query';
import { fetchFeatures, fetchCapabilities, fetchHealth, Feature, Capability } from '@/services/api';

export const useFeatures = () => {
  return useQuery<Feature[], Error>({
    queryKey: ['features'],
    queryFn: fetchFeatures,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCapabilities = () => {
  return useQuery<Capability[], Error>({
    queryKey: ['capabilities'],
    queryFn: fetchCapabilities,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useHealth = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    staleTime: 1000 * 60, // 1 minute
  });
};