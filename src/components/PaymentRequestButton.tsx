import React, { useCallback } from "react";
import { usePaymentWidget } from "../hooks/usePaymentWidget";
import { PaymentRequestParameters, RequestPaymentResult } from "../types";

export const PaymentRequestButton: React.FC<
  JSX.IntrinsicElements["button"] & {
    paymentRequestParameters: PaymentRequestParameters;
    onSuccess?: (res: RequestPaymentResult) => void;
    onFail?: (error: unknown) => void;
  }
> = ({ paymentRequestParameters, onClick, onSuccess, onFail, ...props }) => {
  const { paymentWidget } = usePaymentWidget();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick) onClick(e);
      paymentWidget
        ?.requestPayment(paymentRequestParameters)
        .then(onSuccess)
        .catch(onFail);
    },
    [onClick, onFail, onSuccess, paymentRequestParameters, paymentWidget],
  );

  return <button {...props} onClick={handleClick} />;
};
