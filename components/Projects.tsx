//next
import { NextPage } from "next";
//react-context
import { useAppContext } from "@/context/StateContext";
//types
import { ProjectProps } from "@/Interfaces/Projects";
//components
import ProjectsCard from "./UI/ProjectsCard";

const Projects: NextPage<ProjectProps> = ({ data }) => {
  const { sectionRefs } = useAppContext();

  return (
    <div
      id="projects"
      ref={sectionRefs.projects}
      className="max-w-[72rem] mx-auto h-full md:max-h-[90rem] 2xl:pt-28 px-4 sm:pt-14 "
    >
      <h1 className="text-4xl px-1">Some Things I've Built</h1>
      <p className="my-4 text-xs md:text-sm px-1 indent-6">
        As a web developer, I believe that the best way to master the craft is
        through hands-on experience. That's why I'm passionate about building
        websites and web applications from scratch, using my coding skills to
        bring my ideas to life.
      </p>
      <div className="w-full grid md:max-lg:grid-cols-2  xl:grid-cols-3 grid-rows-3 gap-4 grid-flow-col-dense justify-center ">
        {data.map((item, index) => (
          <ProjectsCard key={item.name} projects={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
