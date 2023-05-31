import React, { useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { useEffect } from "react";


const Update =()=>{

const {id} = useParams()

const [data , setdata ] = useState({})
// console.log(data)

const navigate = useNavigate()

const handleChange =(e)=>{
    const {name , value} = e.target
    
        setdata((prev)=>({
            ...prev,
            [name]:value
        }))
    }

const getdata = async () => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify()
    })
    const resdata = await res.json();
    setdata(resdata)

}
const handleUpdate = async (e)=>{
    e.preventDefault();
    const {name , lastname } = data;
const res = await fetch(`http://localhost:8000/users/${id}` , {
    method:'PATCH',
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, lastname
      })

} )

const resdata = await res.json()
// console.log(resdata)

navigate('/read')
}


useEffect(() => {
    getdata()
}, [])


    return(
        <div className='form1' >
        <form onSubmit={handleUpdate} >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name='name' value={data.name} onChange={handleChange}  />

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Lastname</label>
                <input type="text" class="form-control" id="exampleInputPassword1" 
                name='lastname'  value={data.lastname} onChange={handleChange} />
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default Update

