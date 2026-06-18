import Image from "next/image";
import { invitation } from "../config";
import { Confetti } from "./Confetti";

export function Invitation() {
  return (
    <div className="invitation-page">
      <Confetti />

      <div className="floating-shapes" aria-hidden="true">
        <span className="shape shape-1">🎈</span>
        <span className="shape shape-2">⭐</span>
        <span className="shape shape-3">🎉</span>
        <span className="shape shape-4">🎂</span>
        <span className="shape shape-5">✨</span>
        <span className="shape shape-6">🎀</span>
      </div>

      <main className="invitation-card">
        <header className="animate-fade-up">
          <p className="invitation-badge">Tu esi aicināts!</p>
          <h1 className="invitation-title">
            {invitation.childName} svin{" "}
            <span className="age-highlight">
              {invitation.age}. dzimšanas dienu!
            </span>
          </h1>
        </header>

        <div className="photo-frame animate-fade-up animate-delay-1">
          <div className="photo-ring">
            <Image
              src={invitation.image}
              alt={`${invitation.childName} foto`}
              width={280}
              height={280}
              className="child-photo"
              priority
            />
          </div>
        </div>

        <section className="details animate-fade-up animate-delay-2">
          <div className="detail-card">
            <p className="detail-label">Kad?</p>{" "}
            <span className="detail-icon">📅</span>
            <p className="detail-value">{invitation.date} {invitation.time}</p>
           
          </div>

          <div className="detail-card">
            <p className="detail-label">Kur?</p>
            <div className="venue-logo-wrap">
              <Image
                src={invitation.venueLogo}
                alt="Marymaris logo"
                width={140}
                height={70}
                className="venue-logo"
              />
            </div>
            <p className="detail-sub">{invitation.address}</p>
          </div>
        </section>

        <p className="invitation-message animate-fade-up animate-delay-3">
          {invitation.message}
        </p>

        <a
          href={invitation.wishlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wishlist-button animate-fade-up animate-delay-4"
        >
          <span>🎁</span>
          Skatīt dāvanu vēlmju sarakstu
        </a>

        <footer className="invitation-footer animate-fade-up animate-delay-5">
          Gaidīsim Tevi ar smaidu! 💖
        </footer>
      </main>
    </div>
  );
}
