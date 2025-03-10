import { format } from 'date-fns';

function PrayerTimes() {
  const today = new Date();
  
  // Example prayer times (you would typically fetch these from an API)
  const prayerTimes = [
    { name: 'Fajr', time: '5:30 AM' },
    { name: 'Sunrise', time: '6:45 AM' },
    { name: 'Dhuhr', time: '1:30 PM' },
    { name: 'Asr', time: '4:45 PM' },
    { name: 'Maghrib', time: '7:15 PM' },
    { name: 'Isha', time: '8:30 PM' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-primary mb-4">Prayer Times</h1>
        <p className="text-gray-600 mb-6">
          {format(today, 'EEEE, MMMM d, yyyy')}
        </p>

        <div className="space-y-4">
          {prayerTimes.map((prayer) => (
            <div
              key={prayer.name}
              className="flex justify-between items-center border-b border-gray-200 py-3"
            >
              <span className="font-medium">{prayer.name}</span>
              <span className="text-gray-600">{prayer.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrayerTimes;