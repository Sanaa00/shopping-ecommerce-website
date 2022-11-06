import React from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 gap-10  justify-start bg-spi px-40 text-rash  font-semibold py-20">
        <div className="w-40">
          <div>
            our office are locaten in the Kurdistan-Erbil,Sulaymaniah ,Duhok{" "}
          </div>
          <div className="flex flex-row justify-start mt-2">
            <BsInstagram className="mr-2" />
            <ImFacebook className="mx-2" />
            <BsTwitter className="mx-2" />
          </div>
          <div className="mt-2">2022 LUMITY</div>
        </div>

        <div className="w-40">
          <p className="font-bold">MENU</p>
          <p className="mt-2">Home</p>
          <p className="mt-2">Shop</p>
          <p className="mt-2">Contact</p>
          <p className="mt-2">Blog</p>
        </div>
        <div className="w-40">
          <p className="font-bold">Customer Care</p>
          <p className="mt-2">shipping</p>
          <p className="mt-2">Return Information</p>
          <p className="mt-2">Privacy Policy</p>
          <p className="mt-2">My Account</p>
        </div>
        <div className="w-40">
          <p className="font-bold">Subscribe</p>
          <p className="mt-2">
            to recieve exclusive prommotion,private sells ,and news
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
