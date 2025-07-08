import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center text-white">
      <Image
        src="/wpp1.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent sm:bg-gradient-to-t sm:from-black/60 sm:via-black/20 sm:to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent"></div>

      <div className="relative z-20 max-w-4xl p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Nurturing Earth, Securing Tomorrow.
        </h1>
        <p className="mb-2 text-lg md:text-xl">
          We are a dedicated organization committed to the preservation of Earth
          and its invaluable biodiversity.
        </p>
        <p className="text-lg md:text-xl">
          Our Mission: To safeguard vital ecosystems and champion sustainable
          solutions for a healthier planet.
        </p>
      </div>
    </section>
  );
}

export default Hero;
