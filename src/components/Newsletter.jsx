import React from "react";

const handleEmailClick = () => {
  const emailAddress = "efaro@hotmail.com";
  const subject = "EFaro - Cleaning Quote";
  const body = "Hi Eric, \nI am looking for ______ service for my home. ";

  // Create a "mailto" link with the email address, subject, and body
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the default email client to draft the email
  window.location.href = mailtoLink;
};

const Newsletter = () => {
  return (
    <section className="w-full py-16 text-white px-4 md:px-10 bg-gradient-to-t from-blue-950 to-back">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Book a free estimate now
          </h1>
          <p className="text-gray-400">
            We will get back to you with a date in 24 hours.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className="bg-accent hover:bg-accentLight duration-300 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black"
              onClick={handleEmailClick}
            >
              Contact me
            </button>
          </div>
          <p>
            We promise not to spam your email. This is{" "}
            <span className="text-accentLight">not a Newsletter</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
