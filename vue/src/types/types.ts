export interface GenResponse<T = unknown> {
  status: number
  message: string
  data: T
}
