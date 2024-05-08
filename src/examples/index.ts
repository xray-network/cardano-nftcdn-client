import NftcdnClient, { NftcdnTypes } from "../index"

const { client, methods: Nftcdn } = new NftcdnClient("https://graph.xray.app/output/nftcdn/mainnet/api/v1", {
  headers: {
    Authorization: "Bearer YOUR_API_TOKEN",
    "X-Some-Header": "YOUR_SOME_HEADER_VALUE",
  },
})

const app = async () => {
  const image = await Nftcdn.Image({ _fingerprint: "asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx" })
  if (image) {
    console.log("Image:", image.ok.data.replace(/(?:\r\n|\r|\n)/g, "").substring(0, 32) + "...")
  } else {
    console.error(image.error)
  }

  const metadata = await Nftcdn.Metadata({ _fingerprint: "asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx" })
  if (metadata) {
    console.log("Metadata:", metadata.ok.data)
  } else {
    console.error(metadata.error)
  }

  const metadataBulk = await Nftcdn.MetadataBulk({
    _fingerprints: ["asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx", "asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme"],
  })
  if (metadataBulk) {
    console.log("MetadataBulk:", metadataBulk.ok.data)
  } else {
    console.error(metadata.error)
  }

  const assets = await Nftcdn.Assets("?asset_name_ascii=XRAY&limit=1")
  if (assets.ok) {
    console.log("Assets:", assets.ok.data)
  } else {
    console.error(assets.error)
  }

  const ipfs = await Nftcdn.Ipfs({ _cid: "QmaYWWWmrUJkWiKAaHRiYwLaSCNGT8he4ZpuQd5TddvRVJ" })
  if (ipfs.ok) {
    console.log("IPFS:", ipfs.ok.data.replace(/(?:\r\n|\r|\n)/g, "").substring(0, 32) + "...")
  } else {
    console.error(ipfs.error)
  }
}

app()
