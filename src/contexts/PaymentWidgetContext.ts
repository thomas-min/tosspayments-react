import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { createContext } from "react";

export const PaymentWidgetContext = createContext<
  PaymentWidgetInstance | undefined
>(undefined);
