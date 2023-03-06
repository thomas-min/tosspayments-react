import { useContext } from "react";
import { PaymentWidgetContext } from "../contexts";

export const usePaymentWidget = () => {
  const context = useContext(PaymentWidgetContext);

  if (!context) {
    throw "usePaymentWidget must be used inside PaymentWidgetProvider";
  }

  return context;
};
