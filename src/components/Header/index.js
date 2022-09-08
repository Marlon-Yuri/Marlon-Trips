import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'



export default function Header() {

  const qntReservas = useSelector(state => state.reserve)

  return (
    <header>
      <Link to='/'>
      <h3>AQUI VAI O LOGO </h3>
      </Link>

      <Link to='/reservas'>
      <div>
        <strong>Minhas reservas</strong>
        <span>{qntReservas.lenght} reservas</span>
      </div>
      </Link>
        
    </header>
  )
}
