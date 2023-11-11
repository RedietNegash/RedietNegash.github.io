import React from "react";

const SocialMedia = () => {
  return (
    <footer className="bg-tertiary py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <h6 className="w-full lg:w-1/3 text-white text-left pl-40 lg:ml-0">
            2023
          </h6>
          <div className="w-full lg:w-1/3 my-3 lg:my-0 flex justify-center ">
            <a
              className="btn btn-dark btn-social mr-4"
              href="https://github.com/RedietNegash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btn-dark btn-social"
              href="https://www.linkedin.com/in/rediet-negash-95487628b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <h6 className="w-full lg:w-1/4 text-white text-right">
            +251964699880
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default SocialMedia;
