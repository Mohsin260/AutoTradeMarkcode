import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* // <!--Memorial-Banner--> */}
      <section>
        <div className="main-ban">
          <Link href="/used-cars">
            <Image
              src="/assets/images/autotrade-v4/happy-holiday.jpg"
              alt="happy-holiday.jpg"
              width={1620}
              height={279}
              className="max-w-full m-auto object-cover"
              layout="responsive"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
