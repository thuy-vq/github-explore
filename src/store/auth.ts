import { create } from 'zustand'

interface AuthState {
  token: string;
  username: string;
  setToken: (newToken: string) => void;
  setUsername: (newRepo: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: '',
  username: '',
  setToken: (newToken) => set(() => ({ token: newToken })),
  setUsername: (newRepo) => set(() => ({ username: newRepo })),
}))
