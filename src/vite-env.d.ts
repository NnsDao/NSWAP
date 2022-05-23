/// <reference types="vite/client" />

//  define import.meta.env  intelligence
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // readonly xxxx:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace process {
  const env: Record<string, string>;
}
