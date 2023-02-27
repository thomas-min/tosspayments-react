import type { TossPaymentsInstance } from "@tosspayments/payment-sdk";
import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";

export type PaymentRequestParameters = Parameters<
  PaymentWidgetInstance["requestPayment"]
>[0];

export type RequestPaymentResult = ReturnType<
  TossPaymentsInstance["requestPayment"]
>;

export type RenderPaymentMethodsResult = ReturnType<
  PaymentWidgetInstance["renderPaymentMethods"]
>;

export type PaymentMethodsInstance = RenderPaymentMethodsResult;
