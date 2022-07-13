import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    //Signup page header and form and button
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}