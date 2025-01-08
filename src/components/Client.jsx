import React from "react";
import img from "/src/assets/Anime_Person.png";

const Client = () => {
  const clientsList = [
    {
      name: "Alice Johnson",
      position: "Frontend Developer",
      about: "Alice specializes in creating intuitive and responsive user interfaces using React, Tailwind CSS, and JavaScript. She has a passion for crafting seamless user experiences.",
      imgSrc: img,
    },
    {
      name: "Michael Smith",
      position: "Backend Developer",
      about: "Michael is a skilled backend developer with expertise in Node.js, Express, and MongoDB. He focuses on building efficient and scalable server-side applications.",
      imgSrc: img,
    },
    {
      name: "Sophia Brown",
      position: "Data Analyst",
      about: "Sophia has a knack for turning complex datasets into actionable insights. She is proficient in Python, Power BI, and SQL, ensuring data-driven decision-making.",
      imgSrc: img,
    },
    {
      name: "Ethan Wilson",
      position: "UI/UX Designer",
      about: "Ethan creates visually stunning and user-friendly designs. He excels in Figma, Adobe XD, and Sketch, always aiming for a perfect balance between form and function.",
      imgSrc: img,
    },
    {
      name: "Emma Davis",
      position: "DevOps Engineer",
      about: "Emma ensures smooth CI/CD pipelines and efficient infrastructure management. She is skilled in Docker, Kubernetes, and AWS, enabling streamlined deployments.",
      imgSrc: img,
    },
  ];

  return (
    <section className="max-w-screen-xl text-white mx-auto pb-12">
      <h2 className="text-2xl sm:text-[40px] bg-[#111] bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#fff] sm:border-2 border-[#1788ae] rounded-md">
        Happy Clients
      </h2>

      <h2 className="text-3xl sm:text-[40px] my-4 bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#fff]">
        What my clients are saying?
      </h2>
      <p className="text-center text-xl text-[#929292] my-4">
        Don't just take our word for it. See what my clients have to say about my services.
      </p>

      <div className="mt-12 flex overflow-x-clip lg:mt-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].map((_, index) =>
            clientsList.map((client) => (
              <div
                key={`${index}-${client.name}`}
                className="max-w-xs md:p-8 md:max-w-md p-6 relative bg-gray-800 after:rounded-3xl rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-10 after:pointer-events-none after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 hover:-rotate-3 transition duration-300s"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0">
                    <img src={client.imgSrc} alt={client.name} className="max-h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">{client.name}</div>
                    <div className="text-sm text-white/40">{client.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{client.about}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Client;
