import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-blue-900 to-black min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
