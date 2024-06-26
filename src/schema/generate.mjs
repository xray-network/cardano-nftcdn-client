import fs from "fs"
import openapiTS from "openapi-typescript"

const run = async () => {
  const schema = await openapiTS("./src/schema/schema.yaml", {
    exportType: true,
  })
  fs.writeFileSync("./src/schema/schema.ts", schema)
}

run()
