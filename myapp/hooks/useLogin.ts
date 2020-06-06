import { anonymousLoginOperation, loginOperation, LoginResponse } from "@redux/user";
import { useOperation } from "./useOperation";

export const useLogin = () => {
  const loginExecutor = useOperation<LoginResponse, typeof loginOperation>(loginOperation);
  const anonymousLoginExecutor = useOperation<boolean, typeof anonymousLoginOperation>(anonymousLoginOperation);

  const login = () => {
    loginExecutor.execute();
  };

  const anonymousLogin = () => {
    anonymousLoginExecutor.execute();
  };

  const isLoading = loginExecutor.loading || anonymousLoginExecutor.loading;
  return { login, anonymousLogin, isLoading };
};