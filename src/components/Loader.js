import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
  return (
    <>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: '600px', flexDirection:'column'}}>
        <h2>Loading</h2>
        <Spinner animation="border" variant="primary" >
          <span className="sr-only">Loading</span>
        </Spinner>
      </div>
    </>
  );
};
export default Loader;