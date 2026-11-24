function Header({ currentPage, onPageChange }) {
  return (
    <header className="header">
      <button
        type="button"
        className="brand"
        onClick={() => onPageChange("home")}
      >
        Chef <span>it up!</span>
      </button>
      <nav className="nav">
        <button
          type="button"
          className={currentPage === "home" ? "active" : ""}
          onClick={() => onPageChange("home")}
        >
          Home
        </button>
        <button
          type="button"
          className={currentPage === "chef" ? "active" : ""}
          aria-pressed={currentPage === "chef"}
          onClick={() => onPageChange("chef")}
        >
          Talk to Chef
        </button>
        <button
          type="button"
          className={currentPage === "favorites" ? "active" : ""}
          onClick={() => onPageChange("favorites")}
        >
          Favorites
        </button>
      </nav>
    </header>
  );
}

export default Header;
