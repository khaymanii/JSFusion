import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-6">
      <div>
        {" "}
        <Sidebar />
      </div>
      <div className="w-full">
        {" "}
        <Dashboard />
      </div>
    </div>
  );
}
