/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_SCHEMA_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
