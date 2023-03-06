import React, { useEffect } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";

export const PaymentMethodsSection: React.FC<
  JSX.IntrinsicElements["section"] & {
    id?: string;
    amount: number;
  }
> = ({ id = "payment-methods", amount, ...props }) => {
  const { paymentWidget, paymentMethodsRef } = usePaymentWidget();

  useEffect(() => {
    const paymentMethods = paymentWidget?.renderPaymentMethods(
      "#" + id,
      amount,
    );
    if (paymentMethods) {
      paymentMethodsRef.current = paymentMethods;
    }
  }, [amount, id, paymentMethodsRef, paymentWidget]);

  return <section id={id} {...props} />;
};
