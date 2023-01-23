import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
function WebsiteService() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10  mx-auto">
              <div className="row gy-4">
                {
                    Sdata.map((val,index)=>{
                        return<Card key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text} />
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsiteService;
