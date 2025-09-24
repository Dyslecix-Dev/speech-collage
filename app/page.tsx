"use client";

import Card from "@/app/_components/Card";
import VanishText from "@/app/_components/VanishText";

export default function Home() {
  return (
    <section className="p-8 bg-violet-700">
      <VanishText />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* FATHER & HUSBAND */}
        <Card title="Family" description="May 2022" imgSrc="/family.png" />

        <Card title="Graduation" description="June 2019" imgSrc="/graduation.jpg" />

        {/* SON */}
        <Card title="Parents" description="January 1997" imgSrc="/parents.png" />

        {/* GRANDSON */}
        <Card title="Lola" description="December 2024" imgSrc="/lola.png" />

        {/* FRIENDS */}
        <Card title="High School Friends" description="October 2023" imgSrc="/high-school-friends.png" />

        <Card title="UCI Friends" description="October 2024" imgSrc="/other-friends.png" />

        <Card title="Citrus College Friends" description="July 2025" imgSrc="/college-friends.png" />

        {/* ARTIST */}
        <Card title="Piano" description="December 2022" imgSrc="/piano.png" />

        <Card title="Drawing" description="June 2024" imgSrc="/drawing.png" />

        <Card title="Musicals" description="August 2023" imgSrc="/theater.png" />

        {/* HIKER */}
        <Card title="Hiking" description="November 2022" imgSrc="/hike.png" />

        {/* SOFTWARE DEVELOPER */}
        <Card title="Software Development" description="October 2023" imgSrc="/software-development.jpg" />

        {/* TRAVELER */}
        <Card title="Sky Diving" description="February 2021" imgSrc="/sky-diving.png" />

        <Card title="New York" description="May 2024" imgSrc="/new-york.png" />

        <Card title="Alaska" description="July 2025" imgSrc="/alaska.png" />

        <Card title="Museums" description="April 2022" imgSrc="/pictures.png" />

        <Card title="Warner Bros. Studios" description="January 2024" imgSrc="/warner-bros.png" />

        {/* NERD */}
        <Card title="Anime" description="June 2024" imgSrc="/anime.png" />

        <Card title="Science" description="July 2021" imgSrc="/science.png" />

        <Card title="Silly Picture" description="November 2023" imgSrc="/silly.png" />
      </div>
    </section>
  );
}

