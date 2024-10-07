import "./user.css";

function User({name, occupation}){
  return(
    <div className="user">
      <p>Name: <span>{name}</span></p>
      <p>Ocuppation: <span>{occupation}</span></p>

    </div>
  )
}

export default User;