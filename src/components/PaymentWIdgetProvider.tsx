import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { PaymentWidgetContext } from "../contexts";
import { PaymentMethodsInstance } from "../types";

export const PaymentWidgetProvider: React.FC<{
  children: ReactNode;
  clientKey: string;
  customerKey: string;
}> = ({ children, clientKey, customerKey }) => {
  const [paymentWidget, setPaymentWidget] = useState<
    PaymentWidgetInstance | undefined
  >(undefined);
  const paymentMethodsRef = useRef<PaymentMethodsInstance | undefined>(
    undefined,
  );

  useEffect(() => {
    loadPaymentWidget(clientKey, customerKey).then(
      (widget: PaymentWidgetInstance) => {
        setPaymentWidget(widget);
      },
    );
  }, [clientKey, customerKey]);

  return (
    <PaymentWidgetContext.Provider value={{ paymentWidget, paymentMethodsRef }}>
      {children}
    </PaymentWidgetContext.Provider>
  );
};
