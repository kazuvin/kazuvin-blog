export interface ListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
