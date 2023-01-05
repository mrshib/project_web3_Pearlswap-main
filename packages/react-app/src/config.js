import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x87823B0A95F8c8B655F4488DD5c79753e1F3100a";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/-c-n1Qget7_ZmiF0J_KfS3Z5YwsK_QMZ",
  },
};
