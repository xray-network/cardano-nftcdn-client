export type paths = {
    "/image/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get (cached) image by token ID
         * @description Image is fetched by token ID from the NFTCDN cache.
         */
        get: {
            parameters: {
                query?: {
                    crop?: boolean | null;
                    prefer?: "cip25" | "cip26" | "cip68";
                    size?: "original" | "64" | "128" | "256" | "512" | "1024" | "2048";
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The response from the server */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/image": string;
                    };
                };
                /** @description Error: Metadata Not Found */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/text": string;
                    };
                };
                /** @description Error: Metadata Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/text": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metadata/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get metadata by token ID
         * @description Proxy to Koios API to get metadata by token ID. Find latest version of object definition here https://api.koios.rest/#post-/asset_info
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The response from the server */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Error: Metadata Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/text": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get metadata by token ID (bulk)
         * @description Proxy to Koios API to get metadata by token ID. Find latest version of object definition here https://api.koios.rest/#post-/asset_info
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Array of array of Policy ID and Asset Name
                         * @example [
                         *       [
                         *         "b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6",
                         *         "584449414d4f4e44"
                         *       ],
                         *       [
                         *         "86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143",
                         *         "58524159"
                         *       ]
                         *     ]
                         */
                        _asset_list: string[][];
                    };
                };
            };
            responses: {
                /** @description The response from the server */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Error: Metadata Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/text": string;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ipfs/{cid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get image from IPFS by CID
         * @description The image is fetched by CID from the IPFS gateway. The CID is the unique identifier of the image on the IPFS network.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    cid: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The response from the server */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/image": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
