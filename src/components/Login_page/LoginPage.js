import React, { useRef } from "react";
import { useState } from "react";
import Input from "./Input_fields_login_comp";
import { Link } from "react-router-dom";


export default function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const loginForm = useRef('');
    const checkBox = useRef('');
    const [userError, setuserError] = useState(false);
    const [passError, setpassError] = useState(false);
    const [remember, setRemember] = useState('remember');

    const handlesubmit = (e) => {
        e.preventDefault();
        return validateForm();
    }

    const validateForm = () => {

        // validate user field
        if (values.username === '') {
            setuserError('Enter your username!');
            console.log('re-rander user');
        }
        else if (values.username.length < 5) {
            setuserError('Minimum 5 characters!');
            console.log('re-rander userlength');
        }
        else {
            setuserError('');
            console.log('re-rander userblank');
        }

        //validate password field
        if (values.password === '') {
            setpassError('Enter your password!')
            console.log('re-rander pass');
        }
        else if (values.password.length < 8) {
            setpassError('Minimum 8 characters!')
            console.log('re-rander passlength');
        }
        else {
            setpassError('')
            console.log('re-rander passblank');
        }

    }

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            clas: 'user_name input_style',
            circle_clas: 'img_circle',
            icon: "fa fa-user",
            placeholder: 'Email Or Username',
            errorMessage: userError
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            clas: 'password input_style',
            circle_clas: 'img_circle',
            icon: 'fa fa-key',
            placeholder: 'Password',
            errorMessage: passError
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handelRemember = () => {
        if (checkBox.current.checked === true) {
            setRemember('')
            console.log(remember)
        }
        else {
            setRemember('remember')
            console.log(remember);
        }
    }

    return (
        <>
            <div className='login_wrap'>
                <div className='left_box'>
                    <section>
                        <h3>Join the club</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                            repellendus earum.
                        </p>
                        <div className="inner_sec_styl">
                            <div className="sec_styl_icon">
                                <Link to={''} > <i className='fa fa-laptop icon'></i> </Link>
                            </div>
                            <div className="sec_styl_name">
                                <h5>Community</h5>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="inner_sec_styl">
                            <div className="sec_styl_icon">
                                <Link to={''} > <i className='fa fa-shopping-basket icon' aria-hidden='true'></i> </Link>
                            </div>
                            <div className="sec_styl_name">
                                <h5>Online shop</h5>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="inner_sec_styl">
                            <div className="sec_styl_icon">
                                <Link to={''} > <i className='fa fa-globe icon' aria-hidden='true'></i> </Link>
                            </div>
                            <div className="sec_styl_name">
                                <h5>Job search</h5>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='right_box'>
                    <div className='logo_box'></div>
                    <h3>Welcome</h3>
                    <p>Join gazillions of people online</p>
                    <form action="" onClick={handlesubmit} ref={loginForm} >
                        {
                            <>
                                {inputs.map((input) => {
                                    return (<Input key={input.id} {...input} value={values[input.name]} onChnage={onChange} />)
                                })}
                                <div className='lost_pass'>
                                    <span><input type="checkbox" name='remember' value={remember} ref={checkBox} onChange={handelRemember} id="remember" /> <label htmlFor="remember">Remember</label></span>
                                    <span> Lost Password? </span>
                                </div>
                                <Input clas='submit input_style' circle_clas='img_circle' icon='' type='button' placeholder='' val="Log into your account" />
                                <Link to="user/signup">Signup</Link>
                            </>
                        }
                    </form>
                </div>
            </div>
        </>
    );
}