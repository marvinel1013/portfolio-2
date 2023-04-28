import ContactDetails from "@/components/Contact/ContactDetails";
import ContactForm from "@/components/Contact/ContactForm";
import Text from "@/components/Reusable/Text";
import Head from "next/head";
import React from "react";

function Contact() {
  return (
    <main>
      <Head>
        <title>Marvinel Santos | Contact Page</title>
      </Head>
      <div className="min-h-screen w-full text-dark pb-40 lg:px-8 xl:px-24">
        <Text className="mt-5 md:mt-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl px-12 xl:px-72 lg:px-48 text-center font-extrabold">
          Get In Touch Let's Talk
        </Text>

        <div className="lg:mt-40 mt-12 h-full w-full flex items-center lg:items-start flex-col lg:flex-row lg:gap-2 gap-40">
          <div className="px-7 md:w-[450px] w-[340px] lg:w-[700px]">
            <ContactDetails />
          </div>
          <div className="px-5 md:px-16 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
