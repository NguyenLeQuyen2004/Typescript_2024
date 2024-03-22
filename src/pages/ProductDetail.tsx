import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '@/apis'
import { productType } from '@/interfaces/Product'
import { Container } from 'react-bootstrap'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<productType | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <Container>
      <h1>Product Detail</h1>
      <div className='pr-detail'>
        <img width={400} src={product?.thumbnail} alt={product?.title} />
        <h3>Name: {product?.title}</h3>
        <h5>Price: {product?.price}</h5>
        <p>Description: {product?.description}</p>
      </div>
    </Container>
  )
}

export default ProductDetail
