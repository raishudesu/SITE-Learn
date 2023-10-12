export type TSignin = {
  email: string;
  pwd: string;
};

export type TSignup = TSignin & {
  name: string;
  confirmPwd: string;
  isAdmin: boolean;
};

export type TFeatureCard = {
  icon: string;
  characteristic: string;
  description: string;
};
