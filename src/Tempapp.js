
import React ,{useEffect, useState} from 'react'
import './components/Styles/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const Tempapp = () => {
    const [state,setState]=useState(null);
    const [search,setSearch]=useState("Mumbai");
    useEffect(()=>{
    
        const fetchApi=async()=>{
const APUIURL=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e0afd2d514d960fd2aec35743dbc73f1`
const response=await fetch(APUIURL);
const resjson= await response.json();
console.log(resjson);

setState(resjson.main);
        }
fetchApi();
    },[search])
    


  

   
   

   
  
  return (
    <>
   
<div className='box'>

    <div className='container'>
    <h1 style={{textAlign:"center",fontFamily:"'Inter', sans-serif",fontFamily:"'Roboto', sans-serif",color:"white",fontSize:"70px"}}>WEATHER FORECAST APP</h1>
      {/* <img src="%public/"></img> */}
        <input type="search"

        placeholder='Search by City'
        className='input' onChange={(e)=>{setSearch(e.target.value)}} ></input>


     {
      !state?(
        <p>No data found</p>
      ):(
        <>
        <div className='info'>
    
    <div className='left'>
    <h2 className='head'>
      {search}
    </h2>
<h3 style={{marginTop:"12px", fontFamily: "'Roboto', sans-serif", color:"white"}}>
<FontAwesomeIcon icon="check-square" />HUMIDITY :{state.humidity}</h3>
    
    
    <div className='next'>
      <ul>
        <li>MIN :</li>
        <li>{state.temp_min}°C</li>
      </ul>
    
    </div>
    <div className='next_r'>
    <ul>
        <li>MAX :</li>
        <li>{state.temp_max}°C</li>
      </ul>
    </div>
    </div>
    <div className='right'>
<h1 className='temp'>{state.temp}°</h1>

</div>
</div>




        </>
      )
     }

</div>
</div>

</>
  )
}


export default Tempapp