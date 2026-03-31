import Heading from "../components/Heading";
import WhoIAm from "../components/WhoIAm";
import Activity from "../components/Activity";
import MajorProjects from "../components/MajorProjects";
import ProjectList from "../components/ProjectList";
import Awards from "../components/Awards";

const Dashboard = () => {
  return (
    <>
      <Heading />
      <WhoIAm />
      <MajorProjects />
      <ProjectList />
      <Awards />
      <Activity />
    </>
  );
};

export default Dashboard;
