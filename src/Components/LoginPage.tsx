import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { loginActionCreater } from '../ApplicationStore/ActionCreater';
import { ILoginPageProps } from '../Interfaces/IProps';

import './LoginPage.module.scss';

function LoginPage(props:ILoginPageProps){

    const [userName,setUserName] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const onLoginClick=()=>{
        props.loginActionCreater(userName,password);
        alert(`Login Successful. Welcome ${userName}`);
    }

    return(
        <section>
            <h2> Login Page </h2>
            <label>UserName : </label>
            <input type='text' name='userName' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
            <label>Password : </label>
            <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={onLoginClick}>Submit</button>
        </section>
    )
}
export default connect(null,{loginActionCreater})(LoginPage);