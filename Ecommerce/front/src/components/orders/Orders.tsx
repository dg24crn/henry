"use client"

import { getOrders } from '@/helpers/orders.helper'
import { IUserSession } from '@/interfaces/IValidate'
import React, { useEffect, useState } from 'react'

const Orders = () => {
  const [userSession, setUserSession] = useState<IUserSession>()
  const [orders, setOrders] = useState<any>([])

  useEffect(() => {
    if(typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession")
      setUserSession(JSON.parse(userData!))
    }
  }, [])

  const fetchData = async () => {
    const ordersResponse = await getOrders(userSession?.token!)
    setOrders(ordersResponse)
  }

  useEffect(() => {
    if(userSession?.user.name) {
      userSession?.user.name === undefined ? alert("#") : fetchData()
    }
  })

  return (
    <div>
      {
        orders && orders.length > 0 ? (
          orders?.map((order: any) => {
            return(
              <div key={order.id}>
                <p>{new Date(order.date)?.toLocaleDateString()}</p>
                <p>{order.status}</p>
              </div>
            )
          })
        ) : (
          <div>
            <p>You havent placed any order yet</p>
          </div>
        )
      }
    </div>
  )
}

export default Orders