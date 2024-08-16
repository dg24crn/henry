"use client"
import { useRouter } from 'next/navigation'

import React from 'react'

const BackButton = () => {

    const router = useRouter()

  return (
    <div>
    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
    </div>
  )
}

export default BackButton