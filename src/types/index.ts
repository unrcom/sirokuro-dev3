export type Profile = {
  id: string | undefined;
  created_at: string;
  updated_at: string;
  username: string | undefined;
  avatar_url: string | undefined;
  birth_year: string | undefined;
  zip: string | undefined;
  gender: string | undefined;
  occupantion: string | undefined;
  plan: string | undefined;
  add1: string | undefined;
  add2: string | undefined;
  tel: string | undefined;
  email: string | undefined;
  billing_name: string | undefined;
  email_2nd: string | undefined;
  hitokoto: string | undefined;
};
export type EditedProfile = {
  username: string | undefined;
  avatar_url: string | undefined;
  birth_year: string | undefined;
  zip: string | undefined;
  gender: string | undefined;
  occupantion: string | undefined;
};
