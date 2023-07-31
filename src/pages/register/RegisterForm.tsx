import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { createUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";

interface SignupFormInputs {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();
    const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
  };

    const { user, isLoading } = useAppSelector((state) => state.user);

     useEffect(() => {
       if (user.email && !isLoading) {
         navigate("/");
       }
     }, [user.email, isLoading, navigate]);


  return (
    <div>
      <div>
        {/* start */}

        <div className="grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-200 rounded-2xl">
          <div className="z-0 flex items-center justify-center max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse rounded-xl">
            <div className="flex justify-center">
              <Lottie
                className="w-3/4"
                animationData={registerAnimation}
                loop={true}
              />
              
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* End */}
      </div>
    </div>
  );
};

export default RegisterForm;
