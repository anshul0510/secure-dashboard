import { useAuthContext } from "./UseAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
