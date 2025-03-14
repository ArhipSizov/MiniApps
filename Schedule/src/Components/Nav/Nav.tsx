import { NavLink } from 'react-router'
import './Nav.scss'


export default function Nav() {

  return (
    <div className='nav'>
      <NavLink to="real">
        <p>Реальное</p>
      </NavLink>
      <NavLink to="full_name">
        <p>ФИО</p>
      </NavLink>
      <NavLink to="main">
        <p>Фактическое</p>
      </NavLink>
    </div>
  )
}
