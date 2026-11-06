import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiUser, HiPaperAirplane } from "react-icons/hi";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.1);
  const { ref: formContainerRef, isVisible: formVisible } = useScrollAnimation(0.2);

  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info' | '';
    text: string;
  }>({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage({
        type: 'error',
        text: 'EmailJS configuration is missing. Please check your .env file.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: 'info', text: 'Sending message...' });

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatusMessage({
            type: 'success',
            text: '✅ Message sent successfully! I will get back to you soon.'
          });
          formRef.current?.reset();
          setIsSubmitting(false);

          setTimeout(() => {
            setStatusMessage({ type: '', text: '' });
          }, 5000);
        },
        (error) => {
          setStatusMessage({
            type: 'error',
            text: '❌ Failed to send message. Please try again or contact me directly.'
          });
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);

          setTimeout(() => {
            setStatusMessage({ type: '', text: '' });
          }, 5000);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="relative my-24 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/60 text-slate-900 dark:text-white flex items-center justify-center px-4 sm:px-8 py-20 overflow-hidden shadow-2xl"
      >
        <div className="w-full max-w-4xl relative z-10">
          <motion.div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: -20 }}
            animate={headingVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-400 rounded-full mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Have a project in mind or want to collaborate? Send me a message!
            </p>
          </motion.div>

          <motion.div
            ref={formContainerRef as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 30 }}
            animate={formVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence>
              {statusMessage.text && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-xl text-center font-medium shadow-md ${
                    statusMessage.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
                      : statusMessage.type === 'error'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700'
                      : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-700'
                  }`}
                >
                  {statusMessage.text}
                </motion.div>
              )}
            </AnimatePresence>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <HiUser size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3.5 focus:border-cyan-400 outline-none text-slate-900 dark:text-white transition-all disabled:opacity-50"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <HiMail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3.5 focus:border-cyan-400 outline-none text-slate-900 dark:text-white transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message..."
                required
                disabled={isSubmitting}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-4 focus:border-cyan-400 outline-none resize-none text-slate-900 dark:text-white transition-all disabled:opacity-50"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/30 disabled:opacity-50"
              >
                <HiPaperAirplane className={isSubmitting ? "animate-bounce" : ""} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
