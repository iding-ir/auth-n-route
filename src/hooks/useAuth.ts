import { useSelector } from "react-redux";
import { IState } from "../reducers";

export const useAuth = () => {
  const auth = useSelector((state: IState) => state.auth);

  return { auth };
};
