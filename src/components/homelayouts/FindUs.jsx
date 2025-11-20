import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 join-item"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 join-item"><FaInstagram></FaInstagram> Instragram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
