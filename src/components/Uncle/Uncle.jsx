import React from 'react';
import Cusin from '../Cusin/Cusin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <div className='flex'>
                
                <Cusin asset={asset} name={"Asik"}></Cusin>
                <Cusin name={"Amim"}></Cusin>
            </div>
        </div>
    );
};

export default Uncle;