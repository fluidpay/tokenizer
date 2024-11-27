import { Settings } from "./types";
export interface Constructor {
    url?: string;
    apikey: string;
    amount?: string;
    container: Element | string | null;
    onLoad?: () => void;
    onPaymentChange?: (type: string) => void;
    validCard?: (valid: boolean) => void;
    achOnChange?: (data: any) => void;
    magStripeSwipe?: (data: any) => void;
    submission: (response: any) => void;
    settings?: Settings;
}
export interface Address {
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
}
export interface GuardianData {
    events: Record<string, unknown>[];
    session_id: string;
}
export interface Message {
    id?: string;
    event: string;
    data: {
        [key: string]: any;
    };
}
export default class Tokenizer {
    id: string;
    apikey: string;
    url: string;
    amount: string | undefined;
    iframe: HTMLIFrameElement;
    container: Element | null;
    settings: Settings;
    private applePay;
    constructor(info: Constructor);
    create(): void;
    private getApiKeyURL;
    private getTokenizerURL;
    private initApplePay;
    private populateApplePayBtn;
    private clickApplePay;
    private hideAutoPayButtons;
    isSurchargeable(state: string, bin: {
        card_type: string;
    }): boolean;
    submit(amount?: string): void;
    setExpDate(expDate: string): void;
    setError(input: string): void;
    setBilling(address: Address): void;
    setShipping(address: Address): void;
    postMessage(msg: Message): void;
    onLoad: () => void;
    validCard: (card: any) => void;
    achOnChange: (data: any) => void;
    magStripeSwipe: (data: any) => void;
    onPaymentChange: (type: string) => void;
    submission: (response: any) => void;
    errorPass: (response: string) => void;
    private uuid;
    private waitForContainer;
    private buildIframe;
    private setSettings;
    private updateHeight;
    private getGuardianData;
    private messageListener;
}
