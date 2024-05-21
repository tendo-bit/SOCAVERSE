import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { fetchUserActivity } from 'state/nftMarket/reducer'

const useFetchUserActivity = (account: string) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchUserActivity(account))
    }
  }, [dispatch, account])
}

export default useFetchUserActivity
