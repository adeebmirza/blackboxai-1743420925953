import { UsersIcon, LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience', icon: <ChartBarIcon className="h-8 w-8" /> },
    { value: '50+', label: 'Happy Clients', icon: <UsersIcon className="h-8 w-8" /> },
    { value: '100+', label: 'Projects Completed', icon: <LightBulbIcon className="h-8 w-8" /> }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About IntelliHelper</h1>
          <p className="text-xl">
            We're a team of AI experts dedicated to helping businesses harness the power of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center text-blue-500 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 2018, IntelliHelper began as a small research group passionate about making AI accessible to businesses of all sizes.
            </p>
            <p>
              What started as academic curiosity quickly evolved into practical solutions that help companies automate processes, gain insights from data, and enhance customer experiences.
            </p>
            <p>
              Today, we're proud to serve clients across multiple industries, from startups to Fortune 500 companies, all united by their desire to innovate with AI.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Team</h2>
          <p className="text-gray-700 mb-8">
            Our diverse team of data scientists, engineers, and business strategists brings together decades of combined experience in artificial intelligence and machine learning.
          </p>
        </div>
      </div>
    </div>
  );
}