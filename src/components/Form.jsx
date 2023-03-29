import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";


export default function Form() {
  const [disable, setdisable] = React.useState(false);

  function startDisable() {
    setdisable(true);
  }

  function endDisable() {
    setdisable(false, 5000);
  }

  //   Form data send with EmailJS
  const form = useRef();
  const sendEmail = (e) => {
    // const validEmail = validator.isEmail(formData.email);

    sendEmail;

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

    reset();
    startDisable();
    endDisable();
  };

  // Form useForm Plugin
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    user_name: "",
    user_email: "",
    message: "",
  });

  return (
    <div
      id="form"
      className="dark:bg-netural flex flex-col self-center w-64 h-{300} md:w-80 border-double border-4 border-primary dark:border-primary rounded-r-md overflow-hidden   shadow-3xl"
    >
      <form
        ref={form}
        autoComplete="on"
        onSubmit={handleSubmit(sendEmail)}
        className="m-2 flex flex-col justify-center gap-4 text-black dark:bg-neutral dark:text-white "
      >
        <input
          type="text"
          name="firstandlast"
          aria-label="First and Last Name"
          {...register("user_name", { required: true })}
          className="text-black self focus:outline-primary border-b-2 p-2 border-primary dark:bg-neutral dark:text-white pl-2"
          placeholder="First and Last Name"
        
        />
        {errors.user_name && (
          <span className="text-red-500"> This field is required</span>
        )}

        <input
          type="email"
          name="email"
          aria-label="Email"
          value={register.user_email}
          
          {...register("user_email", { required: true })}
          className="text-black focus:outline-primary border-b-2 border-primary p-2 dark:bg-neutral dark:text-white pl-2"
          placeholder="Email"
        />
        {errors.user_email && (
          <span className="text-red-500"> This field is required</span>
        )}

        <textarea
          {...register("message", { required: true })}
          aria-label="Message"
          className="h-52 overflow-scroll text-black dark:text-white border-b-2 border-primary focus:outline-primary dark:bg-neutral pl-2"
          placeholder="Say Hello Here! "
        />
        {errors.message && (
          <span className="text-red-500"> This field is required</span>
        )}
        <input
          className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10 disabled:opacity-50"
          type="submit"
          name="submit"
          value="Send Message"
          aria-label="Submit Email Form"
          disabled={disable}
        />
      </form>
    </div>
  );
}


