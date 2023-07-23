import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validate name
    if (!formData.name.trim()) {
      newFormErrors.name = "Name is required!";
      isValid = false;
    } else {
      newFormErrors.name = "";
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newFormErrors.phone = "Phone number is required!";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newFormErrors.phone = "Invalid phone number (10 digits required)";
      isValid = false;
    } else {
      newFormErrors.phone = "";
    }

    // Validate email
    if (!formData.email.trim()) {
      newFormErrors.email = "Email is required!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = "Invalid email address";
      isValid = false;
    } else {
      newFormErrors.email = "";
    }

    // Validate message
    if (!formData.message.trim()) {
      newFormErrors.message = "Message is required!";
      isValid = false;
    } else {
      newFormErrors.message = "";
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_y4opqnt",
          "template_mkwli49",
          event.target,
          "5zNLLpJH3lX__uDv1"
        )
        .then(
          function (response) {
            Swal.fire({
              title: "Success!",
              text: "Your form has been submitted successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
            setFormData({ name: "", phone: "", email: "", message: "" });
            console.log("SUCCESS!", response.status, response.text);
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <span className="text-red-900">{formErrors.name}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone Number</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {formErrors.phone && (
            <span className="text-red-900">{formErrors.phone}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <span className="text-red-900">{formErrors.email}</span>
        )}
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {formErrors.message && (
          <span className="text-red-900">{formErrors.message}</span>
        )}
      </div>
      <div>
        <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
      </div>
    </form>
  );
};

export default Form;
