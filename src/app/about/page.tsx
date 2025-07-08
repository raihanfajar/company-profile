import React from 'react';
import Image from 'next/image'; // Asumsi kamu akan memakai Image dari next/image di sini

function AboutUs() {
  return (
    <section className="container mx-auto mt-[100px] px-4 py-16 md:py-24"> {/* Tambah padding atas bawah */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          About GreenStride: Our Story, Our Mission, Our Future
        </h2>
        <p className="max-w-4xl text-lg md:text-xl text-gray-700 mb-12">
          At GreenStride, we believe that a harmonious future between humanity and nature is not just a dream, but a reachable goal. Our journey began in 2010, when a collective of passionate environmental scientists, dedicated activists, and nature enthusiasts united with a shared vision: to combat the escalating environmental crisis and protect Earth's invaluable natural heritage.
        </p>
      </div>

      {/* Bagian Our Genesis */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
        <div className="w-full md:w-1/2">
          <Image
            src="/team.png" // Ganti dengan path gambar yang relevan
            alt="Our Genesis"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Our Genesis</h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Born from a deep-seated concern for our planet, GreenStride was founded on the principle that systemic change, driven by both science and community action, is essential. We recognized the urgent need for an organization that could bridge the gap between scientific research, policy advocacy, and on-the-ground conservation efforts. From humble beginnings, we've grown into a global voice for environmental stewardship.
          </p>
        </div>
      </div>

      {/* Bagian Our Mission */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16"> {/* reverse untuk layout bergantian */}
        <div className="w-full md:w-1/2">
          <Image
            src="/hutan.jpg" // Ganti dengan path gambar yang relevan
            alt="Our Mission"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Our core mission is simple yet profound: To safeguard vital ecosystems, promote biodiversity, and champion sustainable solutions for a healthier, more resilient planet. We work tirelessly to ensure that future generations inherit a world rich in natural beauty and resources, free from the threats of environmental degradation.
          </p>
        </div>
      </div>

      {/* Bagian Our Approach */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-800">Our Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Science-Driven</h4>
            <p className="text-gray-700">Our strategies are rooted in rigorous scientific research and data, ensuring our actions are impactful and effective.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Community-Centered</h4>
            <p className="text-gray-700">We empower local communities, recognizing their invaluable role as stewards of their own environments and fostering sustainable practices that benefit all.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Advocacy & Education</h4>
            <p className="text-gray-700">We actively engage with policymakers to drive systemic change and educate the public to foster a global culture of environmental responsibility.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2 text-green-700">Global to Local Impact</h4>
            <p className="text-gray-700">From international forums to remote villages, we work on diverse scales, understanding that global challenges require both broad strategies and tailored local solutions.</p>
          </div>
        </div>
      </div>

      {/* Bagian Our Team */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
        <div className="w-full md:w-1/2">
          <Image
            src="/teamb.jpg" 
            alt="Our Team"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Our Team</h3>
          <p className="text-lg md:text-xl leading-relaxed">
            GreenStride is powered by a diverse and dedicated team of experts—from field conservationists braving challenging terrains, to policy analysts shaping legislation, and passionate communicators inspiring action. Every member shares a profound commitment to our mission, contributing their unique skills to our collective goal. We cultivate a culture of integrity, innovation, and mutual respect, where passion for the planet drives every endeavor.
          </p>
        </div>
      </div>

      {/* Bagian Join Our Stride */}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Join Our Stride</h3>
        <p className="max-w-4xl text-lg md:text-xl text-gray-700 mb-8">
          The challenges facing our planet are immense, but so is the power of collective action. We invite you to learn more about our work, join our initiatives, and become a part of the GreenStride family. Together, we can take meaningful steps towards nurturing Earth and securing tomorrow for everyone.
        </p>
        {/* Tambahkan tombol CTA jika ada */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Learn How You Can Help
        </button>
      </div>
    </section>
  );
}

export default AboutUs;