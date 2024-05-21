/* eslint-disable @typescript-eslint/no-unused-vars */
import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import getGasPrice from 'utils/getGasPrice'
import { BIG_TEN } from 'utils/bigNumber'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  // const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  // if (pid === 2) {
  //   const tx = await masterChefContract.enterStaking(value, { ...options, gasPrice })
  //   const receipt = await tx.wait()
  //   return receipt.status
  // }
  let value
  if (pid === 0) {
    value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).div(BIG_TEN.pow(9)).toString()
  } else {
    value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  }
  const tx = await masterChefContract.deposit(pid, value)
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  let value
  if (pid === 0) {
    value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).div(BIG_TEN.pow(9)).toString()
  } else {
    value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  }
  // const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  // if (pid === 2) {
  //   const tx = await masterChefContract.leaveStaking(value, { ...options, gasPrice })
  //   const receipt = await tx.wait()
  //   return receipt.status
  // }
  const tx = await masterChefContract.withdraw(pid, value)
  const receipt = await tx.wait()
  return receipt.status
  return 0
}

export const harvestFarm = async (masterChefContract, pid) => {
  const gasPrice = getGasPrice()
  // if (pid === 2) {
  //   const tx = await masterChefContract.leaveStaking('0', { ...options, gasPrice })
  //   const receipt = await tx.wait()
  //   return receipt.status
  // }
  const tx = await masterChefContract.deposit(pid, '0')
  const receipt = await tx.wait()
  return receipt.status
  return 0
}
