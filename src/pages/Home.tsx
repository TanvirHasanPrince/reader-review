const Home = () => {
  return (
    <div>
      <div className="grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-200 py-20 rounded-2xl">
        <div className="z-0 flex items-center justify-center max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse">
          <img
            src="https://cdn.leonardo.ai/users/13efbc87-cd1b-43da-b8c1-8f20ed9880ab/generations/26aab1cc-2579-4d93-8641-d8f2bb5c7bc8/Absolute_Reality_v16_photos_of_kid_reading_a_book_0.jpg"
            className="w-3/4 lg:w-1/2 classes rounded-2xl shadow-2xl"
            alt="A man working out"
          />
          <div>
            <h1 className="md:text-7xl text-2xl ">
              Discover Your
              <span className="text-red-600"> Next Great Read!</span>
            </h1>
            <br></br>
            <p className="py-6 text-sm lg:text-lg">
              Embark on a literary adventure with us! Discover captivating
             books, hidden gems, and new authors. Feed your mind, unleash your
              imagination, and find your perfect read. Welcome to a world of
              endless stories and boundless joy. Let's explore together!
            </p>
            <button className="btn btn-secondary">See All The Books Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
