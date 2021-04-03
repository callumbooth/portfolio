import React from "react";
import Link from "@/components/atoms/Link";

//import ContactForm from '../components/contactForm';

const Contact = () => {
  return (
    <div id="contact">
      <div className="relative w-full min-h-full p-10 md:p-20 xl:p-32">
        <div className="bg-white bg-opacity-80 p-12 w-full">
          <h2>How to get in touch</h2>
          <p>
            Thanks for taking a look at my portfolio, if you would like to get
            it touch just send me a quick email to get the ball rolling.
          </p>

          <div className="attributes">
            <p>
              <span className="text-primary-main">e:</span>&nbsp;{" "}
              <Link href="mailto:callum-booth@live.co.uk">
                <a className="font-bold">callum-booth@live.co.uk</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
