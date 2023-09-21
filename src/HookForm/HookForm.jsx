import React from 'react';
import useInputState from '../components/StateFullForm/useInputState';

const HookForm = () => {

    const setName=useInputState('dilruva')
    const hadleSubmit=e=>{
        e.preventDefault()
        console.log(setName.value);
    }
    return (
        <div>
 <form onSubmit={hadleSubmit}>
        <input {...setName} className=" m-2 text-black" type="text" name="name" /> <br />
        <input className="text-black" type="email" name="email" id="" /> <br />
        <input
          className=" bg-orange-500 p-1 m-1 w-20"
          type="submit"
          value="submit"
        />
      </form>
        </div>
    );
};

export default HookForm;