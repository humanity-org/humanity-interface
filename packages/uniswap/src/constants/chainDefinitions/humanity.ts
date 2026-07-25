import { defineChain } from 'viem'
import { chainConfig } from 'viem/op-stack'

// Latest viem has this chain, however, newer package version clashes with current setup
// For this reason this and future chains could be defined in this folder.
export const humanity = /*#__PURE__*/ defineChain({
  ...chainConfig,
  id: 13600000,
  name: 'Humanity',
  network: 'humanity',
  nativeCurrency: {
    decimals: 18,
    name: 'HUMANITY',
    symbol: 'H',
  },
  rpcUrls: {
    default: { http: ['https://humanity-main.g.alchemy.com/v2/iM48re7ayAOI-7XVTt4D-'] }, 
  },
  blockExplorers: {
    default: {
      name: 'Humanity Explorer',
      url: 'https://humanity-main.explorer.alchemy.com/',
    },
  },
  testnet: false,
  contracts: {
    multicall3: {
      address: '0x5E839c71A9DEeB89916A8BF3E6Af1fd6651b98ba',
    },
  },
})
