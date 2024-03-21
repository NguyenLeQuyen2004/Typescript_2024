import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Login() {
  return (
    <Form className='group-form'>
      <h1>Login</h1>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email address
        </label>
        <input type='email' className='form-control' id='email' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input defaultValue='' type='password' className='form-control' id='password' />
      </div>
      <Button variant='primary'>Login</Button>
    </Form>
  )
}

export default Login
