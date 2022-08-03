import React from 'react';

function Input(prop) {

    return (
        <>
            <div className={prop.clas}>
                <div className={prop.circle_clas}>
                    <i className={prop.icon} aria-hidden='true'></i>
                </div>
                <input
                    type={prop.type}
                    name={prop.name}
                    placeholder={prop.placeholder}
                    onChange={prop.onChnage}
                    defaultValue={prop.val}
                    autoComplete='off'
                />
                <small> {prop.errorMessage} </small>
            </div>
        </>
    )
}

export default Input;