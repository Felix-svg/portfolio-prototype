function Projects() {
  return (
    <div className="dark:bg-primary">
      <h1 className="font-bold px-4 text-gray-500 text-right text-4xl py-2 hover:text-sky-800">
        Projects
      </h1>
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="shadow-md hover:shadow-xl rounded-lg p-4  dark:border border-gray-800 text-center ">
          <h3 className="font-semibold dark:text-gray-400 mb-4 text-2xl">
            BookArt
          </h3>
          <p className="dark:text-white">
            BookArt is a simple and versatile project that leverages the Google
            Books API to help users discover and explore a vast collection of
            books. Whether you're a book enthusiast, student, or just curious
            about literature, BookArt makes it easy to search for books, get
            detailed information, and even preview content.
          </p>
          <a href="https://github.com/Felix-svg/BookArt" target="blank">
            <button className="bg-transparent hover:bg-blue-500 dark:text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mt-4">
              GitHub Link
            </button>
          </a>
        </div>
        <div
          className="shadow-md hover:shadow-xl rounded-lg p-4 dark:border border-gray-800 text-center 
        "
        >
          <h3 className="font-semibold dark:text-gray-400 mb-4 text-2xl">
            Nyumbani Web App
          </h3>
          <p className="dark:text-white">
            Nyumbani is a web application that allows users to search for
            different houses, view listings, and determine whether a house is
            available for sale or for rent. Additionally, users can utilize a
            mortgage calculator feature when viewing houses available for sale.
          </p>
          <a href="https://github.com/Bashu-011/Nyumbani_App" target="blank">
            <button className="bg-transparent hover:bg-blue-500 dark:text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mt-4">
              GitHub Link
            </button>
          </a>
        </div>
        <div className="shadow-md hover:shadow-xl p-4 rounded-lg dark:border border-gray-800 text-center ">
          <h3 className="font-semibold dark:text-gray-400 mb-4 text-2xl">
            Store-IM
          </h3>
          <p className="dark:text-white">
            This project is a Command-Line Interface (CLI) application for
            managing inventory. It allows users to perform various operations
            such as adding, updating, deleting, and viewing items in the
            inventory. The CLI provides a user-friendly interface for managing
            inventory efficiently.
          </p>
          <a href="https://github.com/Felix-svg/Store-IM" target="blank">
            <button className="bg-transparent hover:bg-blue-500 dark:text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mt-4">
              GitHub Link
            </button>
          </a>
        </div>
        <div className="shadow-md hover:shadow-xl p-4 rounded-lg dark:border border-gray-800 text-center ">
          <h3 className="font-semibold dark:text-gray-400 mb-4 text-2xl">
            TaskIt
          </h3>
          <p className="dark:text-white">
            A To-Do app built using React that allows users to manage tasks on
            their to-do list. Users can add new tasks, and delete completed
            tasks.
          </p>
          <a href="https://to-do-app-nine-pi.vercel.app/" target="blank">
            <button className="bg-transparent hover:bg-blue-500 dark:text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mt-4">
              TaskIt
            </button>
          </a>
        </div>
        <div className="shadow-md hover:shadow-xl p-4 rounded-lg dark:border border-gray-800 text-center">
          <h3 className="font-semibold dark:text-gray-400 mb-4 text-2xl">
            User Details Form
          </h3>
          <p className="dark:text-white">
            This project is a simple React application that allows users to
            submit their details using a form. The form includes fields for
            first name, last name, country, city, gender, and phone number. The
            user's details are then submitted to a local server endpoint using a
            POST request.
          </p>
          <a href="https://github.com/Felix-svg/reactForm" target="blank">
            <button className="bg-transparent hover:bg-blue-500 dark:text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mt-4">
              GitHub Link
            </button>
          </a>
        </div>
        <div className="shadow-md hover:shadow-xl p-4 rounded-lg dark:border border-gray-800 text-center">
          <h3 className="font-semibold dark:text-gray-400 mb-4 text-2xl">
            Colors
          </h3>
          <p className="dark:text-white">
            This is a simple React App that enables a user to choose different
            colors and the color chosen is displayed on the page.
          </p>
          <a href="https://color-picked.netlify.app/" target="blank">
            <button className="bg-transparent hover:bg-blue-500 dark:text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mt-4">
              Colors
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
