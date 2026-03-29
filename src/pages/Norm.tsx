import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Norm() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="inner-page norm-page">
      <div className="noise-overlay" />
      <div className="grid-bg" />
      <div className={`inner-content ${visible ? "is-visible" : ""}`}>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← НАЗАД
        </button>
        <div className="page-num-tag" style={{ "--tag-color": "#3AFFCB" } as React.CSSProperties}>03</div>
        <h2 className="inner-title" style={{ "--tag-color": "#3AFFCB" } as React.CSSProperties}>НОРМА</h2>
        <div className="content-block">
          <p className="content-placeholder">Здесь появятся стандарты поведения. Напишите мне, что нужно добавить — и я заполню этот раздел.</p>
        </div>
      </div>
    </div>
  );
}
