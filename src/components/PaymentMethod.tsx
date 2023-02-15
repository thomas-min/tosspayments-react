import React, { useEffect } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";

export const PaymentMethod: React.FC<
  JSX.IntrinsicElements["div"] & { id?: string; amount: number }
> = ({ id = "payment-method", amount, ...props }) => {
  const paymentWidget = usePaymentWidget();

  useEffect(() => {
    paymentWidget?.renderPaymentMethods("#" + id, amount);
  }, [paymentWidget]);

  return <div id={id} {...props} />;
};
