import React, { useRef } from 'react';

const RefForm = () => {
    const nameRef=useRef("")
    const emailRef=useRef("")
    const hadleSubmit=e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }

    return (
        <div>
              <form onSubmit={hadleSubmit}>
        <input ref={nameRef} className=" m-2 text-black" type="text" name="name" /> <br />
        <input ref={emailRef} className="text-black" type="email" name="email" id="" /> <br />
        <input
          className=" bg-orange-500 p-1 m-1 w-20"
          type="submit"
          value="submit"
        />
      </form>
        </div>
    );
};

export default RefForm;