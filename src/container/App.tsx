import Login from "@/components/pagecomponent/login/Login";
import Registration from "@/components/pagecomponent/login/Registration";
import Layout from "@/hoc/Layout";
import Category from "@/pages/category/Category";
import Company from "@/pages/company/Company";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/error/NotFound";
import Job from "@/pages/job/Job";
import ViewAllJobs from "@/pages/job/ViewAllJobs";
import JobType from "@/pages/jobType/JobType";
import Location from "@/pages/location/Location";
import Skill from "@/pages/skill/Skill";
import Technologies from "@/pages/technologies/Technologies";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/jobtype" element={<JobType />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/location" element={<Location />} />
          <Route path="/job" element={<Job />} />
          <Route path="/company" element={<Company />} />
          <Route path="/alljobs" element={<ViewAllJobs />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
