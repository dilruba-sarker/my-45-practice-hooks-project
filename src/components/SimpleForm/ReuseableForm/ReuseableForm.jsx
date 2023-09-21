import React from 'react';

const ReuseableForm = ({formTitle,hadleSubmit,submitbtn='Submit',children}) => {
   const handleLocalSubmit=e=>{
    e.preventDefault()
    const data={
name: e.target.name.value,
email: e.target.email.value,

    }
    hadleSubmit(data)
   
   }
    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
           { children}
<form onSubmit={handleLocalSubmit}>
        <input className=" m-2 text-black" type="text" name="name" /> <br />
        <input className="text-black" type="email" name="email" id="" /> <br />
        <input
          className=" bg-orange-500 p-1 m-1 w-20"
          type="submit"
          value={submitbtn}
        />
      </form>

        </div>
    );
};

export default ReuseableForm;