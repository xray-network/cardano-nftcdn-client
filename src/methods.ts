import { Axios, AxiosResponse, AxiosError, GenericAbortSignal } from "axios"
import * as T from "./types"

export default (client: Axios) => {
  return {
    /**
     * Get Image (Raw Format) by fingerprint
     * @param params._fingerprint string
     * @param extraParams string (optional) ?select=cip25|cip26|cip26&size=256&crop=true
     * @param headers object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
     * @param signal GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
     */
    Image: (
      params: { _fingerprint: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ ok: AxiosResponse<T.ImageResponse> | undefined; error: AxiosError | undefined }> => {
      return client.get(`/image/${params._fingerprint}?${extraParams ? extraParams : ""}`, { signal, headers })
    },

    /**
     * Get Metadata by fingerprint
     * @param params._fingerprint string
     * @param extraParams string (optional) ?raw=true
     * @param headers object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
     * @param signal GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
     */
    Metadata: (
      params: {
        _fingerprint: string
      },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ ok: AxiosResponse<T.MetadataResponse> | undefined; error: AxiosError | undefined }> => {
      return client.get(`/metadata/${params._fingerprint}?${extraParams ? extraParams : ""}`, { signal, headers })
    },

    /**
     * Get Metadata (up to 1000) by fingerprints
     * @param params._fingerprints string[]
     * @param params._raw boolean (optional)
     * @param extraParams string (optional)
     * @param headers object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
     * @param signal GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
     */
    MetadataBulk: (
      params: { _fingerprints: string[]; _raw?: boolean },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ ok: AxiosResponse<T.MetadataBulkResponse> | undefined; error: AxiosError | undefined }> => {
      return client.post(
        `/metadata/?${extraParams ? extraParams : ""}`,
        { fingerprints: params._fingerprints, raw: params._raw },
        { signal, headers }
      )
    },

    /**
     * Get Assets
     * @param extraParams string (optional) ?fingerprint=&policy_id=&asset_name=&asset_name_ascii=&limit=&offset=
     * @param headers object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
     * @param signal GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
     */
    Assets: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ ok: AxiosResponse<T.AssetsResponse> | undefined; error: AxiosError | undefined }> => {
      return client.get(`/assets/?${extraParams ? extraParams : ""}`, { signal, headers })
    },

    /**
     * Get File from IPFS by CID
     * @param extraParams string (optional)
     * @param headers object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
     * @param signal GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
     */
    Ipfs: (
      params: { _cid: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ ok: AxiosResponse<T.IpfsResponse> | undefined; error: AxiosError | undefined }> => {
      return client.get(`/ipfs/${params._cid}?${extraParams ? extraParams : ""}`, { signal, headers })
    },
  }
}
