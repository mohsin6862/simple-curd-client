import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const updateUser = useLoaderData()

    const handleUpdate =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name,email}
        console.log(name,email)
        fetch(`http://localhost:5000/users/${updateUser._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data. modifiedCount>0){
                alert('Information Updated')
            }
        })
    }
    return (
        <div>
            <h1>Update information of {updateUser?.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={updateUser?.name} />
                <br />
                <input type="email" name='email' defaultValue={updateUser?.email} />
                <br />
                <input type="submit" value='UPDATE' />
            </form>
        </div>
    );
};

export default Update;