"use client"

import { saveProducts } from "@/redux/products/products.slicer"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { useEffect, useState } from "react"

export default function Home() {
  type Product = {
    id: string | number
    title: string
    price: number
    describe: string
  }
  const { products } = useAppSelector(state => state.products)
  const [arrProducts, setArrProducts] = useState<Product[]>(products)
  const dispatch = useAppDispatch()

  const getAllProducts = async () => {
    const response = await fetch('/api/products')
    if (!response.ok) return //Error
    const data = await response.json()
    console.log(data, 'res')
    dispatch(saveProducts(data))
  }
  // useEffect(() => {
  //   getAllProducts()
  // }, [])
  useEffect(() => {
    (async () => {
      await getAllProducts()
    })()
  }, [])

  return <div>
    {arrProducts.map(item => {
      return <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>{item.describe}</p>
      </div>
    })}
  </div>
}
