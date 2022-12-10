import './student.css';
import React from 'react';

function Home() {

    return(
      <div className='container'>
        <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h2 class="mb-4">Hello User!</h2>
          <img src="https://cdn.pixabay.com/photo/2015/05/28/09/08/hyacinth-787758_960_720.jpg" alt="" class="w-100" height="500"/>
        </div>
        <div className="col-2"></div>
        </div>
      </div>
)       
}
export default Home;