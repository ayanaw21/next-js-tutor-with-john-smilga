
const SignInPage = ({ params }: { params: { slug: string } }) => {
   console.log(params.slug);
   

    if(params.slug.length === 2) {
      return <h2>sign in page for feature {params.slug[0]} and concept {params.slug[1]} </h2>

    }
    else if(params.slug.length === 1) {
      return <h2>return params</h2>
    }
    return <h2>Docs Home page</h2>
  };
  export default SignInPage;

