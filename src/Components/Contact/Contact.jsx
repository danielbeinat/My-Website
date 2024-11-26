import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } =
  import.meta.env;

export const Contact = () => {
  const [ShowSuccessMessage, setShowSuccessMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_EMAIL_SERVICE_ID,
        VITE_EMAIL_TEMPLATE_ID,
        form.current,
        VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="font-poppins flex flex-col justify-center items-center gap-9 py-24"
    >
      <div className="flex items-center flex-col justify-center gap-9">
        <h1 className="md:text-4xl bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent text-3xl  font-bold uppercase">
          Contacto
        </h1>
        <p className="text-center text-white mx-auto md:w-3/5 px-5 font-medium font-bold">
          Puedes ponerte en contacto conmigo enviando el formulario que aparece
          a continuación, y te responderé lo antes posible.
        </p>
      </div>
      <form
        className="flex flex-col gap-3 bg-[#121326] p-5 md:py-10 md:px-10 border-solid border-2 border-[#1F2032]  shadow-lg shadow-black rounded-lg shadow-black/50 md:w-3/5 w-5/6 "
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="font-bold md:text-sm text-xs text-gray-500">
          Nombre
        </label>
        <input
          className="w-full h-14 bg-zinc-200 border-solid border-2 border-[#1F2032] px-3 md:font-medium text-sm bg-zinc-200 outline-none rounded"
          type="text"
          name="user_name"
          required
          placeholder="Nombre"
        />
        <label className="font-bold md:text-sm text-xs text-gray-500">
          Email
        </label>
        <input
          className="w-full h-14 bg-zinc-200 border-solid border-2 border-[#1F2032] px-3 md:font-medium  text-sm bg-zinc-200 outline-none rounded"
          type="email"
          name="user_email"
          required
          placeholder="Correo electrónico"
        />
        <label className="font-bold md:text-sm text-xs text-gray-500">
          Mensaje
        </label>
        <textarea
          className="bg-zinc-200 bg-zinc-200 border-solid border-2 border-[#1F2032] h-52 px-3 py-3 md:font-medium text-sm outline-none h-[200px] rounded"
          name="message"
          required
          placeholder="Escribe tu Mensaje..."
        />
        <input
          className="px-3 py-3 mt-3 cursor-pointer md:w-1/3 h-14  font-medium bg-[#0CFCA7] text-black rounded-lg shadow-lg shadow-black/50 transform hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out"
          type="submit"
          value="Enviar"
        />
      </form>

      {ShowSuccessMessage && (
        <div className="bg-white shadow-lg shadow-black fixed top-5 right-5 flex items-center justify-center gap-3 shadow-black/50 text-gray-500 px-4 py-5 rounded">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          ¡Mensaje enviado con éxito!
        </div>
      )}
    </section>
  );
};
