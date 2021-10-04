import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/context'


function SignUp() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    // const [userInfoOBJ, setUserInfoOBJ] = useState([])
    const { state, dispatch } = useContext(GlobalContext);

    const sendUserInfo = (userInfoOBJ) => {
        console.log('USER INFO', userInfoOBJ);
        dispatch({ type: "UPDATE_USERS", payload: userInfoOBJ });
    }

    return (
        <div>
            <label>
                USERNAME: <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                EMAIL: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                PASSWORD: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                ROLE: <input type="radio" name="roleOfUSer" value="Student" onClick={(e)=>setRole(e.target.value)}/>STUDENT
                <input type="radio" name="roleOfUSer" value="Trainer" onClick={(e)=>setRole(e.target.value)}/>TRAINER
            </label>
            <br/>
            <br/>
            <button onClick={()=>{
                if(userName == '' || email == '' || password == '' || role == '' ){
                    alert("Input Feilds Can Not Be Left Empty")
                }
                else{
                    
                    // let cloneUserInfo = userInfoOBJ

                    let userInfo = {
                        userName: userName,
                        email: email,
                        password: password,
                        role: role
                    }
                    
                    // cloneUserInfo.push(userInfo)

                    // setUserInfoOBJ(cloneUserInfo)
                    sendUserInfo(userInfo)
                    // console.log(userInfoOBJ)
                    setUserName('')
                    setEmail('')
                    setPassword('')
                    setRole('')

                }
                // console.log(userName,email,password,role)
            }}>
                SUBMIT FORM
            </button>
            
        </div>
    )
}

export default SignUp
