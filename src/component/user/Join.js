import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import styles from "./Join.module.css"
import { registerUser } from '../../actions/user_action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Join(props) {
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");


    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };
    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const validation = () => {
        
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if( password && confirmPassword && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        e.preventDefault();
       
        let body ={
            email:email,
            password:password,
            name : userName
        }
        dispatch(registerUser(body))
        .then(reponse =>{
         if(reponse.payload.success){
            navigate("/login");
            
         }else{
            alert("회원가입이 실패하엿습니다")
         }
            
        })
        if(validation()) return;
        
        // API Call
        

    }

    return (
        <div>
            <Container className="panel">
                <Form>
                 
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                            {passwordError && <div className="invalid-input">비밀번호는 8자 이상이어야 하며 문자와 숫자를 각각 하나 이상 포함해야 합니다 </div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Password 확인" value={confirmPassword} onChange={onChangeConfirmPassword} />
                            {confirmPasswordError && <div className="invalid-input">비밀번호가 일치하지 않았습니다.</div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="이름" value={userName} onChange={onChangeUserName} />
                            {userNameError && <div className="invalid-input">필수입니다.</div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={50} type="input" placeholder="이메일 주소" value={email} onChange={onChangeEmail} />
                            {emailError && <div className="invalid-input">유효한 이메일 형식을 입력하십시오.</div>}
                        </Col>
                    </Form.Group>
                    <br />
                    <div className="d-grid gap-1">
                        <Button variant="secondary" onClick={onSubmit}>
                            가입하기
                        </Button>
                    </div>
                </Form>
                <br />
                <span className="text">Have an account? <Link to="/login" className="link">로그인 하기</Link></span>
            </Container>
        </div>
    );
}

export default Join