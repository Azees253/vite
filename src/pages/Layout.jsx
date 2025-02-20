import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="blogs">blogs</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
