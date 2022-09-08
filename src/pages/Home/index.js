import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {MdFlightTakeoff } from 'react-icons/md'
import api from '../../services/api'
 

export default function Home() {

const dispath = useDispatch()

  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function LoadApi(){
      const response = await api.get('trips')
      setTrips(response.data)
      console.log(response.data)
    }

    LoadApi()
  }, [])
  
  function handleReserve(trip){
    dispath({
      type: 'ADD_RESERVE',
      trip
    })
  }

  return (
    <div>
      <div>
        {trips.map(item => (
          <li key={item.id}>
            <img src={item.image} alt ={item.title} />
             <strong>{item.title}</strong>
             <span>Status: {item.status ? 'Disponível' : 'Indisponível'}</span>
             <button onClick={() =>{handleReserve(item)}}>
              <div>
                <MdFlightTakeoff size={16} color ='#FFF'/>
              </div>
             <span> Solicitar Reserva</span>
              </button>
            </li>
        ))}
      </div>
    </div>
  )
}
