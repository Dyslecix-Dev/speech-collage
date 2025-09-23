"use client";

import { motion } from "motion/react";

const RevealCards = () => {
  return (
    <section className="p-8 bg-slate-800">
      <span className="block text-center text-xl font-medium mb-4">Hover a card</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <Card
          title="Alaska"
          description="We make pretty buildings" // TODO
          imgSrc="/alaska.png"
        />

        <Card
          title="Anime"
          description="This ones pretty nice" // TODO
          imgSrc="/anime.png"
        />

        <Card
          title="College Friends"
          description="We can even do TALL buildings" // TODO
          imgSrc="/college-friends.png"
        />

        <Card
          title="Drawing"
          description="You like wavy buildings?" // TODO
          imgSrc="/drawing.png"
        />

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

        <Card
          title="High School Friends"
          description="That is all :)" // TODO
          imgSrc="/high-school-friends.png"
        />

        <Card
          title="Hiking"
          description="That is all :)" // TODO
          imgSrc="/hike.png"
        />

        <Card
          title="Lola"
          description="That is all :)" // TODO
          imgSrc="/lola.png"
        />

        <Card
          title="New York"
          description="That is all :)" // TODO
          imgSrc="/new-york.png"
        />

        <Card
          title="Other Close Friends"
          description="That is all :)" // TODO
          imgSrc="/other-friends.png"
        />

        <Card
          title="Parents"
          description="That is all :)" // TODO
          imgSrc="/parents.png"
        />

        <Card
          title="Playing Piano"
          description="That is all :)" // TODO
          imgSrc="/piano.png"
        />

        <Card
          title="Museums"
          description="That is all :)" // TODO
          imgSrc="/pictures.png"
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

        <Card
          title="Sky Diving"
          description="That is all :)" // TODO
          imgSrc="/sky-diving.png"
        />

        <Card
          title="Software Development"
          description="That is all :)" // TODO
          imgSrc="/software-development.jpg"
        />

        <Card
          title="Musicals"
          description="That is all :)" // TODO
          imgSrc="/theater.png"
        />

        <Card
          title="Warner Bros. Studios"
          description="That is all :)" // TODO
          imgSrc="/warner-bros.png"
        />
      </div>
    </section>
  );
};

const Card = ({ imgSrc, title, description }: { imgSrc: string; title: string; description: string }) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>

      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors duration-300">
        <h3 className="text-xl text-center mb-2 font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

export default RevealCards;

