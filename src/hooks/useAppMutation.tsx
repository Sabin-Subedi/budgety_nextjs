import myAxios from "@/utils/axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface AppMutationProps<T, R>
  extends UseMutationOptions<AxiosResponse<R, any>, AxiosError, T> {
  name: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  requestConfig?: AxiosRequestConfig<R>;
}

function useAppMutation<T, R>({
  name,
  method = "post",
  requestConfig,
  ...props
}: AppMutationProps<T, R>) {
  return useMutation<AxiosResponse<R>, AxiosError, T>({
    ...props,
    mutationFn: (data: T) =>
      myAxios({
        ...requestConfig,
        name,
        method,
        data,
      }),
  });
}

export default useAppMutation;
