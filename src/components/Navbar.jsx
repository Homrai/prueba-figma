import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar align-items-center">
      <div className="d-flex">
        <button className="toggle-button bi bi-list bg-navbar text-light border-0"></button>
        <img src={logo} width={50} alt="logo-test" />
      </div>
      <div className="d-flex d-none">
        <div className="d-flex rounded input-div  bg-black text-light">
          <input type="text" placeholder="Search here" className="bg-black text-green border-0 input-nav" />
          <button className="bi bi-search text-grey bg-black border-0"></button>
        </div>
          <button className="bi bi-gear rounded bg-green text-light settings-button border-0"></button>
      </div>
      <div className="d-flex justify-content-end not-button-div">
        <button className="bi bi-bell not-button "><i className="bi bi-circle-fill circle-button text-yellow"></i></button>
        <button className="bi bi-chat-left-text not-button d-none"><i className="bi bi-circle-fill circle-button text-yellow"></i></button>
        <button className="bi bi-gift not-button text-grey d-none"><i className="bi bi-circle-fill circle-button text-grey"></i></button>
      </div>
      <div className="d-flex align-items-center user-div">
        <button className="user-img d-flex"><i className="bi bi-person user-icon"></i></button>
        <button className="user-button d-none">David </button>
        <i className="bi bi-caret-down-fill  flecha-user align-self-center"></i>
      </div>
    </div>
  )
}

export default Navbar
