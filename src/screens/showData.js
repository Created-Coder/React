import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/context'
import {useHistory} from 'react-router-dom'

function ShowData(){
    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory()
    
    return(
        <div>
            <table border="5px" cellPadding="10px">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll No</th>
                        <th>Marks</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {state.stdData.map((std)=>{
                        return(
                            <tr>
                                <td> {std.stdName}</td>
                                <td> {std.rollNo}</td>
                                <td> {std.marks}</td>
                                <td> {std.feedback}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={()=>{
                history.push("/trainer-dash")
            }}>Add More Data</button>
        </div>
            
       
        
        )
    
        
    
}


export default ShowData