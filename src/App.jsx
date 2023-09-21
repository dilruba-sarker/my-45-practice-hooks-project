import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateFullForm from "./components/StateFullForm/StateFullForm";
import RefForm from "./components/RefForm/RefForm";
import HookForm from "./HookForm/HookForm";
import ReuseableForm from "./components/SimpleForm/ReuseableForm/ReuseableForm";
import GrandFa from "./components/GrandFa/GrandFa";

function App() {
  // const hadleSignUpSubmit = (da) => {
  //   console.log(da);
  // };
  // const hadleUpDateSubmit = (da) => {
  //   console.log(da);
  // };

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sign Up"} hadleSubmit={hadleSignUpSubmit}> */}
        {/* <p>Sign Up</p>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Update Up"}
        submitbtn={"update"}
        hadleSubmit={hadleUpDateSubmit}
      >
        <p>Sign Up</p>
      </ReuseableForm> */}
      <GrandFa></GrandFa>
    </>
  );
}

export default App;
