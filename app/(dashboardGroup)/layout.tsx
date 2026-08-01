import { Navbar } from "@/components/shared/navbar";




const DashboardGroupLayout = async (
    { children }: { children: React.ReactNode }) => {


  return <div>
<Navbar />
    {children}

  </div>;
};

export default DashboardGroupLayout;
