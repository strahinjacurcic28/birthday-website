import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "25122023";

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Hmm... that's not it ❤️");
    }
  };

  if (!unlocked) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="heart">❤️</div>

          <h1>Something special awaits you...</h1>

          <p>You need a little secret to get in.</p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter the secret..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Enter ❤️</button>
          </form>

          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <main className="birthday-page">
      <section className="hero">
        <p className="small-title">For the most special person</p>

        <h1>
          Srećan rođendan,
          <br />
          Mojoj Bebici ❤️
        </h1>

        <p className="subtitle">I made something just for you.</p>

        <button
          className="scroll-button"
          onClick={() =>
            document
              .getElementById("message")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          There's something I want to tell you ↓
        </button>
      </section>

      <section id="message" className="message-section">
        <p className="section-label">A little letter</p>

        <h2>To my favorite person</h2>

        <div className="letter">
          <p>Srećan rođendan ljubavi moja. ❤️</p>

          <p>
            Kao po dogovoru, drugi deo tvog poklona je zahtevao moju kreativnost
            i trud. Iz razloga sto si štreber sa SITa, odlučio sam da moj trud
            ode u ovo.
          </p>

          <p>Sad imaš parče interneta koje je samo za tebe.</p>

          <p>
            Hvala ti za sve trenutke koje smo delili, lepe ali i one ružne,
            srećne ali i one tužne i za sve one između.
          </p>

          <p>
            Nadam se da će ti ova predstojeća godina doneti sve ono što
            zaslužuješ.
          </p>

          <p>Volim te. ❤️</p>
        </div>
      </section>

      <section className="photos-section">
        <p className="section-label">Us</p>

        <h2>Neke naše lepe fotografije!</h2>

        <div className="photo-grid">
          <img src="/images/photo1.jpg" alt="Memory 1" />

          <img src="/images/photo2.jpg" alt="Memory 2" />

          <img src="/images/photo3.jpg" alt="Memory 3" />

          <img src="/images/photo4.jpg" alt="Memory 4" />
        </div>
      </section>

      <section className="memories-section">
        <p className="section-label">Our story</p>

        <h2>Little moments I'll never forget</h2>

        <div className="memory">
          <span>01</span>

          <div>
            <h3>Our first kiss</h3>

            <p>
              Voleo bih da postoji mnogo lepša priča iza ovoga, iz tog razloga
              ću je preskočiti.
            </p>
          </div>
        </div>

        <div className="memory">
          <span>02</span>

          <div>
            <h3>The Awkward Phase..</h3>

            <p>
              Nikada neću zaboraviti kako je bilo čudno i neprijatno kada ste
              Mare i ti došli kod nas (Brale, Blagoje i ja) u stan i onda nismo
              znali kako da se pozdravimo pri dolasku a ni odlasku.
            </p>
          </div>
        </div>

        <div className="memory">
          <span>03</span>

          <div>
            <h3>Our first trip</h3>

            <p>
              Petrovac na Moru, Crna Gora. <br />
              Putovanje na kom sam shvatio koliko mi je zapravo lepo sa tobom i
              putovanje na kom sam se zaljubio u tebe.
            </p>
          </div>
        </div>

        <div className="memory">
          <span>04</span>

          <div>
            <h3>And many more...</h3>

            <p>
              Nadam se da je ovo tek neki početak naših zajedničkih trenutaka i
              priča. Nadam se da će nam ovo putovanje na kom smo sada nadmašiti
              sva prethodna kao i da će sledeće nadmašiti ovo.
            </p>
          </div>
        </div>
      </section>

      <section className="surprise-section">
        <p className="section-label">One last thing...</p>

        <h2>I have a little surprise for you 🎁</h2>

        <button
          onClick={() => {
            document
              .getElementById("final")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Open it ❤️
        </button>
      </section>

      <section id="final" className="final-section">
        {" "}
        <div className="final-heart">❤️</div>{" "}
        <h2>
          {" "}
          Happy Birthday, <br /> Girly.{" "}
        </h2>{" "}
        <p>
          {" "}
          <br />
          Ne želim da zaboravimo na dan kada si došla <br/> da raskinemo, stoga ovaj citat.{" "}
        </p>{" "}
        <blockquote className="birthday-quote">
          {" "}
          "If you want to experience love, then you have to be ready for pain. <br />
          One doesn't come without the other. If I didn't love you, I wouldn't <br />
          have to worry about losing you. If you want laughter, expect tears."{" "}
          <cite>— Harlan Coben</cite>{" "}
        </blockquote>{" "}
        <p className="final-line"> Volim te 760! <br/> Zauvek. </p>{" "}
      </section>
    </main>
  );
}

export default App;
