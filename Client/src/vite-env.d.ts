// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_ENVIRONMENT: 'prod' | 'dev';
    VITE_DEV_API_URL: string;
    VITE_PROD_API_URL: string;
  }
  