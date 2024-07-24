export interface Settings {
  id?: string
  apikey?: string
  amount?: string

  user?: Partial<UserSettings>
  styles?: StylesSettings
  payment?: Partial<PaymentSettings>
  shipping?: Partial<ShippingSettings>
  billing?: Partial<BillingSettings>
  paay?: Partial<PaaySettings>
}

export interface PaaySettings {
  sandbox: boolean
  forceDisabled: boolean
  rejectChallenges: string[]
}

export interface UserSettings {
  // Ask for Name - default false
  showName: boolean,
  // Ask for Email - default false
  showEmail: boolean,
  // Ask for Phone Number - default false
  showPhone: boolean,
  // Show section title
  showTitle: boolean
  // Show section label
  showLabel: boolean
  // show user info in single line - default false
  showInline: boolean,
}

export interface ShippingSettings {
  show: boolean
  showTitle: boolean
  showLabel: boolean
}

export interface BillingSettings {
  show: boolean
  showTitle: boolean
  showLabel: boolean
}

export interface StylesSettings {
  [key: string]: any
}

export interface PaymentSettings {
  types: string[]
  calculateFees: boolean
  processorId?: string
  showTitle: boolean
  showLabel: boolean
  placeholderCreditCard: null | string
  showExpDate: boolean
  showCVV: boolean
  card: Partial<{
    strict_mode: boolean
    requireCVV: boolean
    user_required: Partial<UserRequiredSettings>
    billing_required: Partial<BillingRequiredSettings>
  }>
  ach: Partial<{
    sec_code: string
    secCodeList: string[]
    showSecCode: boolean
    verifyAccountRouting: boolean
    user_required: Partial<UserRequiredSettings>
    billing_required: Partial<BillingRequiredSettings>
  }>
  stripe: Partial<{
    appearance?: { [key: string]: any }
  }>
  applePay: {
    // key is the id of the registered Apple Pay certificate
    key: string
    // autoPay is a callback function that will be called during the Apple Pay's payment process
    autoPay: (data: ApplePayAutoPayEvent) => Promise<AutoPayResult>
    // appleMerchantID is an optional variable to use a custom Apple Pay Merchant ID
    appleMerchantID?: string
    // domainName for the Apple Pay merchant validation
    domainName?: string
    // version number of the Apple Pay, default 5
    version?: number
    // payment is the specific Apple Pay configuration
    payment: ApplePayPayment
  }
}

export interface UserRequiredSettings {
  first_name: boolean
  last_name: boolean
  email: boolean
  phone: boolean
}

export interface BillingRequiredSettings {
  address: boolean,
  city: boolean,
  state: boolean,
  zip: boolean,
  country: boolean,
}

export type AutoPayResult = 'success' | 'fail'

export type ApplePayAutoPayEvent = ApplePayJS.ApplePayPaymentAuthorizedEvent

export interface ApplePayPayment extends Partial<ApplePayJS.ApplePayPaymentRequest> {
  countryCode: string
  currencyCode: string
  total: ApplePayJS.ApplePayLineItem;
}
