import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

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

const handleSubmit = async (e)=>{
    e.preventDefault();
    const {name , lastname } = data;
const res = await fetch('http://localhost:8000/users' , {
    method:'POST',
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name , lastname
      })

} )

const resdata = await res.json()
// console.log(resdata)

navigate('/read')
}


    return (
        <div className='form1' >
            <form onSubmit={handleSubmit} >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='name'  value={data.name} onChange={handleChange} />

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

export default Home