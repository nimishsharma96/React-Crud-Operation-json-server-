import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Read = () => {

    const [data, setdata] = useState([])



    const getdata = async () => {
        const res = await fetch('http://localhost:8000/users', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        })
        const resdata = await res.json();
        setdata(resdata)

    }

    const handledelete = async (id) => {
        const dlt = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE',
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body: JSON.stringify()
        })
        const dltdata = await dlt.json();
        getdata()

    }





    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className="form1" >
            <Link to={'/'} >
                <td><button type="button" class="btn btn-primary">ADD User</button></td>
            </Link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastNAme</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map((e, key) => {
                        return (
                            <tr>
                                <th scope="row">{e.id}</th>
                                <td>{e.name}</td>
                                <td>{e.lastname}</td>
                                <Link to={`/update/${e.id}`} ><td><button type="button" class="btn btn-warning">Update</button></td></Link>

                                <td><button onClick={() => handledelete(e.id)} type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        )

                    })
                }

                </tbody>
            </table>
        </div>
    )
}

export default Read