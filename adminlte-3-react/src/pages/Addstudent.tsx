/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ContentHeader } from "@components";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { number } from "yup";
import { Toast } from "react-bootstrap";


const Addstudent = () => {

  const toastRef = useRef();
  var [toast, setToast] = useState(false);
  const [msg, setmsg] = useState();
  const [status, setstatus] = useState();
  const [fnames, setfname] = useState();
  const [lnames, setlname] = useState();
  const [emails, setemail] = useState();
  const email = useRef(null);
  const fname = useRef(null);
  const lname = useRef(null);

  const Addstud = (fnames:any,emails:any,lnames:any) => {
    const fnamec = fname.current ? fname.current.value : null;
    const lnamec = lname.current ? lname.current.value : null;
    const emailc = email.current ? email.current.value : null;
   const r = axios.post(
      `http://localhost/joshadminlt/public/api/add?fname=`+fnamec+`&lname=`+lnamec+`&email=`+emailc
    ).then((res)=>{
      console.log(res.data.msg)
      // setres(data.data);
      setmsg(res.data.msg);
      // setstatus(res.data.msg);
    });
  
    fname.current ? fnames : null;
    lname.current ? lnames : null;
    email.current ? emails : null;
  }
  const messages = ()=>{
    setTimeout(()=> {
 
      
      }, 30000);
  }
 
  

  return (
 
    <div>

      {   
      msg?
      <Toast onClose={()=>{
        setmsg(null);
      }}>
      <Toast.Header>
        <strong className="me-auto float-right">Message</strong>
        <small className="me-auto float-right">11 mins ago</small>
        
      </Toast.Header>
      <Toast.Body>
        {msg}
        </Toast.Body>
    </Toast>:''
}
      <ContentHeader title="Simple Crud React" />
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Register</h3>
              <div className="card-tools">
              </div>
            </div>
            <div className="card-body container">
              <div className="text-center">
                <h5>Start Registering Your Self Using This Amazing Web-App!</h5>
                <hr />
              </div>
              <br />
              <div className="text-center">
                <form onSubmit={(e)=>{
                  Addstud(fname,lname,email);
                  e.preventDefault();
                }}>
                  <div className="row">
                    <div className="form-group col-3 col-sm-4 col-md-2">
                      <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="form-group col-6 col-sm-8 col-md-4">
                      <input
                      value={fnames}
                      ref={fname}
                        type="text"
                        
                        id="fname"
                        className="form-control border-width-2"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-3 col-sm-4 col-md-2">
                      <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="form-group col-6 col-sm-8 col-md-4">
                      <input
                        type="text"
                        id="lname"
                        ref={lname}
                        className="form-control border-width-2"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-3 col-sm-4 col-md-2">
                      <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-group col-6 col-sm-8 col-md-4">
                      <input
                        type="text"
                        id="email"
                        ref={email}
                        className="form-control border-width-2"
                      />
                    </div>
                  </div>
                  <button
              className="btn btn-success float-right"
              
              >Submite
              </button>
                </form>
              </div>
            </div>
            <div className="card-footer">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addstudent;
