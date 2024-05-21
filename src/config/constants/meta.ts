import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Socaverse',
  description:
    'The most popular AMM on BSC by user count! Earn SOCA through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Socaverse), NFTs, and more, on a platform you can trust.',
  image: 'https://Socaverse.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Socaverse')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Socaverse')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Socaverse')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Socaverse')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Socaverse')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Socaverse')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Socaverse')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Socaverse')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Socaverse')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Socaverse')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Socaverse')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Socaverse')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Socaverse')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Socaverse')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Socaverse')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Socaverse')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Socaverse')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Socaverse')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Socaverse Info & Analytics')}`,
        description: 'View statistics for Socaverse exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Socaverse Info & Analytics')}`,
        description: 'View statistics for Socaverse exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Socaverse Info & Analytics')}`,
        description: 'View statistics for Socaverse exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Socaverse')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Socaverse')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Socaverse')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Socaverse')}`,
      }
    default:
      return null
  }
}
