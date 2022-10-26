import Image from 'next/image'
import * as Style from './style'

export default function Footer() {
    return(
        <Style.Footer>
            <section>
            <Image
              width={500}
              height={400}
              src="/marvel.png"
              alt="img"
              responsive
            />
            <Image
              width={500}
              height={400}
              src="/aranha.png"
              alt="img"
              responsive
            />
            </section>
            <section>

            </section>
            <section></section>
            <section></section>
        </Style.Footer>
    )
}