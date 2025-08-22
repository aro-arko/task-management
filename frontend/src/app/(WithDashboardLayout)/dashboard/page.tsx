import UserDashboard from "@/components/UserDashboard/UserDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User Dashboard",
};

const DashboardPage = () => {
  return (
    <div>
      <UserDashboard />
    </div>
  );
};

export default DashboardPage;
