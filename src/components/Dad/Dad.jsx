import React from 'react';
import Myselp from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
          <div className='flex'>
            <Myselp asset={asset}></Myselp>
            <Brother asset={asset}></Brother>
            <Sister></Sister></div>
        </div>
    );
};

export default Dad;
