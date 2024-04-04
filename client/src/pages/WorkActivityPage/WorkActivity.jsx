import WorkActivityPageLayout from "../../layouts/WorkActivityPageLayout/WorkActivityPageLayout";
import NavBar from "../../layouts/Navbar/NavBar";
import BackToDashboard from "../../components/BackToDashboard/BackToDashboard";

function WorkActivityPage() {
  return (
    <div>
      <NavBar />
      <BackToDashboard  />

      <WorkActivityPageLayout  />
    </div>
  );
}

export default WorkActivityPage