import Image from "next/image";
import Link from "next/link";
import leet from "../../asset/leetcode.png";
import codeforce from "../../asset/codeforce.png";
import github from "../../asset/github.png";

export default function SelectedProjects() {
  const projects = [
    {
      title: "Leetcode",
      image: leet,
      link: "https://leetcode.com/u/mayank__24/",
    },
    {
      title: "Codeforce",
      image: codeforce,
      link: "https://codeforces.com/profile/minku6296",
    },
    {
      title: "GitHub",
      image: github,
      link: "https://github.com/MayankGEHU",
    },
  ];

  return (
    <section className="bg-black text-white py-10 px-4 md:px-10 lg:px-20 mt-40 mb-30">
      <div className="mb-28 font-sans text-center">
        <h2 className="text-4xl font-bold">My Coding Profiles</h2>
      </div>

      <div className="border border-dashed border-[#3d3d3d] rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative rounded-xl overflow-hidden border border-neutral-700 hover:scale-[1.02] transition-transform">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[280px] object-cover"
                  width={500}
                  height={280}
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
