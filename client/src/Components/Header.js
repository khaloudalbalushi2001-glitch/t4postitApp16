import { Navbar, NavItem, NavLink, Nav } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice";

const Header = () => {
  const cuser = useSelector((state) => state.users.user1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = async () => {
    dispatch(logout());
    //ensure that the state update from the logout action has been processed before proceeding to the next step.
    await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/login"); //redirect to login page route.
  };

  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={logo} className="logo" />
          </NavItem>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>

          <NavItem>
            <Link onClick={handlelogout}>Logout</Link>
          </NavItem>

          {/*<NavItem>Hi {cuser}!</NavItem>*/}
          {cuser != null ? <NavItem>Hi {cuser}!</NavItem> : null}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
