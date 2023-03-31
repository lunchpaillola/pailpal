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
    minHeight: '100vh',
    backgroundColor: '#1f2de6',
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px'
  }}>
    <h1 style={{ fontSize: '44px', fontWeight: 900 }}>PAIL PAL</h1>
    <h2 style={{ fontSize: '24px', fontWeight: 400, marginBottom: '40px' }}>
      The private AI assistant for the <a href="https://www.lunchpaillabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Lunch Pail Labs</a> team.
    </h2>
    <SignIn path="/sign-in" routing="path" afterSignInUrl="/" />
  </div>
  </div>
);

export default SignInPage;