import Header from "../components/Header";
import Login from "../components/Login";
import { LoginNavbar } from "../components/AuthNavbar";

export default function LoginPage() {
  //Login page header and form and button

  return (
    <div className="dark:bg-zinc-900 min-h-full h-screen">
      <LoginNavbar />

      <div>

      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-md space-y-8">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet?"
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>

    </div>
  );
}
