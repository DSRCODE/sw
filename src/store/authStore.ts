// authStore.ts
import { create } from "zustand";

type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  referralCode?: string;
} | null;

type AuthState = {
  user: User;
  setUser: (user: User) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
