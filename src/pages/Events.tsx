import { format } from 'date-fns';

function Events() {
  // Example events (you would typically fetch these from a database)
  const events = [
    {
      id: 1,
      title: 'Friday Prayer',
      date: '2024-03-22',
      time: '1:30 PM',
      description: 'Weekly Jumu\'ah prayer and khutbah',
    },
    {
      id: 2,
      title: 'Islamic Studies Class',
      date: '2024-03-23',
      time: '10:00 AM',
      description: 'Weekend Islamic studies for adults',
    },
    {
      id: 3,
      title: 'Children\'s Quran Class',
      date: '2024-03-24',
      time: '9:00 AM',
      description: 'Weekly Quran lessons for children',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-6">Upcoming Events</h1>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-primary">{event.title}</h2>
                <p className="text-gray-600">
                  {format(new Date(event.date), 'EEEE, MMMM d, yyyy')} at {event.time}
                </p>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;