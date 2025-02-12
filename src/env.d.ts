declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  import { ApplePaySession } from '@types/applepayjs/index'
  interface Window {
    ApplePaySession: ApplePaySession
  }
}

declare module 'prismjs'
declare module 'prismjs/*'
