import React, { useState } from "react";

function WebsiteContact() {

  const [data,setData] =useState({
    fname:'',
    ename:'',
    nname:'',
    mname:'',
   } );

    const inputchange =(e)=>{
     let val=e.target.value;
     let name=e.target.name;
      setData((preValue) =>{
        return{
          ...preValue,
          [name] : val,

        }
       
    })}
    const  onsubmit=(event)=>{
      event.preventDefault();
      alert(`my name is : ${data.fname}
            my email is : ${data.ename}
            my mobile no is : ${data.nname}
            message is :${data.mname}`);
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us page</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onsubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Enter Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enetr Name"
                name="fname"
                value={data.fname}
                onChange={inputchange}
                
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Email"
                name="ename"
                value={data.ename}
                onChange={inputchange}
              
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone no
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enetr Mobile No"
                name="nname"
                value={data.nname}
                onChange={inputchange}
               
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="mname"
                value={data.mname}
                onChange={inputchange}
             
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsiteContact;
