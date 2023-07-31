import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/user/userSlice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}


const LoginForm = () => {

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<LoginFormInputs>();

    const { user, isLoading } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = (data: LoginFormInputs) => {
      console.log(data);
      dispatch(loginUser({ email: data.email, password: data.password }));
    };

     useEffect(() => {
       if (user.email && !isLoading) {
         navigate("/");
       }
     }, [user?.email, isLoading]);


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
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  id="password"
                  placeholder="your password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <span className="text-center"> or </span>
            </form>

            <div className="form-control mx-5 my-2">
              <button className="btn btn-secondary">Login with google</button>
            </div>
          </div>
        </div>
      </div>

      {/* End */}
    </div>
  );
};

export default LoginForm;
