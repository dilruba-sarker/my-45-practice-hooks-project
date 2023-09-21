import React from "react";

const SimpleForm = () => {
    const hadleSubmit=e=>{
        e.preventDefault()
        console.log(" form is submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
  return (
    <div>
      <form onSubmit={hadleSubmit}>
        <input className=" m-2 text-black" type="text" name="name" /> <br />
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

export default SimpleForm;
