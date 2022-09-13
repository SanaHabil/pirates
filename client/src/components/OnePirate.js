import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useNavigate,Link} from 'react-router-dom'


const OnePirate = () => {

  const [pirate, setPirate] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/pirates/'+id)
      .then((res)=>{
          //console.log(res.data.pet[0]);
          setPirate(res.data.pirate[0]);
          setPirate(res.data.pirate[0]);
      })
      .catch((err)=>{
          console.log(err)
      })
  },[])

  


  return (
    <div className="">
        <div>
            <h1>{pirate.pirateName}</h1>
        </div>
        
            <p className="p-style">About</p>
            <div className="tabledivstyle-card">
                <div className="card">
                    <p >Position:{pirate.crewPos}</p>
                    <p>Treasure:{pirate.treasureNum}</p>
                    <p>Peg Leg:{pirate.pegLeg}</p>
                      <button  type="submit" className = "btn-style hover">Yes</button>
                    <p> Hand Hook:{pirate.handHook}</p>
                      <button type="submit" className = "btn-style hover">Yes</button>
                    <p>Eye Patch:{pirate.eyePatch}</p>
                      <button type="submit" className = "btn-style hover">Yes</button>
                </div>
                <div className="">
                  <img style={{ borderRadius:'5px',border:'2px solid grey'}} src={pirate.pirateImg} alt="Pirate Img" />
                  <button className="btn hover" onClick={()=>navigate("/pirates") }>Crew Board</button> 
                </div>
              </div>   
      
        
    </div>
    
  )
}

export default OnePirate