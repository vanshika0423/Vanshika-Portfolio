import React from "react";
import Image from "next/image";
import git from "../../asset/git.png";
import react from "../../asset/react.png";
import java from "../../asset/java.png";
import python from "../../asset/python.png";
import js from "../../asset/js.png";
import html from "../../asset/html-5.png";
import css from "../../asset/css-3.png";
import cpp from "../../asset/c-.png";

const CIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#A8B9CC" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="black"
      fontSize="24"
      fontWeight="bold"
    >
      C
    </text>
  </svg>
);

const TailwindIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#38B2AC" />
    <path
      d="M10 13C14.5 9.5 21.5 9.5 26 13C21.5 16.5 14.5 16.5 10 13ZM14 21C18.5 17.5 25.5 17.5 30 21C25.5 24.5 18.5 24.5 14 21Z"
      fill="white"
    />
  </svg>
);

const NextJsIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="black" />
    <path d="M15 10L25 25V10H28V30H25L15 15V30H12V10H15Z" fill="white" />
  </svg>
);

const AwsIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#232F3E" />
    <path
      d="M12.31,29.32a4.34,4.34,0,0,1-4.06-2.59,4.42,4.42,0,0,1,.33-4.6l7.92-13a4.4,4.4,0,0,1,7.58,0l7.92,13a4.42,4.42,0,0,1,.33,4.6,4.34,4.34,0,0,1-4.06,2.59Z"
      fill="#FF9900"
    />
  </svg>
);

const SqlIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#F29111" />
    <ellipse cx="20" cy="14" rx="10" ry="4" fill="#EDB50E" />
    <path
      d="M10 14V26C10 28.2091 14.4772 30 20 30C25.5228 30 30 28.2091 30 26V14C30 11.7909 25.5228 10 20 10C14.4772 10 10 11.7909 10 14Z"
      fill="#00758F"
    />
    <ellipse cx="20" cy="14" rx="10" ry="4" fill="#EDB50E" />
  </svg>
);

const MongoDbIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#47A248" />
    <path d="M20,5C12.5,10 13,23.5 20,35C27,23.5 27.5,10 20,5Z" fill="#FFF" />
    <path d="M20,5C21,15 22,23 20,35" stroke="#47A248" strokeWidth="1.5" />
  </svg>
);

const MuiIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#0081CB" />
    <path d="M10 10H30L20 20L10 10Z" fill="white" />
    <path d="M10 15L20 25L30 15L20 20L10 15Z" fill="white" />
    <path d="M10 25H30V30H10V25Z" fill="white" />
  </svg>
);

const stackData = [
  {
    name: "C++",
    icon: (
      <Image
        src={cpp}
        alt="C++ Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  { name: "C", icon: <CIcon /> },

  {
    name: "Java",
    icon: (
      <Image
        src={java}
        alt="Java Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  {
    name: "Html",
    icon: (
      <Image
        src={html}
        alt="Html Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  {
    name: "Css",
    icon: (
      <Image
        src={css}
        alt="Css Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <Image
        src={js}
        alt="JavaScript Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },

  {
    name: "React.js",
    icon: (
      <Image
        src={react}
        alt="React Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  { name: "Tailwind", icon: <TailwindIcon /> },

  { name: "Next.js", icon: <NextJsIcon /> },

  {
    name: "Python",
    icon: (
      <Image
        src={python}
        alt="React Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  { name: "AWS", icon: <AwsIcon /> },
  { name: "SQL", icon: <SqlIcon /> },
  { name: "MongoDB", icon: <MongoDbIcon /> },
  {
    name: "Git",
    icon: (
      <Image
        src={git}
        alt="Git Logo"
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  { name: "Material UI", icon: <MuiIcon /> },
];

const StackItem = ({ icon, name }) => (
  <div className="flex flex-col sm:flex-row items-center text-center gap-2 sm:gap-4">
    <div className="flex-shrink-0 p-4 border border-dashed border-[#3d3d3d] rounded-xl hover:border-white transition-colors duration-300 cursor-pointer">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-100">{name}</h3>
  </div>
);

export default function Tech_Stack() {
  return (
    <div className="bg-black min-h-[85vh] text-white font-sans p-8 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl text-center font-bold  text-gray-100 mb-30">
          My Stack
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-20">
          {stackData.map((item, index) => (
            <StackItem key={index} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
