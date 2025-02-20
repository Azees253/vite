import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/vite/Home">Home</a>
          </li>
          <li>
            <a href="/vite/about">About</a>
          </li>
          <li>
            <a href="/vite/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
