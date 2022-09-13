import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AddPirate = (props) => {
    const {pirates, setPirates} = props;
    const [pirateName, setPirateName] = useState("")
    const [pirateImg, setPirateImg] = useState("")
    const [pirateCatch, setPirateCatch] = useState("")
    const [crewPos, setCrewPos] = useState("")
    const [treasureNum, setTreasureNum] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const crewPositions = ['Captin','First Mate','Quarter Master','Powder Monkey','BoatSwain']
    const treasureNums = ['1','2','3','4','5','6','7','8','9','10']

const submitHandler=(e)=>{
    e.preventDefault();
        axios.post('http://localhost:8000/api/pirates',{
        pirateName,
        pirateImg,
        pirateCatch,
        crewPos,
        treasureNum,
        pegLeg,
        eyePatch,
        hookHand
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPirateName("");
            setPirateImg("");
            setPirateCatch("");
            setCrewPos("");
            setTreasureNum("");
            setPegLeg("");
            setEyePatch("");
            setHookHand("");

            setPirates([...pirates,res.data]);
            navigate('/pirates');
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
        }  

const nameHandler=(e)=>{
setErrors("")
setPirateName(e.target.value)
}
const imgHandler=(e)=>{
    setErrors("")
    setPirateImg(e.target.value)
}
const catchHandler=(e)=>{
    setErrors("")
    setPirateCatch(e.target.value)
}
const crewHandler=(e)=>{
    setErrors("")
    setCrewPos(e.target.value)
}
const treasureHandler=(e)=>{
    setErrors("")
    setTreasureNum(e.target.value)
}
const pegLegHandler=(e)=>{
    setErrors("")
    setPegLeg(e.target.value)
} 
const hookHandHandler=(e)=>{
setErrors("")
setHookHand(e.target.value)
}   
const eyePatchHandler=(e)=>{
setErrors("")
setEyePatch(e.target.value)
}      

return (
    <div>
        <div className="container">
            <div className="">
                <h1>Add Pirate</h1>
                <button className="btn hover" onClick={()=>navigate("/pirates") }>Crew Board</button> 
            </div>
            <div className="container">
                <form onSubmit={submitHandler} className="formInputDiv">
                <div className="formdiv">
                        <div className="formInputDiv">
                            <label className="input-label">Pirate Name:<br/>
                                {errors.pirateName ? <p>{errors.pirateName.message}</p>:null}
                                <input className="inputbox" type="text"  onChange={nameHandler} value={pirateName} />
                            </label>
                            <label className="input-label">Image URL:<br/>
                                {errors.pirateImg ? <p>{errors.pirateImg.message}</p>:null}
                                <input className="inputbox" type="text"  onChange={imgHandler} value={pirateImg} />
                            </label>
                            <label className="input-label"># OF Treasure Chests:<br/>
                                {errors.treasureNum ? <p>{errors.treasureNum.message}</p>:null}
                                <select  className="inputbox" onChange={treasureHandler}  value={treasureNum}>
                                  <option value=""></option>
                                    {
                                        treasureNums.map((item,idx)=>(
                                            <option key = {idx} value={item}>{item}</option>
                                        ))
                                    }
                                </select>           
                            </label>
                        </div> 
                        <div className="formInputDiv">
                                <label className="input-label">Pirate Catch:<br/>
                                    {errors.pirateCatch ? <p>{errors.pirateCatch.message}</p>:null}
                                    <input className="inputbox" type="text" label="Type" onChange={catchHandler} value={pirateCatch} />
                                </label>
                               
                                      {errors.crewPos ? <p>{errors.crewPos.message}</p>:null}
                                      <label className="input-label">Crew Position:</label>
                                        <select className="inputbox"  onChange = {crewHandler} name="" id="">
                                    
                                            {
                                                crewPositions.map((item,idx)=>(
                                                    <option key = {idx} value={item}>{item}</option>
                                                ))
                                            }
                                        </select>
                                        
                                
                                <label className="input-label">Peg Leg<br/>
                                    {errors.pegLeg ? <p>{errors.pegLeg.message}</p>:null}

                                    <input defaultChecked className="checkbox" type="radio" value="true" onChange={pegLegHandler} name="pegLeg" />
                                </label>
                                <label className="input-label">Hook Hand<br/>
                                    {errors.hookHand ? <p>{errors.hookHand.message}</p>:null}
                                    <input defaultChecked className="checkbox" type="radio" value="true" onChange={hookHandHandler} name="hookHand" />
                                </label>
                                <label className="input-label">Eye Patch<br/>
                                    {errors.eyePatch ? <p>{errors.eyePatch.message}</p>:null}
                                    <input defaultChecked  className="checkbox" type="radio" value="true" onChange={eyePatchHandler} name="eyePatch" />
                                </label>
                        </div>
                    </div>    
                    <br/>
                    <div className="btndiv">
                        <button onClick={submitHandler} type="submit" className = "btn hover">Add Pirate</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default AddPirate