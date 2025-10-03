export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  // TODO: it's possible to pass entire offer object (even if it contains partial data)
  OfferDetails: { id: number };
};
