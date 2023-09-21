import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Auntry from '../Auntry/Auntry';
import Uncle from '../Uncle/Uncle';
import "./GrandFa.css"
 export const AssetContext=createContext('gold')
 export const MoneyContext=createContext(1000)
const GrandFa = () => {
const asset="ring"
const  [money,setMoney]=useState(1000)
    return (
        <div className='grandfa  '>

           <h2>GrandFa</h2>
            <p>money:{money}</p>
           <MoneyContext.Provider value= {[money,setMoney]}>
           
     
      
     <div className='flex'>
       <Dad asset={asset}></Dad>
      <Auntry></Auntry>
      <Uncle asset={asset}></Uncle></div>
   
           </MoneyContext.Provider>
        </div>
    );
};

export default GrandFa;