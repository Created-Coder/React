import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/context'
import { data } from '../context/reducer';
import {useHistory} from 'react-router-dom'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const { state, dispatch } = useContext(GlobalContext);


    // const sendUserInfo = (userInfoOBJ) => {
    //     console.log('USER INFO', userInfoOBJ);
    //     dispatch({ type: "UPDATE_USERS", payload: userInfoOBJ });
    // }
    let dataObj = []
    return (
        <div>
            <label>
                EMAIL: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                PASSWORD: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>

            <button onClick={()=>{
                console.log(state.users)
                
                state.users.map((usr)=>{
                    if(email === usr.email && password === usr.password){
                        // dispatch({ type: "UPDATE_AUTH", payload: usr });

                        if(usr.role == "trainer"){
                            history.push("/trainer-dash")
                        }

                        else if(usr.role == "student"){
                            history.push("/student-res")
                        }
                        
                        // console.log(state.authUser)
                    }


            
                    // console.log(state.data.authUser)
                })
               

            }}>Submit</button>
        </div>
    )
}


    //         <br/>
    //         <br/>
    //         <label>
    //             EMAIL: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    //         </label>
    //         <br/>
    //         <br/>
    //         <label>
    //             PASSWORD: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    //         </label>
    //         <br/>
    //         <br/>
    //         <label>
    //             ROLE: <input type="radio" name="roleOfUSer" value="Student" onClick={(e)=>setRole(e.target.value)}/>STUDENT
    //             <input type="radio" name="roleOfUSer" value="Trainer" onClick={(e)=>setRole(e.target.value)}/>TRAINER
    //         </label>
    //         <br/>
    //         <br/>
    //         <button onClick={()=>{
    //             if(userName == '' || email == '' || password == '' || role == '' ){
    //                 alert("Input Feilds Can Not Be Left Empty")
    //             }
    //             else{
                    
    //                 // let cloneUserInfo = userInfoOBJ

    //                 let userInfo = {
    //                     userName: userName,
    //                     email: email,
    //                     password: password,
    //                     role: role
    //                 }
                    
    //                 // cloneUserInfo.push(userInfo)

    //                 // setUserInfoOBJ(cloneUserInfo)
    //                 sendUserInfo(userInfo)
    //                 // console.log(userInfoOBJ)
    //                 setUserName('')
    //                 setEmail('')
    //                 setPassword('')
    //                 setRole('')

    //             }
    //             // console.log(userName,email,password,role)
    //         }}>
    //             SUBMIT FORM
    //         </button>
            
    //     </div>
    // )


export default Login
