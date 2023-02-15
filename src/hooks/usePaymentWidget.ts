import { useContext } from "react";
import { PaymentWidgetContext } from "../contexts";

export const usePaymentWidget = () => {
  const paymentWidget = useContext(PaymentWidgetContext);
  if (!paymentWidget) {
    throw "usePaymentWidget hook must be used inside PaymentWidgetProvider";
  }

  return paymentWidget;
};
