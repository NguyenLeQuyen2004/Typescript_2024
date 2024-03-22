import { useEffect, useState } from 'react'
import { productType } from '@/interfaces/Product'
import instance from '@/apis'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

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
    <div>
      <Container className='container-pls'>
        <Row className='row'>
          {products.map((product) => (
            <Col key={product.id} className='product'>
              <img className='img' width={200} src={product.thumbnail} alt={product.title} />
              <Link to={`/shop/${product.id}`}>
                <h4>{product.title}</h4>
              </Link>

              <p className='col-price'>Price: {product.price}</p>
              <p className='col-desc'>{product.description}</p>
              <button className='submit'>Buy now</button>
              <button className='detail'>Show detail</button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductList
