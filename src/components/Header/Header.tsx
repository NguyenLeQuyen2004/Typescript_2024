import { NavLink } from 'react-router-dom'
import App from '@/App.css'
import style from './Header.module.css'
import { Container, Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <NavLink to='/' className={style.navLink}>
          Home
        </NavLink>
        <NavLink to='/login' className={style.navLink}>
          Login
        </NavLink>
        <NavLink to='/register' className={style.navLink}>
          Register
        </NavLink>
        <NavLink to='/admin' className={style.navLink}>
          Admin Page
        </NavLink>
      </Navbar>
    </div>

    // <nav className='navbar navbar-expand-lg bg-body-tertiary'>
    //   <div className='container-fluid'>
    //     <NavLink className='navbar-brand' to='/'>
    //       Navbar
    //     </NavLink>
    //     <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon' />
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //         <li className='nav-item'>
    //           <NavLink className='nav-link active' aria-current='page' to='/'>
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className={style.navLink}>
    //           <NavLink className='nav-link' to='/shop'>
    //             Shop
    //           </NavLink>
    //         </li>
    //         <li className='nav-item'>
    //           <NavLink className='nav-link' to='/login'>
    //             Login
    //           </NavLink>
    //         </li>
    //         <li className='nav-item'>
    //           <NavLink className='nav-link' to='/register'>
    //             Register
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}
