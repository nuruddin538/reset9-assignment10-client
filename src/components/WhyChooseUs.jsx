import Lottie from "lottie-react";
import checkMarkAnimation from "../assets/checkMark.json";
import clockAnimation from "../assets/clock.json";
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      animation: checkMarkAnimation,
      title: "Easy Application Process",
      description:
        "Apply for visas online with a simple and intuitive interface.",
    },
    {
      id: 2,
      animation: clockAnimation,
      title: "Fast Processing",
      description: "Get your visa processed quickly with our efficient system.",
    },
    {
      id: 3,
      icon: "📱",
      title: "24/7 Support",
      description:
        "Our support team is available round the clock to assist you.",
    },
    {
      id: 4,
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Your data is safe with our advanced security measures.",
    },
  ];
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={feature.animation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100px", height: "60px" }}
                ></Lottie>
              </div>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <div className="text-xl font-semibold mb-2">{feature.title}</div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
