import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useAppDispatch } from "./redux/hook";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { Toaster } from "react-hot-toast";

function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setLoading(true));

      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email));
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
        }
      });
    }),
      [dispatch];
  return (
    <div className="max-w-[1440px] m-auto">
      <MainLayout />
      <Toaster />
    </div>
  );
}

export default App;
