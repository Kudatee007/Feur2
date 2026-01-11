const moreFeatures = [
    {
      title: "Safety First",
      description: "24/7 support and emergency assistance",
      icon: "🛡️",
    },
    {
      title: "Smart Notifications",
      description: "Stay updated at every step",
      icon: "🔔",
    },
    {
      title: "Availability",
      description: "Drivers available 24/7",
      icon: "⏰",
    },
    {
      title: "Driver Ratings",
      description: "Rate and review every trip",
      icon: "⭐",
    },
    {
      title: "Affordability",
      description: "Affordable pricing and secure in-app transactions",
      icon: "💳",
    },
    {
      title: "Easy-to-Use App",
      description: "Intuitive interface for all ages",
      icon: "📱",
    },
  ];
  

const AndSoMuchMore = () => {
    return (
      <section className="bg-[#F1F9FB] py-20">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-[#2F414F] mb-3">
              And So Much More
            </h2>
            <p className="text-[#5F7282] max-w-md mx-auto">
              Additional features designed to enhance your experience.
            </p>
          </div>
  
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E6F4F6] text-2xl mb-4">
                  {feature.icon}
                </div>
  
                {/* Content */}
                <h3 className="text-lg font-medium text-[#2F414F] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5F7282] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AndSoMuchMore;
  