import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/components/Login"
export default function Home() {
  return (
    <main id="hero"> 
      <div className="hero-img">
      <img alt="hero image" src="hero-img.jpg"/>
      </div>
      <div className="hero-login">
              <Login/>
      </div>

    </main>
  );
}
