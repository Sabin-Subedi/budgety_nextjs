export interface BaseSuccessResponse<T> {
  message: "success";
  status: number;
  data: T;
}
