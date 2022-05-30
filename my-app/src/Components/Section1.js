import React from "react";

export default function Section1() {
  return (
    <>
      <div className="section1">
        <div className="sec1-1">
        <h1 className="mb-4 sec1-h1">Counseling For Your Better Life</h1>
        <p className="mb-4">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <p>
          <a href="#" className="btn btn-primary py-3 px-4 sec1-btn1">
            Contact us
          </a>{" "}
          <a href="#" className="btn btn-white py-3 px-4 sec1-btn2">
            Read more
          </a>
        </p>
        </div>
        <a href="#" className="img-video popup-vimeo d-flex align-items-center justify-content-center">
<i className="fa fa-play sec1-i1"></i>
</a>
      </div>
    </>
  );
}
