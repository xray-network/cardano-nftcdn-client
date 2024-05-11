import { expect, test, vi } from "vitest"
import NftcdnClient from ".."

const baseUrl = "https://graph.xray.app/output/nftcdn/mainnet/api/v1"
const headers = {}
const client = NftcdnClient(baseUrl, headers)

test("/metadata", async () => {
  const metadata = await client.GET("/metadata/{fingerprint}", {
    params: {
      path: {
        fingerprint: "asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx",
      },
    },
  })
  expect(metadata.data).toHaveProperty("fingerprint")
})

test("/assets", async () => {
  const assets = await client.GET("/assets", {
    params: {
      query: {
        fingerprint: "asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx",
      },
    },
  })
  expect(assets.data?.[0]).toHaveProperty("fingerprint")
})
