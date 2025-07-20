<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/cardano-nftcdn-client"><img alt="NPM" src="https://img.shields.io/npm/v/cardano-nftcdn-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://github.com/ray-network/cardano-nftcdn-client/actions"><img alt="CODEQL" src="https://img.shields.io/github/actions/workflow/status/xray-network/cardano-nftcdn-client/codeql.yml?label=CodeQL&logo=github&style=for-the-badge&labelColor=%231940ED&color=%233FCB9B"></a>
  
# TypeScript Client for XRAY/Graph NFTCDN

Automatically generated Openapi-fetch (Axios) client for [XRAY/Graph NFTCDN API](https://xray.app) based on [schema.yaml](https://raw.githubusercontent.com/xray-network/cardano-nftcdn-client/main/src/schema/schema.yaml) OpenAPI schema. Cardano native tokens metadata/datums indexer/explorer and images CDN. IPFS gateway included

## Installation

To install the client with Yarn, run:

```TypeScript
yarn install cardano-nftcdn-client
```

To install the client with NPM, run:

```TypeScript
npm i cardano-nftcdn-client
```

## Usage

```TypeScript
import NftcdnClient from "cardano-nftcdn-client"

const client = NftcdnClient("https://graph.xray.app/output/services/nftcdn/mainnet/api/v1")

const app = async () => {
  const metadata = await client.GET("/metadata/{fingerprint}", {
    params: {
      path: {
        fingerprint: "asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx",
      },
    },
  })

  if (metadata.data) {
    console.log(tip.data)
  }
  if (metadata.error) {
    console.error(tip.error)
  }
}

app()
```

## Advanced Usage

<details>
<summary>Request Cancellation (AbortSignal)</summary>

```TypeScript
import NftcdnClient from "cardano-nftcdn-client"

const client = NftcdnClient("https://graph.xray.app/output/services/nftcdn/mainnet/api/v1")

const app = async () => {
  const abortController = new AbortController()

  setTimeout(() => {
    abortController.abort() // cancel request
    console.log('Aborted!')
  }, 200)

  const assets = await client.GET("/assets", {
    signal: abortController.signl,
  })

  if (assets.data) {
    console.log(tip.data?.[0]?.block_no)
  }
  if (assets.error) {
    console.error(tip.error)
  }
}

app()
```

</details>

## Endpoints

* Check OpenAPI fetch documentations for available endpoint parameters: https://openapi-ts.pages.dev/openapi-fetch/
* The client uses OpenAPI definitions from the NFTCDN API configuration: [schema.yaml](https://raw.githubusercontent.com/xray-network/cardano-nftcdn-client/main/src/schema/schema.yaml)


## API URLs

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer)

```
https://graph.xray.app/output/services/nftcdn/mainnet/api/v1
```

```
https://graph.xray.app/output/services/nftcdn/preprod/api/v1
```

```
https://graph.xray.app/output/services/nftcdn/preview/api/v1
```
