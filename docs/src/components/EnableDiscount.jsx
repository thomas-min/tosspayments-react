const EnableDiscount = () => {
  const { paymentMethodsRef } = usePaymentWidget();

  const handleChange = (e) => {
    if (e.target.checked) {
      paymentMethodsRef.current?.updateAmount(amount - 5000, "쿠폰");
    } else {
      paymentMethodsRef.current?.updateAmount(amount, "");
    }
  };

  return (
    <div>
      <input type="checkbox" id="is-coupon-enabled" onChange={handleChange} />
      <label htmlFor="is-coupon-enabled">5000원 할인하기</label>
    </div>
  );
};
