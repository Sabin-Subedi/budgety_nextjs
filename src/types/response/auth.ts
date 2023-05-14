import { BaseSuccessResponse } from "./base";

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export type LoginSuccessResponse = BaseSuccessResponse<LoginResponse>;
