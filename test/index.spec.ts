import { expect, test, vi } from "vitest"
import NftcdnClient from "../src"

const baseUrl = "https://graph.xray.app/output/services/nftcdn/mainnet/api/v1"
const headers = {}
const client = NftcdnClient(baseUrl, headers)

test("/metadata", async () => {
  const metadata = await client.GET("/metadata/{id}", {
    params: {
      path: {
        id: "b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6584449414d4f4e44",
      },
    },
  })
  expect(metadata.data).toHaveProperty("fingerprint")
})

test("/image", async () => {
  const assets = await client.GET("/image/{id}", {
    parseAs: "blob",
    params: {
      path: {
        id: "b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6584449414d4f4e44",
      },
    },
  })
  expect(assets).toHaveProperty("data")
})
