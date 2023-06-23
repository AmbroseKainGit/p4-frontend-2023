import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <div className="">
      <nav className="w-full bg-teal-950 h-20 absolute flex items-center justify-center">
        <h1>Star Wars</h1>
      </nav>
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
