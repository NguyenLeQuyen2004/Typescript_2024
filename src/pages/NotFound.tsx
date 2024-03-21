import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className='container'>
        <h2>404</h2>
        <h2>Oh, Not found!</h2>
        <h2>
          <Link to='/'>Go to back home</Link>
        </h2>
      </div>
    </div>
  )
}

export default NotFound
