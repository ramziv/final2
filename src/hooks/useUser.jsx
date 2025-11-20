import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

export default function useUser() {
  const { user, isLoggedIn, isAdmin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return {
    user,
    isLoggedIn,
    isAdmin,
    // actions
    login: (userData) => dispatch(login(userData)),
    logout: () => dispatch(logout()),
  };
}
