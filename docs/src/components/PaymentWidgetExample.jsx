import React from "react";
import {
  PaymentAgreementSection,
  PaymentMethodsSection,
  PaymentRequestButton,
  PaymentWidgetProvider,
  usePaymentWidget,
} from "@thomas-min/tosspayments-react";

const amount = 15000;
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "5eLhuP7cVYPuKdEB9LuVt";
const paymentRequestParameters = {
  orderId: "toty3r7YrBNBD3RgjHUInAmlXsFiTE",
  orderName: "토스 티셔츠 외 2건",
  customerEmail: "customer123@gmail.com",
  customerName: "김토스",
};

const onAgreementChange = (e) => console.log(e);
const onSuccess = (e) => console.log(e);
const onFail = (e) => console.log(e);

function PaymentWidgetExample() {
  return (
    <main style={{ width: "25rem" }}>
      <PaymentWidgetProvider clientKey={clientKey} customerKey={customerKey}>
        <PaymentMethodsSection amount={amount} />
        <PaymentAgreementSection onAgreementChange={onAgreementChange} />
        <div div style={{ padding: "0" }}>
          <EnableDiscount />
          <PaymentRequestButton
            onSuccess={onSuccess}
            onFail={onFail}
            paymentRequestParameters={paymentRequestParameters}
            style={{
              color: "white",
              background: "#0064FF",
              border: "#0064FF",
              borderRadius: "0.25rem",
              padding: "0.5rem",
              width: "100%",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            결제하기
          </PaymentRequestButton>
        </div>
      </PaymentWidgetProvider>
    </main>
  );
}

function EnableDiscount() {
  const { paymentMethodsRef } = usePaymentWidget();

  const handleChange = (e) => {
    if (e.target.checked) {
      paymentMethodsRef.current?.updateAmount(amount - 5000, "쿠폰");
    } else {
      paymentMethodsRef.current?.updateAmount(amount, "");
    }
  };

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <input type="checkbox" id="is-coupon-enabled" onChange={handleChange} />
      <label htmlFor="is-coupon-enabled">5000원 할인하기</label>
    </div>
  );
}

export default PaymentWidgetExample;
