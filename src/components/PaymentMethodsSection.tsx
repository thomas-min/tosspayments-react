import React, { useEffect, useRef } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";
import { PaymentMethodsInstance } from "../types";

export const PaymentMethodsSection: React.FC<
  JSX.IntrinsicElements["section"] & {
    id?: string;
    amount: number;
    amountUpdateReason?: string;
  }
> = ({ id = "payment-methods", amount, amountUpdateReason, ...props }) => {
  const paymentWidget = usePaymentWidget();
  const paymentMethodsRef = useRef<PaymentMethodsInstance | undefined>(
    undefined,
  );

  useEffect(() => {
    const paymentMethods = paymentWidget?.renderPaymentMethods(
      "#" + id,
      amount,
    );
    if (paymentMethods) {
      paymentMethodsRef.current = paymentMethods;
    }
  }, [amount, id, paymentWidget]);

  useEffect(() => {
    if (amountUpdateReason) {
      paymentMethodsRef.current?.updateAmount(amount, amountUpdateReason);
    }
  }, [amount, amountUpdateReason]);

  return <section id={id} {...props} />;
};
