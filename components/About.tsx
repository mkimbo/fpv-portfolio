import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-full flex items-center py-10">
      <div className="flex flex-col lg:max-w-5xl mx-auto w-full px-5 ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          VIDEOGRAPHER
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-5 w-[80%]">
          A dedicated visual storyteller based in Kenya, originally from
          Mombasa. With a foundational background in photography, Vahid Davids
          earned his Bachelor of Commerce in Marketing and HR from the
          University of Wits, followed by a Bachelor of Arts in Motion Picture.
        </p>
        <p className="text-gray-700 dark:text-gray-300 w-[80%]">
          His work spans documentary films, short narratives, and television,
          alongside music videos for artists like Uncle Waffles and Omah Lay,
          commercials for brands like Archive, Spotify, Sneaker Factory and
          Striped Horse. His belief is that each project has a fundamental
          design which is created through focused collaboration.
        </p>
      </div>
    </div>
  );
}

export default About;
