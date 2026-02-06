import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.1);
  const { ref: formContainerRef, isVisible: formVisible } = useScrollAnimation(0.2);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("EmailJS configuration is missing. Please check your .env file.");
      console.error("Missing EmailJS credentials");
      return;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <>
    <section
      id="contact"
      className="min-h-screen bg-gray-800 rounded-3xl text-white flex items-center justify-center px-6"
    >
      <div className="w-full max-w-4xl">
        <div 
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-1000 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400">
            Send me a message — I'll actually receive it.
          </p>
        </div>

        <div
          ref={formContainerRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 delay-200 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-gray-900 rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none"
              />
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="bg-gray-800 border w-full border-gray-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition-transform hover:scale-[1.02]"
            >
              Send Message 
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
