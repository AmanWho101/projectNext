/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ContentHeader } from "@components";

const Blank = () => {
  return (
    <div>
      <ContentHeader title="Simple Crud React" />
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Display List Of student</h3>
              <div className="card-tools">
                {/*  */}
              </div>
            </div>
            <div className="card-body container">
              <div className="text-center">
                <h5>Displaying Lists of Students Using This Amazing Web-App!</h5>
                <hr />
              </div>
              <br />
              <div className="text-center">
                {/* display table */}

              </div>
            </div>
            <div className="card-footer">
              {/* footer */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blank;
