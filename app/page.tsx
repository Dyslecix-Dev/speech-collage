"use client";

import Card from "@/app/_components/Card";
import VanishText from "@/app/_components/VanishText";

export default function Home() {
  return (
    <section className="p-8 bg-violet-700">
      <VanishText />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* FATHER & HUSBAND */}
        <Card
          title="Family"
          description="TODO" // TODO
          imgSrc="/family.png"
        />

        <Card
          title="Graduation"
          description="TODO" // TODO
          imgSrc="/graduation.jpg"
        />

        {/* SON */}
        <Card
          title="Parents"
          description="TODO" // TODO
          imgSrc="/parents.png"
        />

        {/* GRANDSON */}
        <Card
          title="Lola"
          description="TODO" // TODO
          imgSrc="/lola.png"
        />

        {/* FRIENDS */}
        <Card
          title="High School Friends"
          description="TODO" // TODO
          imgSrc="/high-school-friends.png"
        />

        <Card
          title="UCI Friends"
          description="TODO" // TODO
          imgSrc="/other-friends.png"
        />

        <Card
          title="Citrus College Friends"
          description="TODO" // TODO
          imgSrc="/college-friends.png"
        />

        {/* ARTIST */}
        <Card
          title="Piano"
          description="TODO" // TODO
          imgSrc="/piano.png"
        />

        <Card
          title="Drawing"
          description="TODO" // TODO
          imgSrc="/drawing.png"
        />

        <Card
          title="Musicals"
          description="TODO" // TODO
          imgSrc="/theater.png"
        />

        {/* HIKER */}
        <Card
          title="Hiking"
          description="TODO" // TODO
          imgSrc="/hike.png"
        />

        {/* SOFTWARE DEVELOPER */}
        <Card
          title="Software Development"
          description="TODO" // TODO
          imgSrc="/software-development.jpg"
        />

        {/* TRAVELER */}
        <Card
          title="Sky Diving"
          description="TODO" // TODO
          imgSrc="/sky-diving.png"
        />

        <Card
          title="New York"
          description="TODO" // TODO
          imgSrc="/new-york.png"
        />

        <Card
          title="Alaska"
          description="TODO" // TODO
          imgSrc="/alaska.png"
        />

        <Card
          title="Museums"
          description="TODO" // TODO
          imgSrc="/pictures.png"
        />

        <Card
          title="Warner Bros. Studios"
          description="TODO" // TODO
          imgSrc="/warner-bros.png"
        />

        {/* NERD */}
        <Card
          title="Anime"
          description="TODO" // TODO
          imgSrc="/anime.png"
        />

        <Card
          title="Science"
          description="TODO" // TODO
          imgSrc="/science.png"
        />

        <Card
          title="Silly Picture"
          description="TODO" // TODO
          imgSrc="/silly.png"
        />
      </div>
    </section>
  );
}

