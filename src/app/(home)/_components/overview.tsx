import React from "react";

function Overview() {
  return (
    <section className="container mx-auto mt-52 px-4">
      <div className="flex h-auto flex-col items-center justify-center gap-14 md:flex-row">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">Our Company</h1>
        </div>
        <div className="flex flex-col items-center justify-center px-5 gap-8 w-[400px] leading-relaxed text-justify font-semibold">
          <p>
            GreenStride is a non-profit organization founded in 2010 by
            environmental scientists and activists. We're dedicated to a future
            where humanity thrives in harmony with nature.
          </p>
          <p>
            A passionate, multidisciplinary team of conservation
            scientists, policy experts, and communicators. We value diverse
            perspectives and collaborative action for impactful change.
          </p>
          <p>
            Built on passion, integrity, and innovation. We are driven by a
            genuine love for the planet, operate with transparency and
            scientific rigor, and constantly seek new, creative solutions for
            complex environmental challenges. We're a supportive community,
            working together for a healthier planet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
