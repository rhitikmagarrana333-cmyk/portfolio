

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Welcome to Our Store
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello and welcome! We're excited to have you here. Our platform offers a wide variety of high-quality products 
            tailored to meet your needs. Whether you're looking for the latest trends or classic favorites, you'll find everything 
            you need in one convenient place.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide exceptional shopping experience with quality products, competitive prices, and outstanding 
            customer service. We believe in building long-term relationships with our customers and ensuring their satisfaction 
            with every purchase.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Browse through our extensive catalog and discover amazing deals on various categories. Don't forget to create an account 
            to track your orders and enjoy exclusive member benefits!
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            Shop Now
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
