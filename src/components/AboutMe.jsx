import React from "react";

export default function AboutMe(props) {
  return (
    <div id="about" className="flex flex-col py-52 dark:bg-neutral3">
      <p className="self-start px-4 mt-4 text-2xl opacity-30 dark:text-white">
        About
      </p>
      <div className="m-12 w-96 border-double border-4 border-primary rounded-r-md shadow-3xl">
        {/* <p className="p-6 text-center dark:text-white">
          I am a self-taught and driven web developer with a passion for
          creating intuitive and visually appealing websites. I have honed my
          abilities through various personal projects and online courses.
          Committed to staying current with industry trends, I am eager to bring
          my unique perspective and technical skills to a dynamic and
          challenging environment. Let's build something amazing together.
        </p> */}
        <p className="p-6 text-left dark:text-white">
          As a self-taught and motivated web developer, I am constantly seeking
          opportunities to create stunning and user-friendly websites that leave
          a lasting impact. With a keen eye for design and a relentless pursuit
          of knowledge, I have honed my abilities through a combination of
          personal projects and online courses.
        </p>
        <p className="p-6 text-left dark:text-white">
          Always keeping a finger on the pulse of the latest industry trends and
          innovations, I am committed to delivering outstanding results and
          bringing fresh perspectives to any project. I am eager to leverage my
          technical skills and creative talents in a dynamic and challenging
          environment, where I can collaborate with like-minded individuals to
          build something truly amazing. Let's turn your vision into a reality!
        </p>
      </div>
      <table></table>
    </div>
  );
}
