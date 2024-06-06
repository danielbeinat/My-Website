import { useState, useEffect, useRef } from "react";
import { BsChatRightFill } from "react-icons/bs";
import "./ChatBox.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import emailjs from "@emailjs/browser";

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } =
  import.meta.env;

export const ChatBox = () => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const form = useRef();
  const [ShowSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    let timeout;
    if (!show) {
      timeout = setTimeout(() => {
        setShowButton(true);
      }, 500);
    } else {
      setShowButton(false);
    }
    return () => clearTimeout(timeout);
  }, [show]);

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
            // setShowSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {showButton && (
        <div
          className="fixed flex items-center font-poppins z-40 justify-center p-5 lg:bottom-3 bottom-4 right-4 lg:right-5 bg-black rounded-b-full rounded-tl-full border-2 border-white rounded-tr-lg cursor-pointer shadow-lg"
          onClick={() => setShow(!show)}
        >
          <BsChatRightFill className="w-6 h-6 text-white" />
        </div>
      )}
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="chat-box" timeout={300} unmountOnExit>
            <div className="fixed lg:bottom-5 font-poppins shadow-lg lg:right-5 z-50 lg:w-96 lg:h-auto bottom-0 w-full h-full right-0 bg-gray-800 rounded ">
              <div className="flex items-center p-3 justify-between">
                <h1 className="text-white text-sm font-bold text-center">
                  Contáctame
                </h1>
                <button onClick={() => setShow(!show)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {ShowSuccessMessage ? (
                <div className="flex bg-white items-center justify-center w-96 h-96 flex-col gap-3 p-5 py-4 pb-5">
                  <div className="rounded-full border-2 border-gray-800 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h1 className="text-sm font-bold text-center text-gray-800">
                    Gracias por tu mensaje
                  </h1>
                </div>
              ) : (
                <div className="flex bg-white flex-col p-5 py-4 pb-5">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-6"
                  >
                    <fieldset className="flex flex-col gap-3">
                      <label className="font-bold text-sm">Nombre</label>
                      <input
                        className="rounded p-2 border-2 text-sm border-gray-300"
                        type="text"
                        name="user_name"
                        required
                      />
                    </fieldset>
                    <fieldset className="flex flex-col gap-3">
                      <label className="font-bold text-sm">
                        Dirección de correo electrónico
                      </label>
                      <input
                        className="rounded p-2 border-2 text-sm border-gray-300"
                        type="email"
                        name="user_email"
                        required
                      />
                    </fieldset>
                    <fieldset className="flex flex-col gap-3">
                      <label className="font-bold text-sm">
                        Escribe tu mensaje aquí
                      </label>
                      <textarea
                        className="rounded p-2 border-2 border-gray-300 text-sm resize-none h-24 "
                        name="message"
                        required
                      ></textarea>
                    </fieldset>
                    <div className="flex justify-end bg-white rounded-b">
                      <input
                        type="submit"
                        value="Enviar"
                        className="p-2 bg-gray-800 text-white rounded bg-gray-800 cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};
