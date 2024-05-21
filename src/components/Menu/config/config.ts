/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    icon: 'Home',
    href: '/home',
    showItemsOnMobile: true,
    items: [],
  },
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Farm'),
        icon: 'Farm',
        href: '/farms',
      },
      {
        label: t('Pool'),
        icon: 'Pool',
        href: '/pools',
      },
      {
        label: t('Game'),
        icon: 'Game',
        href: '/games',
      },
    ],
  },
  {
    label: t('Win'),
    href: '/Bet',
    icon: 'Trophy',
    items: [
      // {
      //   label: t('Prediction (BETA)'),
      //   href: '/prediction',
      // },
      // {
      //   label: t('Lottery'),
      //   href: '/lottery',
      // },
      {
        type: DropdownMenuItemType.EXTERNAL_LINK,
        label: t('Bet'),
        href: 'https://bet.socaverse.finance',
      },
    ],
  },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //       status: {
  //         text: t('Live'),
  //         color: 'failure',
  //       },
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //   ],
  // },
  // {
  //   label:t('Info'),
  //   href: '/info',
  //   icon: 'More',
  //   hideSubNav: true,
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },
  //     {
  //       label: t('IFO'),
  //       href: '/ifo',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://medium.com/pancakeswap',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
  {
    label: t('NFT'),
    href: '/socabox',
    icon: 'Nft',
    items: [
      {
        label: t('Soca Box'),
        icon: 'SocaBox',
        href: '/socabox',
      },
      {
        label: t('Market Place'),
        icon: 'MarketPlace',
        href: '/marketplace',
      },
    ],
  },
  // {
  //   label: t('Bet'),
  //   href: '/bet',
  //   icon: 'Trophy',
  //   items: [
  //     {
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //       label: t('Bet'),
  //       href: "https://bet.socaverse.finance"
  //     }
  //   ],
  //   showItemsOnMobile: true,
  // }
]

export default config
