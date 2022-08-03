import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Default() {
  const { name } = useParams();

  return (
    <>
      <div style={{ height: '100vh', border: '2px solid red', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Link to='/' style={{ position: 'absolute', top: '0%', left: '0%' }}> <h1> Go Login Page </h1> </Link>
        <h3>{name} Under Working</h3>
      </div>
    </>
  );
}

export default Default;