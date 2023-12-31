import { useEffect, useState } from 'react'
import { supabase } from '@/api'

export const useUserSession = () => {
  const [userId, setUserId] = useState<string>('')

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const {
          data: { session }
        } = await supabase.auth.getSession()
        setUserId(session!.user.id)
      } catch (error) {}
      return null
    }

    fetchUserSession()
  }, [])

  return userId
}
