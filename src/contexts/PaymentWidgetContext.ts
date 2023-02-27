import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { createContext } from "react";

export type PaymentWidgetContextValue = {
  paymentWidget?: PaymentWidgetInstance;
};

export const PaymentWidgetContext = createContext<
  PaymentWidgetContextValue | undefined
>(undefined);
