import { useQuery, useMutation, QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export function useApiQuery<T>(
  key: QueryKey,
  fetchFn: () => Promise<T>,
  options?: UseQueryOptions<T>
) {
  return useQuery<T, Error>({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: (failureCount, error) => {
      // Don't retry for 404 errors
      if (error instanceof AxiosError && error.response?.status === 404) {
        return false;
      }
      return failureCount < 3; // Retry up to 3 times for other errors
    },
    ...options
  });
}

export function useApiMutation<T, V>(
  mutationFn: (variables: V) => Promise<T>,
  options?: UseMutationOptions<T, Error, V>
) {
  return useMutation<T, Error, V>({
    mutationFn,
    ...options,
    onError: (error, variables, context) => {
      console.error('Mutation error:', error);
      options?.onError?.(error, variables, context);
    }
  });
}

export function extractErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return "An unexpected error occurred";
}