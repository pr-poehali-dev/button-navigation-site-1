import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Forms() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="inner-page forms-page">
      <div className="noise-overlay" />
      <div className="grid-bg" />
      <div className={`inner-content ${visible ? "is-visible" : ""}`}>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← НАЗАД
        </button>
        <div className="page-num-tag" style={{ "--tag-color": "#7C6A9E" } as React.CSSProperties}>04</div>
        <h2 className="inner-title" style={{ "--tag-color": "#7C6A9E" } as React.CSSProperties}>АНКЕТЫ</h2>
        <div className="content-block">
          <p className="content-placeholder">Здесь появятся анкеты для вступления. Напишите мне, что нужно добавить — и я заполню этот раздел.</p>
        </div>
      </div>
    </div>
  );
}