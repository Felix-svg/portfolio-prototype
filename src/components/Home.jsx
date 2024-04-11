import { Link } from "react-router-dom";
import CVDownload from "./CVDownload";

function Home() {
  return (
    <div className="dark:bg-primary py-8 px-4 text-center">
      <h1 className="dark:text-gray-400 text-6xl font-bold text-right p-5">
        Felix Omondi,{" "}
        <span className="dark:text-gray-300 text-3xl">Software Developer</span>
      </h1>
      <p className="font-semibold pt-3 md:text-4xl md:font-normal dark:text-gray-200 mt-2">
        Greetings, I am a Full Stack Software Developer based in Kenya. I
        specialize in crafting elegant solutions to complex problems and strive
        for excellence in every project I undertake.
      </p>
      <p className="font-semibold pt-3 md:text-4xl md:font-normal dark:text-gray-200 mt-2">
        With a strong background in software engineering and a passion for
        innovation, I am committed to delivering high-quality software solutions
        that meet the unique needs of my clients and users.
      </p>
      <p className="font-semibold pt-3 md:text-4xl md:font-normal dark:text-gray-200 mt-2">
        Feel free to explore my portfolio to learn more about my work and
        expertise. If you have any inquiries or would like to discuss potential
        collaborations, please don't hesitate to get in touch.
      </p>
      <div className="flex justify-end mr-5 mt-10 space-x-3">
        <Link to="/projects">
          <button className="bg-transparent hover:bg-blue-500 dark:text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Projects
          </button>
        </Link>
        <CVDownload />
      </div>
    </div>
  );
}

export default Home;
