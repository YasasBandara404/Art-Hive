export const getImageUrl = (path: string | undefined): string => {
  if (!path) return '/placeholder.svg';
  
  // If the path already starts with http/https, use it directly
  if (path.startsWith('http')) {
    return path;
  }

  // If the path already includes /uploads/, don't prepend the API URL to /uploads/
  if (path.includes('/uploads/')) {
    // Extract just the filename part to avoid duplicate path segments
    const segments = path.split('/uploads/');
    const filename = segments[segments.length - 1];
    return `${import.meta.env.VITE_API_URL.replace(/\/api$/, '')}/uploads/${filename}`;
  }
  
  // For other relative paths, just append to API URL
  return `${import.meta.env.VITE_API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};