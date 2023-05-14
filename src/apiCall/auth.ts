import myAxios from "@/utils/axios";

export const emailPasswordLogin = async (email: string, password: string) => {
  return myAxios({
    name: "login",
    method: "post",
    data: {
      email,
      password,
    },
  });
};
