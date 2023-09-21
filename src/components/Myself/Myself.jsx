import React from 'react';
import MySelf from './Myself';
import Special from './Special';

const MySelP = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Special asset={asset}></Special>
        </div>
    );
};

export default MySelP;