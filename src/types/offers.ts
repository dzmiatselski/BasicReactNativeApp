export interface Offer {
  id: number;
  businessName: string;
  offerName: string;
  offerLogo: string;
  goal: string;
  reward: {
    value: number;
    point: string;
    pointLogo: string;
  };
  offerDescription: string;
  startDate: string;
  endDate: string;
}
