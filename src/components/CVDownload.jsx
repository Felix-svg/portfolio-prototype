import React from "react";

function CVDownload() {
  const handleDownload = () => {
    // Replace 'cv.pdf' with the URL/path of your CV file
    const cvUrl = "./cv/project-ideas.pdf";
    // Trigger the download by creating an anchor element and simulating a click
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "your_cv.pdf"; // Set the default filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* <h1>Download CV</h1> */}
      <button
        onClick={handleDownload}
        className="bg-transparent hover:bg-blue-500 dark:text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
      >
        Download CV
      </button>
    </div>
  );
}

export default CVDownload;
