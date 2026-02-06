import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
      console.error("Missing EmailJS credentials");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: 'info', text: 'Sending message...' });

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        () => {
          setStatusMessage({
            type: 'success',
            text: '✅ Message sent successfully! I\'ll get back to you soon.'
          });
          formRef.current?.reset();
          setIsSubmitting(false);
          
          // Clear message after 5 seconds
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
          
          // Clear error after 5 seconds
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
      className="min-h-screen bg-slate-200 dark:bg-gray-800 rounded-3xl text-slate-800 dark:text-white flex items-center justify-center px-6"
    >
      <div className="w-full max-w-4xl">
        <div 
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-1000 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400">
            Send me a message — I'll actually receive it.
          </p>
        </div>

        <div
          ref={formContainerRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 delay-200 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Status Message */}
          {statusMessage.text && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium transition-all duration-500 ${
                statusMessage.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
                  : statusMessage.type === 'error'
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-700'
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 space-y-6 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
                className="bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none text-slate-800 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                disabled={isSubmitting}
                className="bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none text-slate-800 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              disabled={isSubmitting}
              className="bg-slate-100 dark:bg-gray-800 border w-full border-slate-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none resize-none text-slate-800 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contact;
