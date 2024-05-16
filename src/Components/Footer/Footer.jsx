import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black mt-40 pb-5 pt-16 md:px-24 px-5 font-poppins flex flex-col gap-8 ">
        <div className="flex flex-col md:flex-row justify-between font-bold text-white gap-10 md:gap-0">
          <div className="flex flex-col gap-3 md:w-1/2">
            <h1>Daniel Beinat</h1>
            <p className="text-sm">
              Frontend Developer especializado en crear interfaces web
              intuitivas y accesibles que brindan una excelente experiencia de
              usuario.
            </p>
          </div>

          <div className="flex flex-col gap-3  ">
            <h1 className="md:text-center text-left">Redes</h1>
            <div className="flex gap-3">
              <a
                href="https://github.com/danielbeinat"
                target="_blank"
                rel="noreferrer"
                className="inline-block  transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-beinat"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center">
          <h1 className="text-white text-sm">
            © 2024 Daniel Beinat, Inc. All rights reserved.
          </h1>
        </div>
      </footer>
    </>
  );
};
