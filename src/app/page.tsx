'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { checkAuthStatus } from '@/utils/auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkAuthStatus()
      if (isAuthenticated) {
        router.push('/admin')
      } else {
        router.push('/admin/login')
      }
    }

    checkAuth()
  }, [router])

  return (
    <div>
      <p>正在检查登录状态...</p>
    </div>
  )
}

