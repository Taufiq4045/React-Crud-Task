import { UserContext } from "../App";
import { useContext } from "react";
import "./users.css"
import { Link } from "react-router-dom";
import axios from "axios";



function DisplayUsers({data})
{   
    const list=useContext(UserContext)

    const deleteUser=async()=>
    {
        await axios.delete(`https://611f26749771bf001785c74e.mockapi.io/users/${data.id}`)
        list.getUser()
    }
   
    return(
        <>
     
        <div className="outercontainer">
        <div className="innercontainer">
            <div className="card">
                <div className="cardHeader">
                    <img  className="cardImage" src="https://p1.pxfuel.com/preview/648/711/697/background-cover-fantasy-space-future-structure.jpg" alt="/" />
                </div>
                <div className="cardBody">
                    <div className="bodyImage">
                        <div><img className="userImage" src={data.avatar} alt="profile"/></div>
                        <div><h3 className="imageName">{data.username}</h3></div>
                        <div><Link to={`/profile/${data.id}`}><button className="imageButton">View Profile</button></Link></div>
                    </div>
                    <div className="bodyDetails">
                        <div><h3>{data.job}</h3></div>
                        <div><h4>{data.company}</h4></div>
                        <div><p>{data.email}</p></div>
                    </div>
                    <div className="bodyButtons">
                        <div><Link to={`/edit-user/${data.id}`}><button className="imageButton">Edit </button></Link></div>
                       <div><button className="imageButton" onClick={deleteUser}>Delete </button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default function User()
{
const userList=useContext(UserContext)
return(
    <>
    {console.log(userList.user)}

    {userList.user.map(a=>{
        return (<DisplayUsers data={a}/>)
    })}
    
    </>
)
}