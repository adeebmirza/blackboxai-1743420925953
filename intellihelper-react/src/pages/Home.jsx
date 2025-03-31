import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions for Your Business</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Transform your operations with our cutting-edge artificial intelligence technologies
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Leverage historical data to forecast future trends and make informed decisions.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">
                Understand and process human language to improve customer interactions.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Computer Vision</h3>
              <p className="text-gray-600">
                Extract meaningful information from visual inputs for automation and analysis.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}