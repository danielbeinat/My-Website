import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
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
        VITE_EMAIL_PUBLIC_KEY,
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
        },
      );
  };

  return (
    <section id="contact" className="font-poppins relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0CFCA7]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h1 className="md:text-4xl text-gradient text-3xl font-bold uppercase mb-4">
              Contacto
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] mx-auto rounded-full mb-6" />
            <p className="text-center text-white max-w-2xl mx-auto px-4 font-medium opacity-80">
              ¿Tienes un proyecto en mente? Me encantaría saber de ti. Envíame
              un mensaje y te responderé lo antes posible.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <form
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[#0CFCA7]/20 transition-all duration-300"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/80 font-medium text-sm">
                    <User className="w-4 h-4" />
                    Nombre
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50 focus:border-[#0CFCA7] transition-all duration-200"
                    type="text"
                    name="user_name"
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/80 font-medium text-sm">
                    <Mail className="w-4 h-4" />
                    Correo electrónico
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50 focus:border-[#0CFCA7] transition-all duration-200"
                    type="email"
                    name="user_email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/80 font-medium text-sm">
                    <MessageSquare className="w-4 h-4" />
                    Mensaje
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50 focus:border-[#0CFCA7] resize-none h-32 transition-all duration-200"
                    name="message"
                    required
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[#0CFCA7]/30"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar mensaje</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {ShowSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-6 right-6 z-50 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl p-4 flex items-center gap-3 min-w-[300px]"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-gray-800 font-semibold">¡Mensaje enviado!</p>
            <p className="text-gray-600 text-sm">Te responderé pronto.</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};
