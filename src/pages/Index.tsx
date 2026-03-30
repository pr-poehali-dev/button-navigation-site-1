import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "rules",
    title: "ПРАВИЛА",
    subtitle: "Основа всего",
    path: "/rules",
    num: "01",
    color: "#C2783E",
    clip: "polygon(0 0, 100% 0, 100% 85%, 88% 100%, 0 100%)",
  },
  {
    id: "bans",
    title: "ЗАПРЕТЫ",
    subtitle: "Что недопустимо",
    path: "/bans",
    num: "02",
    color: "#B45454",
    clip: "polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
  },
  {
    id: "norm",
    title: "НОРМА",
    subtitle: "Минимум постов для участия",
    path: "/norm",
    num: "03",
    color: "#D97706",
    clip: "polygon(0 0, 88% 0, 100% 15%, 100% 100%, 0 100%)",
  },
  {
    id: "forms",
    title: "АНКЕТЫ",
    subtitle: "Вступить в сообщество",
    path: "/forms",
    num: "04",
    color: "#7C6A9E",
    clip: "polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 85%)",
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="community-home">
      <div className="noise-overlay" />
      <div className="grid-bg" />

      <div className={`hero-content ${visible ? "is-visible" : ""}`}>
        <div className="community-label">◈ СООБЩЕСТВО ◈</div>
        <h1 className="community-title">
          <span className="title-line">ДОБРО</span>
          <span className="title-line accent-stroke">ПОЖАЛО</span>
          <span className="title-line">ВАТЬ</span>
        </h1>
        <p className="community-desc">Выберите раздел</p>
        <div className="cleanup-badge">🕛 Чистка 1 числа в 12:00 по МСК</div>
      </div>

      <div className={`sections-grid ${visible ? "is-visible" : ""}`}>
        {sections.map((s, i) => (
          <button
            key={s.id}
            className={`section-btn ${hovered === s.id ? "is-hovered" : ""}`}
            style={
              {
                "--btn-color": s.color,
                "--delay": `${i * 0.12 + 0.4}s`,
                clipPath: s.clip,
              } as React.CSSProperties
            }
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(s.path)}
          >
            <span className="btn-num">{s.num}</span>
            <span className="btn-main">
              <span className="btn-title">{s.title}</span>
              <span className="btn-subtitle">{s.subtitle}</span>
            </span>
            <span className="btn-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}