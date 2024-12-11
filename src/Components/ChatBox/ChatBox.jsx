import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatRightFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } =
  import.meta.env;

export const ChatBox = () => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
            setShowSuccessMessage(false);
            setShow(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed flex items-center justify-center font-poppins z-40 p-4 lg:bottom-6 bottom-6 right-6 lg:right-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => setShow(!show)}
          >
            <BsChatRightFill className="w-6 h-6 text-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed lg:bottom-6 font-sans shadow-2xl lg:right-6 z-50 lg:w-96 w-full sm:w-[400px] sm:h-auto bottom-0 right-0 bg-white rounded-lg overflow-hidden"
          >
            <div className="flex items-center font-poppins p-4 bg-gradient-to-r from-purple-600 to-indigo-600 justify-between">
              <h1 className="text-white text-lg font-bold">Contáctame</h1>
              <button
                onClick={() => setShow(!show)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {showSuccessMessage ? (
                <div className="flex items-center font-poppins justify-center h-80 flex-col gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold text-center text-gray-800">
                    Gracias por tu mensaje
                  </h1>
                  <p className="text-gray-600 text-center">
                    Te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-4 font-poppins"
                >
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      id="user_name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="user_name"
                      required
                      pattern="^[A-Za-z\s]+$"
                      title="Por favor, ingresa solo letras y espacios."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Dirección de correo electrónico
                    </label>
                    <input
                      id="user_email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      type="email"
                      placeholder="Ingresa tu correo"
                      name="user_email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Por favor, ingresa un correo electrónico válido."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Escribe tu mensaje aquí
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none h-32"
                      name="message"
                      placeholder="Ingresa tu mensaje"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 flex items-center py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      <span>Enviar</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
