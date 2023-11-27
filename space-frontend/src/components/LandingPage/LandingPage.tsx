import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source
          src="https://www.pexels.com/download/video/856987/"
          type="video/mp4"
        />
        Rocket Launch
      </video>
      <div className="content">
        <div className="card">
          <div className="card-content">
            <h2>Login</h2>
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
