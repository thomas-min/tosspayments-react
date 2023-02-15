import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import React, { ReactNode, useEffect, useRef } from "react";
import { PaymentWidgetContext } from "../contexts";

export const PaymentWidgetProvider: React.FC<{
  children: ReactNode;
  clientKey: string;
  customerKey: string;
}> = ({ children, clientKey, customerKey }) => {
  const paymentWidget = useRef<PaymentWidgetInstance | undefined>(undefined);

  useEffect(() => {
    loadPaymentWidget(clientKey, customerKey).then((widget) => {
      paymentWidget.current = widget;
    });
  }, []);

  return (
    <PaymentWidgetContext.Provider value={paymentWidget.current || null}>
      {children}
    </PaymentWidgetContext.Provider>
  );
};
