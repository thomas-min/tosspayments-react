import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { createContext, MutableRefObject } from "react";
import { PaymentMethodsInstance } from "../types";

export type PaymentWidgetContextValue = {
  paymentWidget?: PaymentWidgetInstance;
  paymentMethodsRef: MutableRefObject<PaymentMethodsInstance | undefined>;
};

export const PaymentWidgetContext = createContext<
  PaymentWidgetContextValue | undefined
>(undefined);
