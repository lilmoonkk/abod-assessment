import React, {useEffect, useState} from 'react';
import '../styles/style.css'; 
import logo from '../abod logo.png'; 
import background from '../abod work_resized.jpg'; 

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {

    }, []);

    const handleSubmit = async() =>{
        /*const res = await fetch('/user/login',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email, 
                password: pw
            })
        }).catch(error => alert(error.message));
        if(res.ok){
            const data = await res.json();
            //If single value, use res.text()
            sessionStorage.setItem('uid', data.uid);
            sessionStorage.setItem('wallet_address', data.wallet_address);
            window.location.replace('/')
        } else {
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000);
        }*/
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

export default Login;