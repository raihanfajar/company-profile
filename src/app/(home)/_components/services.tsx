import React from "react";

function Services() {
  return (
    <section className="container mx-auto mt-52 px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-extrabold text-[#98e4d9] md:text-5xl">
          Protecting Our Planet Together!
        </h1>
        <p className="mt-20 text-justify font-semibold">
          At GreenStride, our work focuses on critical areas to ensure a
          sustainable future for Earth. We achieve our mission through a range
          of core services designed for maximum impact.
        </p>

        {/* ACTIVITY 1 */}
        <div className="card lg:card-side bg-base-100 mt-15 border-2 border-black shadow-sm">
          <figure className="md:min-w-[540px] md:h-[309px] overflow-hidden rounded-t-lg">
            <img
              src="https://www.lifeinthefingerlakes.com/wp-content/uploads/2017/05/onandaga-restoration-690x394.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body max-w-md bg-[#387f75]">
            <h2 className="card-title">Habitat Conservation & Restoration</h2>
            <p className="text-base font-normal">
              We actively protect and restore vital natural habitats, from lush
              forests and expansive wetlands to fragile coral reefs. This
              includes land acquisition, rewilding initiatives, and working with
              local communities to preserve biodiversity hotspots. Our efforts
              safeguard countless species and the ecological balance they
              maintain.
            </p>
          </div>
        </div>
        {/* END OF ACTIVITY 1 */}

        {/* ACTIVITY 2 */}
        <div className="card lg:card-side bg-base-100 mt-15 border-2 border-black shadow-sm">
          <figure className="md:min-w-[540px] md:h-[309px] overflow-hidden rounded-t-lg">
            <img
              src="https://foodtank.com/wp-content/uploads/2020/10/Food-Tank-36-Climate-Orgs.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body max-w-md bg-[#387f75]">
            <h2 className="card-title">Climate Action & Advocacy</h2>
            <p className="text-base font-normal">
              We champion policies and practices that mitigate climate change.
              Through research, public awareness campaigns, and direct advocacy
              with policymakers, we push for reduced carbon emissions, renewable
              energy adoption, and sustainable resource management to build
              resilience against a changing climate.
            </p>
          </div>
        </div>
        {/* END OF ACTIVITY 2 */}

        {/* ACTIVITY 3 */}
        <div className="card lg:card-side bg-base-100 mt-15 border-2 border-black shadow-sm">
          <figure className="md:min-w-[540px] md:h-[309px] overflow-hidden rounded-t-lg">
            <img
              src="https://images.squarespace-cdn.com/content/v1/59d5480f18b27dd12c209653/1507662232335-CNUASRMYUJ2ZII925ZJ8/OWF+3.jpg?format=2500w"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body max-w-md bg-[#387f75]">
            <h2 className="card-title">Environmental Education & Outreach</h2>
            <p className="text-base font-normal">
              Empowering the next generation and communities worldwide is key.
              We develop educational programs, workshops, and digital content to
              raise awareness about environmental issues, promote sustainable
              living, and inspire action for conservation at every level, from
              schools to global forums.
            </p>
          </div>
        </div>
        {/* END OF ACTIVITY 3 */}

        {/* ACTIVITY 4 */}
        <div className="card lg:card-side bg-base-100 mt-15 border-2 border-black shadow-sm">
          <figure className="md:min-w-[540px] md:h-[309px] overflow-hidden rounded-t-lg">
            <img
              src="https://www.nurturedevelopment.org/wp-content/uploads/2019/04/Planting-Vegetables-in-community-garden.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body max-w-md bg-[#387f75]">
            <h2 className="card-title">Sustainable Community Development</h2>
            <p className="text-base font-normal">
              We partner with communities globally to implement sustainable
              practices that benefit both people and the planet. This includes
              promoting eco-friendly agriculture, supporting sustainable
              livelihoods, and developing local solutions that reduce
              environmental impact while enhancing well-being.
            </p>
          </div>
        </div>
        {/* END OF ACTIVITY 4 */}
      </div>
    </section>
  );
}

export default Services;
