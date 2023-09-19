'use client'

import './CardUser.css'

const handleDelete = async (userId) => {
  const response = await fetch(`http://localhost:3300/user/${userId}`, {
    cache: 'no-store',
    method: 'DELETE'
  })
  console.log(response) 
}

const CardUser = ({user}) => {
  return (
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
  )
}

export default CardUser