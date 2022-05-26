import create from "zustand";
import { Session } from "@supabase/supabase-js";
import { EditedProfile } from "../types";

type State = {
  session: Session | null;
  setSession: (payload: Session | null) => void;
  editedProfile: EditedProfile;
  updateEditedProfile: (payload: EditedProfile) => void;
  resetEditedProfile: () => void;
};
const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedProfile: {
    username: "",
    avatar_url: "",
    birth_year: "",
    zip: "",
    gender: "",
    occupantion: "",
  },
  updateEditedProfile: (payload) =>
    set({
      editedProfile: {
        username: payload.username,
        avatar_url: payload.avatar_url,
        birth_year: payload.birth_year,
        zip: payload.zip,
        gender: payload.gender,
        occupantion: payload.occupantion,
      },
    }),
  resetEditedProfile: () =>
    set({
      editedProfile: {
        username: "",
        avatar_url: "",
        birth_year: "",
        zip: "",
        gender: "",
        occupantion: "",
      },
    }),
}));

export default useStore;
