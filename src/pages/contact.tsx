import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { ContactPage } from "@/generated/operations";
import { useContactPage } from "../types/generated/queries";
import RichText from "@/components/atoms/RichText";
import Head from "next/head";
import Script from "next/script";
import { useForm, UseFormRegister } from "react-hook-form";

//import ContactForm from '../components/contactForm';

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    window.grecaptcha &&
      window.grecaptcha.ready(function () {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, {
            action: "submit"
          })
          .then(function (token) {
            // Add your logic to submit to your backend server here.

            axios.post("/api/contact", {
              "g-recaptcha-response": token,
              ...data
            });
          });
      });
  };

  return (
    <div id="contact">
      <Head>
        <title>Contact Me - Callum Booth | Software Engineer</title>
      </Head>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}
      />
      <div className="relative w-full min-h-full p-10 md:p-20 xl:p-32">
        <div className="bg-white bg-opacity-80 p-12 w-full">
          <h2>{props.page.title}</h2>
          <RichText content={props.page.body.json} />

          <div>
            <h3>Contact me</h3>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                label="Name"
                name="name"
                register={register}
                required
                error={errors.name}
              />

              <Field
                label="Email"
                name="email"
                register={register}
                required
                type="email"
                error={errors.email}
              />

              <Field
                label="Subject"
                name="subject"
                register={register}
                required
                error={errors.subject}
              />

              <Field
                label="Message"
                name="message"
                register={register}
                required
                type="textarea"
                error={errors.name}
              />

              <input type="submit" value="Send" className="btn btn-red" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  name,
  type,
  register,
  required,
  error
}: {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  error: any;
}) => {
  return (
    <fieldset className="pb-2">
      <label htmlFor={name} className="py-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`bg-gray-100 p-1 w-full ${
            type === "textarea" ? "h-24" : ""
          }`}
          {...register(name, { required })}
        ></textarea>
      ) : (
        <input
          className={`bg-gray-100 p-1 w-full ${
            type === "textarea" ? "h-24" : ""
          }`}
          type={type}
          {...register(name, { required })}
        />
      )}
      {error && <span className="font-bold">This field is required</span>}
    </fieldset>
  );
};

export const getStaticProps: GetStaticProps<ContactPage> = async () => {
  const data = await useContactPage.fetcher()();

  return {
    props: data
  };
};

export default Contact;
