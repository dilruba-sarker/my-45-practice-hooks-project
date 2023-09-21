import React, { useContext } from 'react';
import { AssetContext } from '../GrandFa/GrandFa';

const Friend = () => {
    const gift= useContext(AssetContext)
        return (
        <div>
<h1>Friend</h1>
<p>{gift}</p>
        </div>
    );
};

export default Friend;