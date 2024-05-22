import Links from "./links/Links";

const Navbar = () => {

  return (
    <>
      <div className="wrapper">
        <button type="button" className="burger" id="burger">
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
        <span className="overlay" id="overlay" />
        <nav className="navbar" id="navbar">
          <Links />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
