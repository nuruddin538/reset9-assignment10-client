import { Typewriter } from "react-simple-typewriter";

const Banner = ({ bgImage }) => {
  return (
    <div
      className="h-96 flex items-center justify-center text-white relative"
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      <div className="text-center relative z-5">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          {bgImage.includes("banner1") && "Welcome to VisaPortal"}
          {bgImage.includes("banner2") && "Explore All Visas"}
          {bgImage.includes("banner3") && (
            <Typewriter
              words={["Add a New Visa", "Add a Old Visa"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              delaySpeed={100}
              deleteSpeed={50}
            />
          )}
          {bgImage.includes("banner4") && "My Added Visa"}
          {bgImage.includes("banner5") && (
            <Typewriter
              words={["My Visa Applications", "Track Your Applications"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              delaySpeed={100}
              deleteSpeed={50}
            />
          )}
          {bgImage.includes("banner6") && "Visa Details"}
        </h1>
        <p className="text-xl">
          {bgImage.includes("banner1") &&
            "Your gateway to seamless visa applications."}
          {bgImage.includes("banner2") &&
            "Find the perfect visa for your needs."}
          {bgImage.includes("banner3") && "Add a new visa to our database."}
          {bgImage.includes("banner4") && "Manage your added visas."}
          {bgImage.includes("banner5") && "Track your visa applications."}
          {bgImage.includes("banner6") && "Visit your visa Details."}
        </p>
      </div>
    </div>
  );
};

export default Banner;
