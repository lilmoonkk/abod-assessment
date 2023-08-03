import React, {useState} from 'react';
import '../styles/style.css'; 
import logo from '../abod logo.png'; 
import background from '../abod work_resized.jpg'; 

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = async() =>{
        if(validateInput()){
            const res = await fetch('/user/login',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email, 
                    password: password
                })
            }).catch(error => alert(error.message));
            if(res.ok){
                alert('You have logged in to your account successfully')
            }else{
                alert('Unsuccessful')
            }
        }else {
            alert('Please fill up all the fields')
        }
    }

    const validateInput = () => {
        if (email === '' || password ===''){
            return false
        }
        return true
    }

    return(
        <div id='container'>
            <div className='left-container' style={{background:  `url('${background}')`, backgroundSize: 'cover'}}>

            </div>
            <div className='right-container'>
                <img src={logo} className='logo' alt='abod logo'></img>
                <div className='login-form'>
                    <input className="form-input" type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
                    <input className="form-input" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                    <button className="submit-button" onClick={() => handleSubmit()}>Login</button>
                </div>
                <p>
                    Do not have an account? <a href='/register'>Register here</a>
                </p>
                <p>
                    <a href='/forgot-password'>Forgot Password</a>
                </p>
            </div>
        </div>
    )

}

export default Login;