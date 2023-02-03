import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { loginUser } from '../../actions/user_action';
import styles from "./Login.module.css";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onEmailHandler=(e)=>{
        setEmail(e.target.value)

        
    }
    const onPasswordHandler=(e)=>{
        setPassword(e.target.value)
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        let body ={
            email: email,
            password : password,
        }
       
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    navigate('/')
                } else {
                    alert('Error˝')
                }
            })

        
  
       
    }
    return (
        <div className={styles.sync}>
        <div className="login-header">
          <h1 >
            <Link to="/">logo</Link>
          </h1>
          

          <hr></hr>
          <p className={styles.Login1}>로그인 해주세요</p>
          <p></p>
        </div>
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type='password' value={password} onChange={onPasswordHandler}/>
                <br />
                <button formAction=''>
                    Login
                </button>
                <Link to="/join">회원가입</Link>
            </form>
        </div>
        </div>
    )
}

export default LoginPage;