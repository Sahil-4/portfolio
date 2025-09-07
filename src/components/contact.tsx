const Contact = () => {
  return (
    <section className="p-6 bg-black text-white max-w-2xl my-0 mx-auto" id="contact_section">
      <h2 className="text-2xl font-bold text-yellow-400">Let’s Work Together!</h2>
      <p className="w-full p-2 text-white rounded">
        Have an idea or an opportunity? I’d love to hear from you. Fill out the form below, and I’ll
        get back to you as soon as possible.
      </p>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 bg-gray-700 text-white rounded"></textarea>
        <button type="submit" className="px-4 py-2 bg-yellow-400 text-black font-bold rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
