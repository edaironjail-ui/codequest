import { modules, badges, dailyChallenges, stats } from './data.js';

function App() {
  const activeModule = modules[0];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">C</div>
          <div>
            <p className="eyebrow">Apprentissage</p>
            <h1>CodeQuest</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Accueil</button>
          <button className="nav-item">Parcours</button>
          <button className="nav-item">Défis</button>
          <button className="nav-item">Badges</button>
          <button className="nav-item">Profil</button>
        </nav>

        <div className="mini-card glow">
          <p className="label">Streak</p>
          <h3>{stats.streak} jours</h3>
          <span>Tu avances sans interruption.</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow muted">Progression</p>
            <h2>Tableau de bord</h2>
          </div>

          <div className="top-actions">
            <button className="ghost-btn">Aperçu</button>
            <button className="primary-btn">Continuer</button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="pill">Semaine 3</span>
            <h3>Tu es sur la bonne voie !</h3>
            <p>
              Continue ton parcours HTML, maîtrise les commandes du terminal Linux Mint et Windows, et gagne des récompenses au fil de tes missions.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Reprendre la leçon</button>
              <button className="ghost-btn">Voir le plan</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="code-card">
              <div className="code-topbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-snippet">
                <span>&lt;h1&gt;Bonjour !&lt;/h1&gt;</span>
                <span>&lt;section className="mission"&gt;</span>
                <span>  &lt;p&gt;Apprends, pratique, gagne.&lt;/p&gt;</span>
                <span>&lt;/section&gt;</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <p>XP total</p>
            <h3>{stats.xp}</h3>
            <div className="meter"><span style={{ width: '82%' }}></span></div>
          </div>

          <div className="stat-card">
            <p>Leçons</p>
            <h3>{stats.lessonsDone}</h3>
            <small>Objectif hebdo : {stats.weeklyGoal}%</small>
          </div>

          <div className="stat-card">
            <p>Précision</p>
            <h3>{stats.accuracy}%</h3>
            <small>Très solide.</small>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel module-panel">
            <div className="panel-header">
              <h3>Parcours</h3>
              <span>{modules.length} modules</span>
            </div>

            <div className="mission-list">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className={`mission-item ${module.status === 'active' ? 'active-module' : ''}`}
                >
                  <div className="mission-icon">{module.status === 'active' ? '▶' : '🔒'}</div>
                  <div className="mission-text">
                    <div className="mission-meta">
                      <strong>{module.title}</strong>
                      <span>{module.level}</span>
                    </div>
                    <p>{module.subtitle}</p>
                    <div className="mission-footer">
                      <span>{module.duration}</span>
                      <span>+{module.xp} XP</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel right-panel">
            <div className="panel-header">
              <h3>Mission du jour</h3>
              <span>Live</span>
            </div>

            <div className="daily-quest">
              <div className="quest-card active-highlight">
                <p className="eyebrow muted">Cours actuel</p>
                <h4>{activeModule.title}</h4>
                <p>{activeModule.subtitle}</p>
              </div>

              <ul className="challenge-list">
                {dailyChallenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Récompenses</h3>
              <span>{badges.filter((badge) => badge.unlocked).length}/{badges.length}</span>
            </div>

            <div className="badge-grid">
              {badges.map((badge) => (
                <div key={badge.name} className={`badge ${badge.unlocked ? 'unlocked' : 'locked'}`}>
                  <span>{badge.icon}</span>
                  <strong>{badge.name}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="panel stats-panel">
            <div className="panel-header">
              <h3>Synchronisation</h3>
              <span>Temps réel</span>
            </div>

            <div className="sync-box">
              <div className="status-dot"></div>
              <div>
                <strong>Firebase connecté</strong>
                <p>Progression sync sur desktop, tablette et mobile.</p>
              </div>
            </div>

            <div className="device-list">
              <span>Desktop</span>
              <span>Tablette</span>
              <span>Mobile</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
