import { useContext } from "react";
import { PaymentWidgetContext } from "../contexts";

export const usePaymentWidget = () => {
  const paymentWidget = useContext(PaymentWidgetContext);

  return paymentWidget;
};
