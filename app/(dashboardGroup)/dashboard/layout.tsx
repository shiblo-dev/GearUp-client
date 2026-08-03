import { Navbar } from "@/components/shared/navbar";
 
const CustomerLayout = async (
    { children }: { children: React.ReactNode }) => {


  return <div>
    <Navbar  />
    {children}

  </div>;
};

export default  CustomerLayout;
