import React from "react";
import NavBar from "../Component/NavBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Footer from "../Component/Footer";
import FeildComponent from "../Component/FeildComponent";
function Contact() {
  const initialvalues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = yup.object({
    name: yup.string().required("required "),
    email: yup.string().email("invaild Email").required("required"),
    phone: yup.string(),
    message: yup.string(),
  });
  return (
    <>
      <div className=" bg-spi py-2 px-20">
        <NavBar />
        <div className="grid grid-cols-2 gap-10 justify-between   px-20">
          <img
            className="rounded-2xl  "
            alt="contact"
            src="https://images.unsplash.com/photo-1647201097511-c9059be8d82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <div className="flex flex-col justify-start ">
            <div>
              <p className="text-2xl font-semibold text-rash  ml-10">
                Contact us
              </p>
            </div>
            <Formik
              initialValues={initialvalues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form className="ml-10">
                <FeildComponent name="name" type="text" label="Name" />

                <FeildComponent name="email" type="email" label="Email" />

                <FeildComponent name="phone" type="phone" label="Phone" />
                <p className="text-rasasy font-semibold  mt-4">Message</p>
                <Field
                  placeholder="your message "
                  className="flex flex-row justify-start items-start w-4/5 h-10 rounded-2xl px-4 bg-rasasy bg-opacity-30  placeholder:text-white shadow-md mt-2  focus:bg-none focus:outline-none "
                  type="textarea"
                  name="message"
                  row="4"
                  col="10"
                />
                <div>
                  <ErrorMessage name="message" />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-rasasy text-xl font-semibold  shadow-lg  text-spi px-10 py-2 rounded-full mt-6"
                  >
                    Send
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
