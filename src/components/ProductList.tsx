import { useEffect, useState } from 'react'
import { productType } from '../interfaces/Product'
import instance from '../apis'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    // Cach 2:
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  // ! DependencyList = Danh sách phụ thuộc
  return (
    <div className='container'>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img width={100} src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
