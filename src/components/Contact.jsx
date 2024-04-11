function Contact() {
  return (
    <div className="h-full dark:bg-primary text-center p-4">
      <h2 className="dark:text-gray-500 text-6xl py-4 box-border hover:text-sky-900 font-bold">
        Contact
      </h2>
      <p className="dark:text-gray-500 text-xl md:text-2xl">
        Have a question or want to collaborate? Don't hesitate to reach out via
        email:{" "}
        <a href="mailto:felixomondi590@gmail.com" className="contact-link">
          <span className="underline text-blue-700">
            felixomondi590@gmail.com
          </span>
        </a>
        <br />
        or phone:{" "}
        <span className="font-bold text-gray-400">+254 792 146 583</span>
        <br />
        You can also connect with me on social media:
      </p>
      <ul className="text-blue-700 mt-10">
        <li className="hover:text-blue-500">
          <a
            href="https://github.com/Felix-svg"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a
            href="https://www.linkedin.com/in/felix-omondi-b13b53232/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li className="hover:text-blue-500">
          <a
            href="https://www.twitter.com/felixomondi_"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a
            href="https://www.instagram.com/_omondi_/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
