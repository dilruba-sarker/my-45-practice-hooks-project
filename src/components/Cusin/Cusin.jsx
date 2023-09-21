import React, { useContext } from 'react';
import Special from '../Myself/Special';
import { AssetContext } from '../GrandFa/GrandFa';
import Friend from '../Friend/Friend';

const Cusin = ({name,asset}) => {
    const gift= useContext(AssetContext)
    return (
        <div>
      <h2>{name} </h2>
       
         {name==="Ali"&&<Friend></Friend>}
        </div>
    );
};

export default Cusin;