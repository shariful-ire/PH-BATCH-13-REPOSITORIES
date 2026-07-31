const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-orange-500">AI Hub</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            AI Hub is a unified platform where you can explore,
            compare, and subscribe to the world's most powerful
            AI models from one place.
          </p>

        </div>


        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">


          {/* Left Image */}
          <div className="relative">

            <div className="bg-orange-100 rounded-3xl p-8">

              <img
  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"
  alt="AI Technology"
  className="w-full max-w-md mx-auto rounded-2xl"
/>

            </div>


            {/* Floating Card */}
            <div className="absolute -bottom-5 -right-5 bg-white shadow-xl rounded-2xl p-5">

              <h3 className="text-2xl font-bold text-orange-500">
                50+
              </h3>

              <p className="text-gray-500 text-sm">
                AI Models
              </p>

            </div>

          </div>



          {/* Right Content */}
          <div>

            <h3 className="text-3xl font-bold text-gray-800 mb-5">
              One Platform.
              <br />
              Endless AI Possibilities.
            </h3>


            <p className="text-gray-600 leading-relaxed mb-6">
              AI Hub helps developers, creators, and businesses
              discover the best AI tools without switching between
              multiple platforms. Find the right AI model, compare
              features, and manage your subscriptions easily.
            </p>



            <div className="grid grid-cols-2 gap-5">


              <div className="bg-white shadow-md rounded-xl p-5">

                <h4 className="text-2xl font-bold text-orange-500">
                  10K+
                </h4>

                <p className="text-gray-500">
                  Active Users
                </p>

              </div>



              <div className="bg-white shadow-md rounded-xl p-5">

                <h4 className="text-2xl font-bold text-orange-500">
                  99%
                </h4>

                <p className="text-gray-500">
                  Satisfaction
                </p>

              </div>


            </div>


            <button className="mt-8 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition">
              Explore AI Models
            </button>


          </div>


        </div>

      </div>
    </section>
  );
};

export default About;