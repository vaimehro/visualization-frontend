import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul  className="navbar-ul" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>


    </>
  )
};

export default Navigation;