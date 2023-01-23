import React from "react";




function Common(props){

    return(
        <>
          
      <section id="header" className='d-flex align-items-center '>
        <div className="container-fluid nav_bg animated">
          <div className="row">
            <div className="col-10  mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
               <h1>{props.name}
               <strong>Ordex</strong></h1>
               <h2 className="my-3">
                We are the team  of tealented developer 💻 making websites
               </h2>
               <div className="mt-3 ">
                    <a href={props.href} className='btn  btn-get-started'>{props.btn}</a>
               </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
       
    )

}

export default Common;