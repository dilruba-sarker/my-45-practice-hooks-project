import React, { useContext } from 'react';
import { AssetContext } from '../GrandFa/GrandFa';

const Special = ({asset}) => {
    const gift= useContext(AssetContext)
    return (
        <div>
<h2 >special</h2>
<p>
has{asset} and also has {gift}
</p>
        </div>
    );
};

export default Special;