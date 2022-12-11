import Image from "next/image";
import * as Style from "./style";
import { Fade, Bounce, Slide  } from "react-awesome-reveal";

import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <Style.Footer>
      <div>
      <Fade cascade direction="down">
        <section className="icons">
          <Image
            width={80}
            height={80}
            src="/marvel.png"
            alt="img"
            responsive
          />
          <Image
            width={60}
            height={60}
            src="/aranha.png"
            alt="img"
            responsive
          />
        </section>

        <nav>
          <section>
            <h2>Services</h2>
            <div>
              <p>Apps</p>
              <p>Contact us</p>
              <p>Features</p>
              <p>Blog</p>
            </div>
          </section>

          <section>
            <h2>About</h2>
            <div>
              <p>History</p>
              <p>Team</p>
              <p>Show</p>
            </div>
          </section>
        </nav>

        <Style.Follow>
          <h2>Follow Us</h2>
          <div>
            <BsFacebook size={30} />
            <AiFillInstagram size={33} />
            <AiFillTwitterCircle size={30} />
          </div>
          
        </Style.Follow>
        </Fade>
      </div>
      <Style.Copy>
        <h2>&copy; 2022 New Berd / Walyson Moura - Direitos reservados</h2>
      </Style.Copy>
    </Style.Footer>
  );
}
