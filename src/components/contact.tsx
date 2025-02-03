const Contact = () => {
  return (
    <section className="p-6 bg-black text-white max-w-3xl my-0 mx-auto" id="contact_section">
      <h2 className="text-2xl font-bold text-yellow-400">Leave a message</h2>
      <form className="mt-4 space-y-3">
        <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-700 text-white rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-700 text-white rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 bg-gray-700 text-white rounded"></textarea>
        <button type="submit" className="px-4 py-2 bg-yellow-400 text-black font-bold rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
