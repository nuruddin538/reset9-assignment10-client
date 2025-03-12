const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "United States",
      image: "https://i.ibb.co.com/PZ154FkD/destination1.jpg",
      link: "/visa/usa",
    },
    {
      id: 2,
      name: "United Kingdom",
      image: "https://i.ibb.co.com/1JfZvgF1/destination2.jpg",
      link: "/visa/uk",
    },
    {
      id: 3,
      name: "Australia",
      image: "https://i.ibb.co.com/x8jd8mYj/destination3.jpg",
      link: "/visa/australia",
    },
    {
      id: 4,
      name: "Canada",
      image: "https://i.ibb.co.com/pjHtLWQ4/destination4.jpg",
      link: "/visa/canada",
    },
  ];
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Visa Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h3>
                <a
                  href={destination.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
