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
          description="This one's real blocky" // TODO
          imgSrc="/family.png"
        />

        <Card
          title="Graduation"
          description="That is all :)" // TODO
          imgSrc="/graduation.jpg"
        />

        {/* SON */}
        <Card
          title="Parents"
          description="That is all :)" // TODO
          imgSrc="/parents.png"
        />

        {/* GRANDSON */}
        <Card
          title="Lola"
          description="That is all :)" // TODO
          imgSrc="/lola.png"
        />

        {/* FRIENDS */}
        <Card
          title="High School Friends"
          description="That is all :)" // TODO
          imgSrc="/high-school-friends.png"
        />

        <Card
          title="UCI Friends"
          description="That is all :)" // TODO
          imgSrc="/other-friends.png"
        />

        <Card
          title="Citrus College Friends"
          description="We can even do TALL buildings" // TODO
          imgSrc="/college-friends.png"
        />

        {/* ARTIST */}
        <Card
          title="Piano"
          description="That is all :)" // TODO
          imgSrc="/piano.png"
        />

        <Card
          title="Drawing"
          description="You like wavy buildings?" // TODO
          imgSrc="/drawing.png"
        />

        <Card
          title="Musicals"
          description="That is all :)" // TODO
          imgSrc="/theater.png"
        />

        {/* HIKER */}
        <Card
          title="Hiking"
          description="That is all :)" // TODO
          imgSrc="/hike.png"
        />

        {/* SOFTWARE DEVELOPER */}
        <Card
          title="Software Development"
          description="That is all :)" // TODO
          imgSrc="/software-development.jpg"
        />

        {/* TRAVELER */}
        <Card
          title="Sky Diving"
          description="That is all :)" // TODO
          imgSrc="/sky-diving.png"
        />

        <Card
          title="New York"
          description="That is all :)" // TODO
          imgSrc="/new-york.png"
        />

        <Card
          title="Alaska"
          description="We make pretty buildings" // TODO
          imgSrc="/alaska.png"
        />

        <Card
          title="Museums"
          description="That is all :)" // TODO
          imgSrc="/pictures.png"
        />

        <Card
          title="Warner Bros. Studios"
          description="That is all :)" // TODO
          imgSrc="/warner-bros.png"
        />

        {/* NERD */}
        <Card
          title="Anime"
          description="This ones pretty nice" // TODO
          imgSrc="/anime.png"
        />

        <Card
          title="Science"
          description="That is all :)" // TODO
          imgSrc="/science.png"
        />

        <Card
          title="Silly Picture"
          description="That is all :)" // TODO
          imgSrc="/silly.png"
        />
      </div>
    </section>
  );
}

