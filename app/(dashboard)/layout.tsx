import Header from "@/components/navigation/header";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="px-3 lg:px-14">
        <Header />
        {children}
      </main>
    </>
  );
}

export default DashboardLayout;
