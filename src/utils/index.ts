/**
 * Joins css classes conditionally.
 * Example: `cssClasses(['status', isActive && 'active'])`
 */
export const cssClasses = (classes: (string | null | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getIsServer = () => typeof window === 'undefined';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const mainApiUrl = isDevelopment
  ? `http://localhost:${process.env.NEXT_PUBLIC_API_SERVICE_PORT}`
  : `/${process.env.NEXT_PUBLIC_MAIN_API_PATH}`;
