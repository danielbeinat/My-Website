import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } =
  import.meta.env;

export const ChatBox = () => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      text: "¡Hola! 👋 Soy Daniel, ¿en qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

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

  const handleQuickReply = (reply) => {
    const userMessage = {
      text: reply,
      isBot: false,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";

      if (reply.toLowerCase().includes("proyectos")) {
        botResponse =
          "Tengo varios proyectos destacados en React, JavaScript y diseño web. ¡Dale una mirada a la sección de proyectos! 🚀";
        // Scroll automático a proyectos
        setTimeout(() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      } else if (reply.toLowerCase().includes("habilidades")) {
        botResponse =
          "Me especializo en React, JavaScript, Tailwind CSS, HTML, CSS, TypeScript, Node.js, MongoDB, MySQL, Bootstrap y SASS. También tengo experiencia en diseño UX/UI y siempre estoy aprendiendo nuevas tecnologías. 💻";
        // Scroll automático a habilidades
        setTimeout(() => {
          const skillsSection = document.getElementById("skills");
          if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      } else if (reply.toLowerCase().includes("contacto")) {
        botResponse =
          "¡Claro! Puedes dejarme tu mensaje aquí mismo o escribirme directamente. ¿Prefieres usar el formulario de contacto? 📧";
        setShowContactForm(true);
      } else {
        botResponse =
          "Gracias por tu interés. ¿Hay algo específico sobre mi trabajo que te gustaría conocer? 😊";
      }

      const botMessage = {
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setChatMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      // Scroll automático hacia abajo para ver la respuesta del bot
      setTimeout(() => {
        const chatContainer = document.querySelector(".overflow-y-auto");
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }, 1500);
  };

  // Prevenir scroll de la página cuando el mouse está sobre el chatbot
  useEffect(() => {
    const handleWheel = (e) => {
      const chatElement = document.querySelector(".overflow-y-auto");
      if (chatElement && chatElement.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        chatElement.scrollTop += e.deltaY;
      }
    };

    const handleTouchMove = (e) => {
      const chatElement = document.querySelector(".overflow-y-auto");
      if (chatElement && chatElement.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleScroll = (e) => {
      const chatElement = document.querySelector(".overflow-y-auto");
      if (chatElement && chatElement.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_EMAIL_SERVICE_ID,
        VITE_EMAIL_TEMPLATE_ID,
        form.current,
        VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
            setShow(false);
            setShowContactForm(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const quickReplies = ["Ver proyectos 🚀", "Habilidades técnicas 💻"];

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="fixed flex items-center justify-center font-poppins z-40 p-4 bottom-6 right-6 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:shadow-[#0CFCA7]/50"
            onClick={() => setShow(!show)}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed font-poppins shadow-2xl bottom-6 right-6 z-50 w-[calc(100vw-2rem)] h-[calc(100vh-8rem)] max-w-md bg-[#06071B]/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden md:w-96 md:h-[500px]"
          >
            <div className="flex items-center p-4 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-white text-lg font-bold">
                    Daniel Beinat
                  </h1>
                  <p className="text-white/80 text-xs">Frontend Developer</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShow(false);
                  setShowContactForm(false);
                }}
                className="text-white hover:text-white/80 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col h-[420px]">
              {!showContactForm ? (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {chatMessages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${
                          message.isBot ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${
                            message.isBot
                              ? "bg-white/10 text-white border border-white/20"
                              : "bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] text-white"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white/10 text-white border border-white/20 p-3 rounded-2xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                            <div
                              className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            />
                            <div
                              className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="p-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full border border-white/20 transition-all duration-200 hover:scale-105"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowContactForm(true)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] text-white rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar mensaje directo</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex-1 p-4">
                  {showSuccessMessage ? (
                    <div className="flex items-center justify-center h-full flex-col gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="rounded-full bg-green-500/20 p-4 border border-green-500/30"
                      >
                        <MessageSquare className="w-8 h-8 text-[#0CFCA7]" />
                      </motion.div>
                      <h1 className="text-xl font-bold text-center text-white">
                        ¡Mensaje enviado! 🎉
                      </h1>
                      <p className="text-white/70 text-center">
                        Te responderé lo antes posible.
                      </p>
                    </div>
                  ) : (
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                      <div>
                        <label
                          htmlFor="user_name"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          <User className="inline w-4 h-4 mr-1" />
                          Nombre
                        </label>
                        <input
                          id="user_name"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50 focus:border-[#0CFCA7] transition-all duration-200"
                          type="text"
                          placeholder="Tu nombre"
                          name="user_name"
                          required
                          pattern="^[A-Za-z\s]+$"
                          title="Por favor, ingresa solo letras y espacios."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="user_email"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          <Mail className="inline w-4 h-4 mr-1" />
                          Correo electrónico
                        </label>
                        <input
                          id="user_email"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50 focus:border-[#0CFCA7] transition-all duration-200"
                          type="email"
                          placeholder="tu@email.com"
                          name="user_email"
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Por favor, ingresa un correo electrónico válido."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          <MessageSquare className="inline w-4 h-4 mr-1" />
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50 focus:border-[#0CFCA7] resize-none h-32 transition-all duration-200"
                          name="message"
                          placeholder="Cuéntame sobre tu proyecto..."
                          required
                        ></textarea>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowContactForm(false)}
                          className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200"
                        >
                          Volver al chat
                        </button>
                        <button
                          type="submit"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] text-white rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Enviar</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
