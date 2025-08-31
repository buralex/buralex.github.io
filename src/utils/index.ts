import { clsx } from 'clsx/lite';

export const cssClass = clsx;

export const isServer = () => typeof window === 'undefined';

export const isDevelopment = process.env.NODE_ENV === 'development';
