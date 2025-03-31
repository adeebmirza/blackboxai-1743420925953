import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Predictive Analytics",
      description: "Leverage historical data to forecast future trends and make data-driven decisions.",
      icon: "📊"
    },
    {
      title: "Natural Language Processing",
      description: "Understand and process human language to automate customer support and analysis.",
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Extract insights from images and videos for quality control and automation.",
      icon: "👁️"
    },
    {
      title: "Recommendation Systems",
      description: "Personalize user experiences with intelligent product and content recommendations.",
      icon: "✨"
    },
    {
      title: "Chatbot Development",
      description: "Build AI-powered conversational agents for 24/7 customer engagement.",
      icon: "🤖"
    },
    {
      title: "Process Automation",
      description: "Streamline operations by automating repetitive tasks with AI workflows.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Our AI Services</h1>
        <p className="text-xl text-center max-w-2xl mx-auto mb-16">
          Cutting-edge artificial intelligence solutions tailored to your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to="/contact" 
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}