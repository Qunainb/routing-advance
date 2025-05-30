import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "login" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
