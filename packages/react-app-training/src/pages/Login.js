import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
        //Login page header and form and button

    return(
        <>
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}