import logo from "../../assets/logo.png";


const Header = () => {
  const socials = [
    { id: 1, name: "Facebook", url: "#" },
    { id: 2, name: "Instagram", url: "#" },
    { id: 3, name: "Twitter", url: "#" },
    { id: 4, name: "Github", url: "#" }
  ];
  const Links = [
    {id:1, name: "Home", url:"#"},
    {id:2, name: "About", url:"#"},
    {id:3, name: "Menu", url:"#"},
    {id:4, name: "Pages", url:"#"},
    {id:5, name: "Contact", url:"#"}
  ];

  return (
    <div className="header">
      <div className="topbar">
        <div className="info">
          <span className="info call">phone</span>
          <span className="info mail">mail</span>
        </div>
        <div className="social">
          <ul>
            {socials.map(social => (
              <li key={social.id}>
                <a href={social.url}>{social.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="nav-bar">
        <span><img src={logo} id="logo" alt="The website's logo"></img></span>
        <div className="links">
          <ul>
          {Links.map(link =>(
            <li key={link.id}>
              <a href={link.url}>{link.name}</a>
              </li>
          ))}
          </ul>
        </div>
        <button className="book">Book a Table</button>
      </div>
    </div>
  );
}

export default Header;
