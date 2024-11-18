'use client';
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrMsg from "../err-msg";
import { RightArrowFour } from "../svg";
import emailjs from "emailjs-com";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export default function ContactForm() {
    const {register,handleSubmit, reset, formState: { errors }} = useForm<Inputs>()
    const [responseMessage, setResponseMessage] = useState<string>('');
      const onSubmit: SubmitHandler<Inputs> = (data) => {
       console.log(data);
      emailjs.send('service_xn9o6c8', 'template_w4v678i', data, 'fJvlrUkxSq20q7xBn')
      console.log('Success');
      reset();      
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-contact-input-form">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input p-relative">
                            <label>Your Name</label>
                            <input type="text" {...register("name", { required: "Name is required" })} name="name" />
                            {errors.name?.message && <ErrMsg msg={errors.name.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input p-relative">
                            <label>Email Address</label>
                            <input type="email" {...register("email", { required: "Email is required" })} name="email" />
                            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                        <div className="tp-contact-input p-relative">
                            <label>Topic</label>
                            <input type="text" {...register("subject", { required: "Subject is required" })} name="subject" />
                            {errors.subject?.message && <ErrMsg msg={errors.subject.message} />}
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="tp-contact-input p-relative">
                            <label>Your message</label>
                            <textarea {...register("message", { required: "Message is required" })} name="message"></textarea>
                            {errors.message?.message && <ErrMsg msg={errors.message.message} />}
                        </div>
                    </div>
                    <div>
                        <button type="submit">Send Mail</button>
                    </div>
                    {/* <div className="col-xl-12">
                        <div className="tp-contact-input-remeber">
                            <input id="remeber" type="checkbox" />
                            <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                    </div> */}
                    <div className="tp-footer-contact">
                              <div className="tp-footer-btn ">
                                 <Link className="tp-btn-round " href="/contact">Contact Us
                                    <span>
                                       <RightArrowFour />
                                    </span>
                                 </Link>
                              </div>
                           </div>
                </div>
            </div>
        </form>
    )
}
