import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function Reservas() {
  return (
    <>
      <h1>1 reserva solicitada</h1>

    <section>
      <img src='https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg' alt='trip' />
      <strong>Viagem Maceio 7 dias</strong>
      <span>Quantidade: 2</span>
      <button onClick={()=>{}}>
       <MdDelete size={20} color= "#FFF" />
      </button>
    </section>

    <footer>
      <button>Solicitar reservas</button>
    </footer>

    </>
  )
}
