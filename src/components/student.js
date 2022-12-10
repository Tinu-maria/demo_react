import './student.css';
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Student() {
  const navigate = useNavigate();
  const [first_name, setFirstname] = useState('')
  const [last_name, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')

  // The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.
  // The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting


  const postStudent=(event)=>{
    event.preventDefault(); 
    // preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    axios.post("http://127.0.0.1:8000/api/student",{
        first_name,last_name,email,age,course
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    }

  const navigateToList = () => {
    navigate('/studentlist');
  };
  
  return (  
  <div className="container">
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">

        <h2>Add new Student</h2>
            <form afterSubmit={() => navigate('/home')} action="">
              First Name : 
              <input className='form-control' type="text" value={first_name} onChange={(event)=> setFirstname(event.target.value)}/>
              Last Name : 
              <input className='form-control' type="text" value={last_name} onChange={(event)=> setLastname(event.target.value)}/>
              Email : 
              <input className='form-control' type="text" value={email} onChange={(event)=> setEmail(event.target.value)}/>
              Age : 
              <input className='form-control' type="text" value={age} onChange={(event)=> setAge(event.target.value)}/>
              Course : 
              <input className='form-control' type="text" value={course} onChange={(event)=> setCourse(event.target.value)}/>
              <button onClick={postStudent} className='btn btn-info mt-3'>Add</button>
              <button onClick={navigateToList} className='btn btn-info mt-3 ms-3'>View</button>
            </form>

      </div>
      <div className="col-3"></div>
    </div>
  </div>
  );
}

export default Student;




