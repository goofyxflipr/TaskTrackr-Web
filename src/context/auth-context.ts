import { User } from "@/types";
import { createContext } from "react";

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  accessToken?: string | null;
  setAccessToken?: React.Dispatch<React.SetStateAction<string | null>>;
  refreshToken?: string | null;
  setRefreshToken?: React.Dispatch<React.SetStateAction<string | null>>;
  user: User | null;
  setUser?: React.Dispatch<React.SetStateAction<User | null>>;
}

export const defaultState = {
  isAuth: false,
  accessToken: null,
  refreshToken: null,
  user: null
}

export const AuthContext = createContext<IAuthContext>(defaultState);
