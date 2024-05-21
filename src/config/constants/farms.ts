import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'SOCA',
    lpAddresses: {
      97: '',
      56: '0x6bE095FD6bAb1C878455a9BDED542C6a2c0be59e',
    },
    isTokenOnly: true,
    token: serializedTokens.soca,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SOCA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6bE095FD6bAb1C878455a9BDED542C6a2c0be59e',
    },
    token: serializedTokens.soca,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
    isTokenOnly: true
  },
  {
    pid: 4,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.busd,
    isTokenOnly: true
  },
  {
    pid: 5,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
    isTokenOnly: true
  },
]

export default farms
