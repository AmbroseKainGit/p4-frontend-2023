import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <>
      <nav className="w-full bg-[#586F6B] h-20 absolute flex items-center justify-center">
        <h1 className="text-[#F8F4E3] text-3xl">Pokedex</h1>
      </nav>
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
