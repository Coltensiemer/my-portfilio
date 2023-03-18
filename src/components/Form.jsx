import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form"



export default function Form() {

  const [disable, setdisable] = React.useState(false) 

  function startDisable() { 
    setdisable(true)
  }

  function endDisable() { 
    setdisable(false, 5000)
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
      
      reset()
      startDisable()
      endDisable()
  };

// Form useForm Plugin 
  const { register, handleSubmit, reset,  formState: { errors }} = useForm({ 
    user_name: "",
    user_email: "",
    message: "",
  }); 
  // console.log(formData);





  console.log(register.user_name)

  return (
    <div className="dark:bg-netural flex flex-col  m-12 border-double border-4 border-primary dark:border-primaryrounded-r-md overflow-hidden w-96">
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        // onChange={handleChange}
        
        className="m-0 flex flex-col justify-center gap-4 text-black text-primary dark:bg-white dark:text-white "
      >
        
        <input
          type="text"
          // value={formData.name}
          // onChange={handleChange}
          {...register("user_name", {required: true})} 
          className="text-black self focus:outline-primary"
          placeholder="First and Last Name"
          // validations={[required]}
        />
        {errors.user_name && <span className="text-red-500"> This field is required</span>}
        
        <input
          type="email"
          value={register.user_email}
          // onChange={handleChange}
          {...register("user_email", {required: true})}
          className="text-black focus:outline-primary"
          placeholder="Email"
        />
        {errors.user_email && <span className="text-red-500">> This field is required</span>}
        
        <textarea
          {...register("message", { required: true})}
          // value={formData.textbox}
          // onChange={handleChange}
          className="h-80 overflow-scroll text-black border-2 focus:outline-primary"
          placeholder="Say Hello Here! "
        />
        {errors.message && <span className="text-red-500">> This field is required</span>}
        <input
          className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10 disabled:opacity-50"
          type="submit"
          value="Send Message"
          disabled={disable}
        />
      </form>
    </div>
  );
}

// TODO:::
// Button disable 
// Styling
