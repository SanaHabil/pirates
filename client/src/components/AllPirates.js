import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'



const AllPirates = () => {

  const [pirates,setPirates] = useState([])
  const [pirate, setPirate] = useState({})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:8000/api/pirates')
      .then((res)=>{
          setPirates(res.data.pirates)
      })
      .catch((err)=>{
          console.log(err.response.data.error.errors)
          setErrors(err.response.data.error.errors)
      })
  },[pirates])
  

  const deleteHandler = (id) => {
    axios.delete('http://localhost:8000/api/pirates/' + id)
        .then((res) => {
            console.log(res)
            setPirate({})
            navigate("/pirates")
        })
        .catch((err) => console.log(err))
}

  return (
    <div className="container">
        <div className="">
            <h1>Pirate Crew</h1>
            <button className="btn hover" onClick={()=>navigate("/pirates/new") }>Add Pirate</button> 
        </div>
        <div className="tabledivstyle">
          <table >
            <tbody>
              {
                  pirates.map((item,idx)=>(  
                      <tr className="" key={idx}>
                        <td>
                          <p className="p-style">{item.pirateName}</p>
                          <p className="p-style">{item.pirateImg}</p>
                                  <div className="">
                                      <button className="btn" onClick={()=>navigate(`/pirates/${item._id}`) }>View Pirate</button>
                                      <button className="btn" onClick={deleteHandler}>Walk The Plank</button>
                                  </div>
                        </td>          
                      </tr>
                              ))
              } 
            </tbody>  
          </table>    
        </div> 
    </div>
  )
}

export default AllPirates