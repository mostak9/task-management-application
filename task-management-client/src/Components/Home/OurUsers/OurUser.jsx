
const OurUser = () => {
    return (
        <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Who Can Benefit</h2>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Display different types of people */}
            <div className="bg-white rounded-lg p-4 shadow-md ">
              <h3 className="text-lg font-semibold mb-2">Developers</h3>
              <p className="text-gray-600">
                Access resources, tools, and tutorials for development.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md ">
              <h3 className="text-lg font-semibold mb-2">Corporate Professionals</h3>
              <p className="text-gray-600">
                Find solutions for business management and productivity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md ">
              <h3 className="text-lg font-semibold mb-2">Bankers</h3>
              <p className="text-gray-600">
                Explore financial tools and industry insights.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md ">
              <h3 className="text-lg font-semibold mb-2">Students</h3>
              <p className="text-gray-600">
                Access educational resources and study materials.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md ">
              <h3 className="text-lg font-semibold mb-2">Freelancers</h3>
              <p className="text-gray-600">
                Find opportunities and manage freelance projects.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md ">
              <h3 className="text-lg font-semibold mb-2">Entrepreneurs</h3>
              <p className="text-gray-600">
                Gain insights and resources for starting businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default OurUser;