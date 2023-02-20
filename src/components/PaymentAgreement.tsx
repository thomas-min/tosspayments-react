import React, { useEffect } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";

export const PaymentAgreement: React.FC<
  JSX.IntrinsicElements["div"] & { id?: string }
> = ({ id = "payment-agreement", ...props }) => {
  const paymentWidget = usePaymentWidget();

  useEffect(() => {
    paymentWidget?.renderAgreement("#" + id);
  }, [id, paymentWidget]);

  return <div id={id} {...props} />;
};
