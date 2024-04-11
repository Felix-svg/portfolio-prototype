function Skills() {
  return (
    <div className="dark:bg-primary h-full md:h-fit  py-8 p-4">
      <h2 className="text-center text-gray-500 text-6xl mb-4 p-4 hover:text-sky-900 font-bold">
        Skills
      </h2>
      <div className="md:flex justify-center">
        <div className="dark:border border-gray-800 p-4 rounded-md shadow-md hover:shadow-lg mb-10 md:w-1/2 hover:scale-105 text-center">
          <h3 className="dark:text-gray-300 mb-4 font-semibold text-lg">
            Programming Languages
          </h3>
          <p className="text-gray-600">JavaScript, Python, SQL, HTML5, CSS3</p>
        </div>
      </div>

      <div className="md:flex justify-center">
        <div className="dark:border border-gray-800 p-4 rounded-md shadow-md hover:shadow-lg mb-10 md:w-1/2 hover:scale-105 text-center ">
          <h3 className="dark:text-gray-300 mb-4 font-semibold text-lg">
            Libraries & Frameworks
          </h3>
          <p className="text-gray-600">React.js, Flask</p>
        </div>
      </div>

      <div className="md:flex justify-center">
        <div className="dark:border border-gray-800 p-4 rounded-md shadow-md hover:shadow-lg md:w-1/2 hover:scale-105 text-center">
          <h3 className="dark:text-gray-300 mb-4 font-semibold text-lg">
            Tools & Technologies
          </h3>
          <p className="text-gray-600">SQLite3, SQLAlchemy, Git, GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

// import React from "react";
// import { userData } from "../../data/userData";

// function Skills() {
//   return (
//     <div className="bg-primary h-full py-8 p-4">
//       <h2 className="text-center text-gray-500 text-6xl mb-4 p-4 hover:text-sky-900 font-bold">
//         Skills
//       </h2>
//       <div className="md:flex justify-center">
//         <div className="border border-gray-800 p-4 rounded-md shadow-md hover:shadow-lg mb-10 md:w-1/2 hover:scale-105">
//           <h3 className="text-gray-300 mb-4 font-semibold text-lg">
//             Programming Languages
//           </h3>
//           {/* Map over the programming languages array */}
//           {userData.skills.programming_languages.map((language, index) => (
//             <p className="text-gray-600" key={index}>
//               {language}
//             </p>
//           ))}
//         </div>
//       </div>

//       <div className="md:flex justify-center">
//         <div className="border border-gray-800 p-4 rounded-md shadow-md hover:shadow-lg mb-10 md:w-1/2 hover:scale-105 ">
//           <h3 className="text-gray-300 mb-4 font-semibold text-lg">
//             Libraries & Frameworks
//           </h3>
//           {/* Map over the libraries/frameworks array */}
//           {userData.skills.libraries_frameworks.map((library, index) => (
//             <p key={index} className="text-gray-600">
//               {library}
//             </p>
//           ))}
//         </div>
//       </div>

//       <div className="md:flex justify-center">
//         <div className="border border-gray-800 p-4 rounded-md shadow-md hover:shadow-lg md:w-1/2 hover:scale-105">
//           <h3 className="text-gray-300 mb-4 font-semibold text-lg">
//             Tools & Technologies
//           </h3>
//           {/* Map over the tools/technologies array */}
//           {userData.skills.tools_technologies.map((tool, index) => (
//             <p className="text-gray-600" key={index}>
//               {tool}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;
