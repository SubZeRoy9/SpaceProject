import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LandingPage() {
  return (
    <>
      <h1>Welcome to Astro Facts!</h1>
      <LoginButton />
      <LogoutButton />
    </>
  );
}
export default LandingPage;
