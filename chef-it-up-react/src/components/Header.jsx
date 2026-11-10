function Header() {
  return (
    <header className="header">
      <a className="brand" href="/">
        Chef <span>it up!</span>
      </a>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#chat.html">Talk to Chef</a>
        <a href="#favorite">Favorites</a>
      </nav>
    </header>
  );
}

export default Header;
