'use client'

import { useEffect, useState } from "react"
import CardUser from "@/components/cards/CardUser"
import Modal from "./Modal"

const ListMembers = () => {
  const [users, setUsers] = useState([])
  const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState(false)

  useEffect(() => {
    const getMembers = async () => {
      const response = await fetch('http://localhost:3300/user/list', {cache: 'no-store'})
      const data = await response.json()
      setUsers(data)
    }
    getMembers()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      image: event.target.image.value
    }

    const response = await fetch("http://localhost:3300/user", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
  
    if (response.ok) {
      const result = await response.json()
      if(result?.success) {
        setUsers([...users, result.user])
      }
      setModalSignUpIsOpen(false)
    }
  }

  return (
    <>
      <h1>Bem vindo ao Membros</h1>
      <button style={{margin: '0 0 15px 0'}} onClick={() => setModalSignUpIsOpen(true)}>Cadastrar</button>
      {
        users.map((user) => {
          return (
            <CardUser key={user.id} user={user}/>
          )
        })
      }
      <Modal isOpen={modalSignUpIsOpen} setOpen={setModalSignUpIsOpen}>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          Nome: <input type="text" name="name"/><br/>
          Email: <input type="text" name="email"/><br/>
          Senha: <input type="text" name="password"/><br/>
          Foto: <input type="text" name="image"/><br/>

          <br/><input type="submit" value="Cadastrar"/>
        </form>
      </Modal>
    </>
  )
}

export default ListMembers