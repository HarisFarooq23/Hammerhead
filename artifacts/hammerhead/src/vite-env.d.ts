/// <reference types="vite/client" />

// Uppercase image extensions not covered by vite/client
declare module "*.JPG" {
  const src: string;
  export default src;
}
declare module "*.JPEG" {
  const src: string;
  export default src;
}
declare module "*.PNG" {
  const src: string;
  export default src;
}
