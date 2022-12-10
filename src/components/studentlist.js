import './student.css';
import { useState, useEffect } from "react";
import axios from "axios";

function Studentlist() {
  const [student, setStudent] = useState([])
  const [order, setOrder] = useState("ASC")

  // The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.
  // The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/student")
    // Axios allows you to fetch data and make HTTP requests
    .then(res=>{
        console.log(res.data);
        setStudent(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  },[])

  const sorting=(col)=>{
    if (order==="ASC"){
      const sorted = [...student].sort((a,b)=>
        a[col] > b[col] ? 1 : -1);
        setStudent(sorted);
        setOrder("DSC")
    }
    if (order==="DSC"){
      const sorted = [...student].sort((a,b)=>
        a[col] < b[col] ? 1 : -1);
        setStudent(sorted);
        setOrder("ASC")
    }
  }

  return (  
  <div className="container">
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">

        <h2>List of Students</h2>
          <table>
            <tr>
              <th>ID<button className='btn dropdown-toggle' onClick={()=>sorting("id")}></button></th>
              <th>First Name<button className='btn dropdown-toggle' onClick={()=>sorting("first_name")}></button></th>
              <th>Last Name<button className='btn dropdown-toggle' onClick={()=>sorting("last_name")}></button></th>
              <th>Email Address<button className='btn dropdown-toggle ms-4' onClick={()=>sorting("email")}></button></th>
              <th>Age<button className='btn dropdown-toggle' onClick={()=>sorting("age")}></button></th>
              <th>Course<button className='btn dropdown-toggle' onClick={()=>sorting("course")}></button></th>
            </tr>
            {
              student.map((student, i)=>{
                return(
                  <tr key={i}>
                    <td>{student.id}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>{student.course}</td>
                  </tr>
                )
              })
            }
          </table>
      </div>
      <div className="col-3"></div>
    </div>
  </div>
  );
}

export default Studentlist;




