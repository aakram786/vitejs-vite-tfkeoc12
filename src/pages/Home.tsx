import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Our Mosque</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A place of worship, learning, and community. Join us in our daily prayers and activities.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/prayer-times"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Prayer Times</h2>
          <p className="text-gray-600">View today's prayer times and schedule</p>
        </Link>

        <Link
          to="/events"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Events</h2>
          <p className="text-gray-600">Upcoming events and activities</p>
        </Link>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-primary mb-4">Announcements</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-secondary pl-4">
            <h3 className="font-medium">Friday Prayer</h3>
            <p className="text-gray-600">Join us for Jumu'ah prayer every Friday at 1:30 PM</p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <h3 className="font-medium">Islamic Classes</h3>
            <p className="text-gray-600">Weekend Islamic studies for children and adults</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;