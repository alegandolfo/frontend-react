import './CardUser.css'

const CardUser = ({user}) => {
  return (
    <div key={user.id} className="card-user">
      <img src={user.image} alt={user.name} width='70px' height='70px'/>
      <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default CardUser