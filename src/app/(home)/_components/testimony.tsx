import Image from "next/image";
import React from "react";

function Testimony() {
  return (
    <section className="container mx-auto mt-52 px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mr-auto text-3xl text-[#7bbcb6] md:text-4xl">
          What People Say About Us
        </h1>
        <div className="mt-5 mr-auto md:w-[420px]">
          <p className="text-justify text-base">
            Hear directly from those who have witnessed GreenStride's impact and
            commitment firsthand. Their stories reflect our dedication to
            creating a healthier planet.
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-10 md:mt-15 md:gap-20 lg:flex-row">
          {/* ORANG 1 */}
          <div className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]">
            <div className="absolute top-0 left-1/2 h-[80px] w-[80px] -translate-x-1/2 overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
              <Image
                src="/orang2.png"
                alt="Profile Picture"
                fill={true}
                objectFit="cover"
              />
            </div>
            <div className="mt-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#7bbcb6] px-5 text-[#03045E]">
              <div className="h-5 lg:h-10"></div>
              <p className="text-justify">
                GreenStride helped us transform our community's degraded forest
                into a thriving ecosystem again. Their expertise and dedication
                are truly inspiring!
              </p>
              <h1 className="mb-5 text-center text-xl font-semibold text-blue-700">
                — John S., Community Leader, Kalimantan
              </h1>
            </div>
          </div>
          {/* END OF ORANG 1 */}

          {/* ORANG 2 */}
          <div className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]">
            <div className="absolute top-0 left-1/2 h-[80px] w-[80px] -translate-x-1/2 overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
              <Image
                src="/orang5.png"
                alt="Profile Picture"
                fill={true}
                objectFit="cover"
              />
            </div>
            <div className="mt-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#7bbcb6] px-5 text-[#03045E]">
              <div className="h-5 lg:h-10"></div>
              <p className="text-justify">
                "As a policymaker, I've seen GreenStride's unwavering commitment
                to science-based advocacy. Their research is crucial in shaping
                effective environmental legislation."
              </p>
              <h1 className="mb-5 text-center text-xl font-semibold text-blue-700">
                Dr. Kenji T., Environmental Policy Advisor, Tokyo
              </h1>
            </div>
          </div>
          {/* END OF ORANG 2 */}

          {/* ORANG 3 */}
          <div className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]">
            <div className="absolute top-0 left-1/2 h-[80px] w-[80px] -translate-x-1/2 overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
              <Image
                src="/orang3.png"
                alt="Profile Picture"
                fill={true}
                objectFit="cover"
              />
            </div>
            <div className="mt-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#7bbcb6] px-5 text-[#03045E]">
              <div className="h-5 lg:h-10"></div>
              <p className="text-justify">
                "My students were captivated by GreenStride's educational
                workshop. They now understand the importance of conservation and
                are actively making sustainable choices at home."
              </p>
              <h1 className="mb-5 text-center text-xl font-semibold text-blue-700">
                Aisha R., Elementary School Teacher, Nairobi
              </h1>
            </div>
          </div>
          {/* END OF ORANG 3 */}
        </div>
      </div>
    </section>
  );
}

export default Testimony;
