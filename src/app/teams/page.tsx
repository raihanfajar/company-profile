"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Tipe data untuk 1 orang user dari randomuser.me
interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
  };
}

function Teams() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); // ← Ini penting

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const data = await res.json();
      setTeamMembers(data.results);
    };
    fetchMembers();
  }, []);

  return (
    <section className="container mx-auto mt-[100px] px-4">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold md:text-5xl my-15">Meet Our Teams</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]"
            >
              <div className="absolute top-0 left-1/2 h-[80px] w-[80px] -translate-x-1/2 overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
                <Image
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#7bbcb6] px-5 text-[#03045E]">
                <div className="h-5 lg:h-10"></div>
                <h1 className="mb-5 text-center text-xl font-semibold text-blue-700">
                  {member.name.first} {member.name.last},
                </h1>
                <p className="text-gray-500">{member.location.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
