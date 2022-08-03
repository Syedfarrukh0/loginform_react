import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header(prop) {
    let header = useRef('');
    let header_height = header.current.offsetHeight;
    prop.setHeaderHeight(header_height);

    return (
        <>
            <header ref={header}>
                <div className='left'>
                    <Link to='/'>
                        <img src="" alt="" />
                    </Link>
                </div>
                <div className='right'>
                    <Link to='user/signup' > <i className='fa fa-sign-in' aria-hidden='true'></i> <h6>Signup</h6> </Link>
                    <i className='fa fa-bars' aria-hidden='true'> </i>
                </div>
            </header>
        </>
    );
}
