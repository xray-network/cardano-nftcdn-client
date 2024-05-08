export type Headers = object

export type ImageResponse = Image
export type Image = string

export type MetadataResponse = Metadata
export type MetadataBulkResponse = Metadata[]
export interface Metadata {
  fingerprint: string
  ref_fingerprint: string | null
  policy_id: number
  asset_name: string
  asset_name_ascii: string
  asset_name_formatted: string
  asset_name_full: string
  asset_name_label: number | null
  asset_name_label_type: number | null
  decimals: number
  quantity: number
  image: string | null
  metadata: {
    cip25: any
    cip26: {
      fingerprint: string
      policy_id: string
      asset_name: string | null
      subject: string
      policy: string | null
      name: string | null
      description: string | null
      ticker: string | null
      url: string | null
      logo: string | null
      decimals: number
    }
    cip27: any
    cip68: any
  }
}

export type AssetsResponse = Asset[]
export interface Asset {
  fingerprint: string
  ref_fingerprint: string | null
  policy_id: string
  asset_name: string
  asset_name_ascii: string
  asset_name_formatted: string
  asset_name_full: string
  asset_name_label: number | null
  asset_name_label_type: string | null
}

export type IpfsResponse = IpfsFile
export type IpfsFile = string
