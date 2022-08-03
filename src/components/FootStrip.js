import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FootStrip(prop) {
    let footStrip = useRef('');
    let foot_height = footStrip.current.offsetHeight;
    prop.setFootHeight(foot_height);

    const foot_array = ['Home', 'About Us', 'FAQs', 'Blog', 'Contact'];

    return (
        <>
            <div className='foot_strip' ref={footStrip}>
                <ul>
                    {
                        foot_array.map((nav_name) => {
                            return (
                                <Link key={nav_name} to={'user/'+nav_name} className='link'> <li> {nav_name} </li> </Link>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}
