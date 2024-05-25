export interface HttpResponse<T> {
  status: number;
  body: T | string;
}

export interface HttpRequest<T> {
  body?: T;
  params?: any;
  query?: any;
  headers?: any;
}
