import axios, { Axios, AxiosError, AxiosResponse, GenericAbortSignal } from "axios"
import methods from "./methods"
import type * as NftcdnTypes from "./types"
export type * as NftcdnTypes from "./types"

export default class NftcdnClient {
  public client: Axios
  public methods: ReturnType<typeof methods>
  constructor(baseURL: string, headers?: NftcdnTypes.Headers) {
    this.client = axios.create({ baseURL })
    this.client.interceptors.response.use(
      (response: AxiosResponse): any => {
        return {
          ok: response,
        }
      },
      (error: AxiosError): any => {
        return {
          error,
        }
      }
    )
    this.methods = methods(this.client)
  }
}
