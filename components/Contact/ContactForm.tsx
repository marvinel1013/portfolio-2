import Button from "../Reusable/Button";

const ContactForm = () => {
  return (
    <div className="relative w-full p-3 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-2xl">
      <div className="bg-dark dark:bg-light rounded-[2rem] h-[102%] md:h-[103%] w-[104%] md:w-[103%] absolute top-0 -right-3 md:-right-5 rounded-br-2xl -z-10" />
      <form
        action="https://getform.io/f/76e8c8f1-7261-4bec-acdc-88144c422815"
        method="POST"
      >
        <div className="flex flex-col lg:flex-row gap-5 w-full justify-between">
          <div className="w-full flex-1">
            <label
              htmlFor="name"
              className="block mb-2 text-dark dark:text-light md:text-base text-xs"
            >
              FULL NAME
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full p-1 md:p-2 rounded-md bg-[#f5f5f5] border border-gray-700 text-black outline-none "
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block mb-2 text-dark dark:text-light md:text-base text-xs"
            >
              PHONE NUMBER
            </label>
            <input
              name="phone"
              type="text"
              id="phone"
              className="w-full p-1 md:p-2 rounded-md bg-[#f5f5f5]  border border-gray-700 text-black outline-none "
            />
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block mb-2 text-dark dark:text-light md:text-base text-xs"
          >
            EMAIL
          </label>
          <input
            name="email"
            type="text"
            id="email"
            className="w-full p-1 md:p-2 rounded-md bg-[#f5f5f5]  border border-gray-700 text-black outline-none "
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="subject"
            className="block mb-2 text-dark dark:text-light md:text-base text-xs"
          >
            SUBJECT
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            className="w-full p-1 md:p-2 rounded-md bg-[#f5f5f5]  border border-gray-700 text-black outline-none "
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-dark dark:text-light md:text-base text-xs"
          >
            MESSAGE
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className=" resize-none w-full p-2 rounded-md bg-[#f5f5f5]  border border-gray-700 text-black outline-none"
          />
        </div>
        <div className="mt-2 h-full w-full">
          <Button className="w-full p-3 lg:text-lg lg:p-4 rounded-md dark:text-dark">
            Let's Talk
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
