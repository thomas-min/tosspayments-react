import React, { useEffect } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";
import { AgreementStatus } from "../types";

export const PaymentAgreementSection: React.FC<
  JSX.IntrinsicElements["section"] & {
    id?: string;
    onAgreementChange?: (agreementStatus: AgreementStatus) => void;
  }
> = ({ id = "payment-agreement", onAgreementChange, ...props }) => {
  const { paymentWidget } = usePaymentWidget();

  useEffect(() => {
    const agreementStatus = paymentWidget?.renderAgreement("#" + id);
    if (onAgreementChange && agreementStatus) {
      agreementStatus.on("change", onAgreementChange);
    }
  }, [id, paymentWidget, onAgreementChange]);

  return <section id={id} {...props} />;
};
