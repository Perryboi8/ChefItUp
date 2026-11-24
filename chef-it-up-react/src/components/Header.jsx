function Header({ onPageChange }) {
  return (
    <header className="header">
      <a className="brand" href="/">
        Chef <span>it up!</span>
      </a>
      <nav className="nav">
        <button type="button" onClick={() => onPageChange("home")}>
          Home
        </button>
        <a href="#chat.html">Talk to Chef</a>
        <button type="button" onClick={() => onPageChange("favorites")}>
          Favorites
        </button>
      </nav>
    </header>
  );
}

export default Header;
