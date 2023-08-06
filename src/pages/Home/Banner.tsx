import Lottie from "lottie-react";
import bannerAnimation from '../../assets/banner-reading-animation.json'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-200 py-20 rounded-2xl">
        <div className="z-0 flex items-center justify-center max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse">
          <Lottie animationData={bannerAnimation} loop={true} />;
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
            <Link to="/allbooks" className="btn btn-secondary">
              See All The Books Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
