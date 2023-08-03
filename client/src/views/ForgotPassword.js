import React, {useState} from 'react';
import '../styles/style.css'; 
import logo from '../abod logo.png'; 
import background from '../abod work_resized.jpg'; 

function ForgotPassword() {
    const [email, setemail] = useState('');

    const handleSubmit = async() =>{
        if(validateInput()){
            const res = await fetch('/user/reset',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email
                })
            }).catch(error => alert(error.message));
            if(res.ok){
                alert('A reset password link is sent to your email')
            }else{
                alert('Unsuccessful')
            }
        }else {
            alert('Please fill up all the fields')
        }
    }

    const validateInput = () => {
        if (email === ''){
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
                    <button className="submit-button" style={{width: '170px'}} onClick={() => handleSubmit()}>Reset Password</button>
                </div>
                <p>
                    Already have an account? <a href='/'>Login here</a>
                </p>
                <p>
                    Do not have an account? <a href='/register'>Register here</a>
                </p>
            </div>
        </div>
    )

}

export default ForgotPassword;