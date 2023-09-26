'use client'

import { useState } from 'react'
import './CardUser.css'

const CardUser = ({user}) => {
  const [showCard, setShowCard] = useState(true)

  const handleDelete = async (userId) => {
    const response = await fetch(`http://localhost:3300/user/${userId}`, {
      cache: 'no-store',
      method: 'DELETE'
    })
  
    if (response.ok) {
      const result = await response.json()
      if (result?.success) {
        setShowCard(false)
      }
    }
  }

  return ( <> { showCard ? (
    <div key={user.id} className='card-user'>
      <img src={user.image} alt={user.name} width='70px' height='70px'/>
      <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>
          <span className='update'>Editar</span>
          <span className='delete' onClick={() => handleDelete(user.id)}>Excluir</span>
        </p>
      </div>
    </div>
  ) : null } </> )
}

export default CardUser