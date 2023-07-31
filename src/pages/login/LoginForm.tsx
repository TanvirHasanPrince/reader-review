import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";

const LoginForm = () => {
  return (
    <div>
      {/* start */}

      <div className="grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-200 rounded-2xl">
        <div className="z-0 flex items-center justify-center max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse rounded-xl">
          <div className="flex justify-center">
            <Lottie
              className="w-2/4"
              animationData={loginAnimation}
              loop={true}
            />
            ;
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <span className="text-center"> or </span>
              <div className="form-control ">
                <button className="btn btn-secondary">Login with google</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End */}
    </div>
  );
};

export default LoginForm;
