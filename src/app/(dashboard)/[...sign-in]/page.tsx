
const SignInPage = ({ params }: { params: { 'sign-in': string } }) => {
    console.log(params["sign-in"])

    if(params["sign-in"].length === 2) {
      return <h2>sign in page for feature {params["sign-in"][0]} and concept {params["sign-in"][1]} </h2>

    }
    else {
      return <h2>return params</h2>
    }
  };
  export default SignInPage;

