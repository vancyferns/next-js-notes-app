import Login from "@/components/Login"
export default function Home() {
  return (
    <main id="hero"> 
      <div className="hero-img">
      <figure>
        <img alt="hero image" src="/hero-img.jpg" />
      </figure>
      </div>
      <div className="hero-login">
              <Login/>
      </div>

    </main>
  );
}
