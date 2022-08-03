import React from 'react';
import Login from './Login_page/LoginPage';

export default function BodyWrap(prop) {
    return (
        <>
            <div className='body_wrap' style={{ height: prop.bodyWrapHeight + 'px' }}>
                <Login />
            </div>
        </>
    );
}