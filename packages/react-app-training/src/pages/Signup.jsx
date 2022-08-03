import Header from "../components/Header";
import Signup from "../components/Signup";
import Toggle from "../components/Toggle";
import { LoginNavbar } from "../components/AuthNavbar";

export default function SignupPage() {
  //Signup page header and form and button
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-full min-h-screen">
      <LoginNavbar />
      <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md space-y-8">
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account?"
            linkName="Login"
            linkUrl="/"
          />
          <Signup />
        </div>
      </div>
    </div>
  );
}
