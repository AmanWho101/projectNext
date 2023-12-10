/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ContentHeader } from "@components";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// const axios = require('axios');

const Display = () => {
  const [res, setres] = useState([]);
  const [msg, setmsg] = useState();
  const [status, setstatus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost/joshadminlt/public/api/all`
      );
      const data = await response.json();
      setres(data.data);
      setmsg(data.msg);
      setstatus(data.data);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost/joshadminlt/public/api/all`);
    const data = await response.json();
    setres(data.data);
    setmsg(data.msg);
    setstatus(data.data);
  };

  return (
    <div>
      <ContentHeader title="Simple Crud React" />

      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">DataTable with default features</h3>
            </div>

            <div className="card-body">
              <table
                id="example1"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {res?.map((list: any, index) => (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{list.fname}</td>
                      <td>{list.lname}</td>
                      <td>{list.email}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            axios.get(
                              `http://localhost/joshadminlt/public/api/delete?id=` +
                                list.id
                            );

                            fetchData();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Display;
