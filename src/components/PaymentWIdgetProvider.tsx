import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import React, { ReactNode, useEffect, useState } from "react";
import { PaymentWidgetContext } from "../contexts";

export const PaymentWidgetProvider: React.FC<{
  children: ReactNode;
  clientKey: string;
  customerKey: string;
}> = ({ children, clientKey, customerKey }) => {
  const [paymentWidget, setPaymentWidget] = useState<
    PaymentWidgetInstance | undefined
  >(undefined);

  useEffect(() => {
    loadPaymentWidget(clientKey, customerKey).then((widget) => {
      setPaymentWidget(widget);
    });
  }, []);

  return (
    <PaymentWidgetContext.Provider value={paymentWidget}>
      {children}
    </PaymentWidgetContext.Provider>
  );
};
