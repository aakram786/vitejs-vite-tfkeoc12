function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-6">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Location</h2>
            <p className="text-gray-600">123 Mosque Street</p>
            <p className="text-gray-600">City, State 12345</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Contact Information</h2>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
            <p className="text-gray-600">Email: info@mosquename.org</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Office Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 2:00 PM</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;