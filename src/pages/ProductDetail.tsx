import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '@/apis'
import { productType } from '@/interfaces/Product'

type Props = {}

const ProductDetail = (props: Props) => {
  const params = useParams()
  const [product, setProduct] = useState<productType>({
    id: 0,
    title: '',
    thumbnail: '',
    price: 0,
    description: ''
  })
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${params.productId}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <div>
      <h2>Chi tiet san pham</h2>
      <p>Id: {params.productId}</p>
      {JSON.stringify(product)}
    </div>
  )
}

export default ProductDetail
