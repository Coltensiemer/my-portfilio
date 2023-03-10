import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form"



export default function Form() {
  const [formData, setFormData] = React.useState({
    user_name: "",
    user_email: "",
    message: "",
    valid: true,
  });

  const { register } = useForm(); 

  //Manage state as you type
  function handleChange(event) {
    setFormData((preform) => {
      // GOing to return the array with the new target value (text)
      return {
        ...preform,
        [event.target.name]: event.target.value,
      };
    });
  }

  //   Form data send with EmailJS
  const form = useRef();
  const sendEmail = (e) => {
    // const validEmail = validator.isEmail(formData.email);

    sendEmail;
    e.preventDefault();

    // emailJs  sends form connecting.
    emailjs
      .sendForm(
        "service_1eupbug",
        "template_v9gk78u",
        form.current,
        "-w2anCXDO7X_ZsgpC"
      )
      .then(
        //makes the promise
        (result) => {
          console.log(result.text);
        },
        (error) => {
          // if errpr
          console.log(error.text);
        }
      );
  };

  console.log(formData);

  return (
    <div className="dark:bg-netural flex flex-col  m-12 border-double border-4 border-primary dark:border-primaryrounded-r-md overflow-hidden w-96">
      <form
        ref={form}
        onSubmit={sendEmail}
        onChange={handleChange}
        
        className="m-0 flex flex-col justify-center gap-4 text-black text-primary dark:bg-white dark:text-white "
      >
        <label className=""></label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          {...register("user_name", {required: true})} 
          className="text-black self focus:outline-primary"
          placeholder="First and Last Name"
          // validations={[required]}
        />
        <label className=""></label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          {...register("user_email", {required: true})}
          className="text-black focus:outline-primary"
          placeholder="Email"
        />
        <label className=" "></label>
        <textarea
          {...register("message")}
          value={formData.textbox}
          onChange={handleChange}
          className="h-80 overflow-scroll text-black border-2 focus:outline-primary"
          placeholder="Say Hello Here! "
        />
        <input
          className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

// TODO:::
// Vaildations
// Notficiation of message sent
// Styling
