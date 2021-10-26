import React from "react";
import Link from "@/components/atoms/Link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ContactPage } from "@/generated/operations";
import { useContactPage } from "../types/generated/queries";
import RichText from "@/components/atoms/RichText";
import Head from "next/head";

//import ContactForm from '../components/contactForm';

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div id="contact">
      <Head>
        <title>Contact Me - Callum Booth | Software Engineer</title>
      </Head>
      <div className="relative w-full min-h-full p-10 md:p-20 xl:p-32">
        <div className="bg-white bg-opacity-80 p-12 w-full">
          <h2>{props.page.title}</h2>
          <RichText content={props.page.body.json} />

          <div className="attributes">
            <p>
              <span className="text-primary-main">e:</span>&nbsp;{" "}
              <Link href={`mailto:${props.person.email}`}>
                <a className="font-bold">{props.person.email}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ContactPage> = async () => {
  const data = await useContactPage.fetcher()();

  return {
    props: data
  };
};

export default Contact;
