
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Users = () => {
    const allUsers = useLoaderData();
    const [deleteUser,setDeleteUsers]=useState(allUsers)

    const handleDelete =(_id)=>{
        console.log('delete',_id)
     
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully')
                const remaining = deleteUser.filter(user => user._id !== _id);
                setDeleteUsers(remaining)
            }
        })
        
    }
    return (
        <div>
            <h1>All Users: {deleteUser.length}</h1>

           {
            deleteUser.map(user => <p key={user._id}>Name:{user.name} <br /> Email: {user.email} <br /> <button onClick={()=>handleDelete(user._id)}>delete</button> <Link to={`/update/${user._id}`}><button>Update</button></Link></p>)
           }
        </div>
    );
};

export default Users;