import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";

export type AgreementStatus = {
  agreedRequiredTerms: boolean;
  terms: Term[];
};

export type Term = {
  id: string;
  subTerms: Term[];
  title: string;
  position: number;
  required: boolean;
  agreed: boolean;
  url: string | null;
};

export type RenderAgreementReturnType = ReturnType<
  PaymentWidgetInstance["renderAgreement"]
>;

export type PaymentAgreementInstance = RenderAgreementReturnType;
