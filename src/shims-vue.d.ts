/* eslint-disable */
declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'base-64' {
  const base64: {
    encode: (s: string) => string
  }
  export default base64
}
