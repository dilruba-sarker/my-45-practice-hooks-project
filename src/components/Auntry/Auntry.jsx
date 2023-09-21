import React, { useContext } from "react";
import Cusin from "../Cusin/Cusin";
import { MoneyContext } from "../GrandFa/GrandFa";

const Auntry = () => {
const[money,setMoney]=useContext(MoneyContext)
  return (
    <div>
      <h2>Aunty</h2>
      <div className="flex">
        <Cusin name={"Mahadi"}></Cusin>
        <Cusin name={"Ali"}></Cusin>
      </div>
      <p>money:{money}</p>
      <div>
        <button onClick={()=>setMoney(money+1000)}>Add 1000</button>
      </div>
    </div>
  );
};

export default Auntry;
