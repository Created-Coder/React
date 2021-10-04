import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/context'
import {useHistory} from 'react-router-dom'

function Trainer(){
    const [stdName, setstdName] = useState('')
    const [rollNo, setrollNo] = useState('')
    const [marks, setmarks] = useState('')
    const [feedback, setfeedback] = useState('')
    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory()

    return(
        <div>
            <label>
                Student Name: <input type="text" value={stdName} onChange={(e)=>setstdName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                Roll No: <input type="text" value={rollNo} onChange={(e)=>setrollNo(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                Marks: <input type="text" value={marks} onChange={(e)=>setmarks(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                Feedback: <input type="text" value={feedback} onChange={(e)=>setfeedback(e.target.value)}/>
            </label>
            <br/>
            <br/>

            <button onClick={()=>{
                const stdData = {
                    stdName : stdName,
                    rollNo : rollNo,
                    marks : marks,
                    feedback : feedback
                }
                
                // console.log(stdData)
                dispatch({ type: "SAVE_STD_DATA", payload: stdData });
            }}>
                Submit Data
            </button>

            <button onClick={()=>{
                history.push("/show-data")
            }}>Show Data</button>

        </div>
    )
} 


export default Trainer