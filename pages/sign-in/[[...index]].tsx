import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div>
   <style>
      {`.cl-footerActionLink, .cl-footerActionText {
        display: none;
        visibility: hidden;
      }`}
    </style>
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    backgroundColor: '#1f2de6',
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px'
  }}>
    <h1 style={{ fontSize: '44px', fontWeight: 900 }}>Welcome to Pail Pal</h1>
    <h2 style={{ fontSize: '24px', fontWeight: 400, margin: '40px' }}>
      Pail Pal is the private AI assistant for the team at  <a href="https://www.lunchpaillabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Lunch Pail Labs</a>. If you are a Lunch Pail team member, please sign in below.
    </h2>
    <SignIn path="/sign-in" routing="path" afterSignInUrl="/" />
  </div>
  </div>
);

export default SignInPage;