/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_TOKEN_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}