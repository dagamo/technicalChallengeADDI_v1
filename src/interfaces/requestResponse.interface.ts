export interface IResponse<T> {
  data: T;
  status: 200 | 404;
}
