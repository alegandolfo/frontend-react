'use client'

import { useState } from 'react'
import './CardUser.css'
import Modal from '../utils/Modal'

const CardUser = ({user, users, setUsers}) => {
  const [showCard, setShowCard] = useState(true)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [image, setImage] = useState(user.image)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newUser = {
      id: event.target.id.value,
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      image: event.target.image.value
    }

    const response = await fetch(`http://localhost:3300/user/${newUser.id}`, {
      cache: "no-store",
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
  
    if (response.ok) {
      const result = await response.json()
      if(result?.success) {
        const editedUsers = users.map((user) => {
          if (user.id == newUser.id) return newUser
          return user
        })
        setUsers(editedUsers)
        setModalEditIsOpen(false)
      }
    }
  }

  return ( <> 
    { showCard ? (
      <div key={user.id} className='card-user'>
        <img src={user.image} alt={user.name} width='70px' height='70px'/>
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>
            <span className='update' onClick={() => setModalEditIsOpen(true)}>Editar</span>
            <span className='delete' onClick={() => handleDelete(user.id)}>Excluir</span>
          </p>
        </div>
      </div>
    ) : null }

    <Modal isOpen={modalEditIsOpen} setOpen={setModalEditIsOpen}>
        <h1>Editar</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={user.id}/>

          Nome: <input type="text" name="name" value={name} onChange={(event) => {setName(event.target.value)}}/><br/>
          Email: <input type="text" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/><br/>
          Senha: <input type="text" name="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/><br/>
          Foto: <input type="text" name="image" value={image} onChange={(event) => {setImage(event.target.value)}}/><br/>

          <br/><input type="submit" value="Editar"/>
        </form>
      </Modal>
  </> )
}

export default CardUser