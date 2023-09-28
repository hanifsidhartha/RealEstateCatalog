import React from "react";
import '../styles/Home.css'; 




const Home = () => {


 const handlclick=()=>{

  }
  return(
    <div className="property">
      <div className="container">
        <div className="header">
        <input type="text" placeholder="Search"/>
        <button onClick={handlclick}>ADDproperty</button>
        </div>
       
       

        
        <div className="body">

        </div>

      </div>



    </div>

  ) 
};

export default Home;
