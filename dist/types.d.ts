export interface Settings {
    id?: string;
    apikey?: string;
    amount?: string;
    user?: Partial<UserSettings>;
    styles?: StylesSettings;
    payment?: Partial<PaymentSettings>;
    shipping?: Partial<ShippingSettings>;
    billing?: Partial<BillingSettings>;
    paay?: Partial<PaaySettings>;
}
export interface PaaySettings {
    sandbox: boolean;
    forceDisabled: boolean;
    rejectChallenges: string[];
}
export interface UserSettings {
    showName: boolean;
    showEmail: boolean;
    showPhone: boolean;
    showTitle: boolean;
    showLabel: boolean;
    showInline: boolean;
}
export interface ShippingSettings {
    show: boolean;
    showTitle: boolean;
    showLabel: boolean;
}
export interface BillingSettings {
    show: boolean;
    showTitle: boolean;
    showLabel: boolean;
}
export interface StylesSettings {
    [key: string]: any;
}
export interface PaymentSettings {
    types: string | string[];
    calculateFees: boolean;
    processorId?: string;
    forcePaymentSelection: boolean;
    showTitle: boolean;
    showLabel: boolean;
    placeholderCreditCard: null | string;
    showExpDate: boolean;
    showCVV: boolean;
    card: Partial<{
        strict_mode: boolean;
        requireCVV: boolean;
        user_required: Partial<UserRequiredSettings>;
        billing_required: Partial<BillingRequiredSettings>;
    }>;
    ach: Partial<{
        sec_code: string;
        secCodeList: string[];
        showSecCode: boolean;
        verifyAccountRouting: boolean;
        user_required: Partial<UserRequiredSettings>;
        billing_required: Partial<BillingRequiredSettings>;
    }>;
    stripe: Partial<{
        appearance?: {
            [key: string]: any;
        };
    }>;
    applePay: {
        key: string;
        autoPay: (data: ApplePayAutoPayEvent) => Promise<AutoPayResult>;
        appleMerchantID?: string;
        domainName?: string;
        version?: number;
        payment: ApplePayPayment;
    };
}
export interface UserRequiredSettings {
    first_name: boolean;
    last_name: boolean;
    email: boolean;
    phone: boolean;
}
export interface BillingRequiredSettings {
    address: boolean;
    city: boolean;
    state: boolean;
    zip: boolean;
    country: boolean;
}
export type AutoPayResult = 'success' | 'fail';
export type ApplePayAutoPayEvent = ApplePayJS.ApplePayPaymentAuthorizedEvent;
export interface ApplePayPayment extends Partial<ApplePayJS.ApplePayPaymentRequest> {
    countryCode: string;
    currencyCode: string;
    total: ApplePayJS.ApplePayLineItem;
}
