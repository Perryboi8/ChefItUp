function Teams() {
  return (
    <section className="team-section">
      <p className="eyebrow">THE PEOPLE BEHIND THE APRON</p>
      <h2>Meet the Team</h2>
      <p>The creators behind Chef it Up!</p>

      <div className="team-grid">
        <div className="team-member">
          <h3>Edwin Segovia</h3>
          <p>Co-creator</p>
          <a
            href="https://github.com/EdSego"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
        <div className="team-member">
          <h3>Ryan Perry</h3>
          <p>Co-creator</p>
          <a
            href="https://github.com/Perryboi8"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Teams;
