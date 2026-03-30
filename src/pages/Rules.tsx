import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const rules = [
  {
    num: "01",
    title: "Оскорбления участников / админов / совладельца / владельца",
    body: (
      <>
        <p>
          Если вы в шутку оскорбляете человека — пишите это в&nbsp;«»&nbsp;/&nbsp;()&nbsp;/
          помечайте смайликом или словом в конце.
        </p>
        <div className="rule-sub">
          <p>Пример: <em>«Иди нахуй»</em> / <em>(шлюха)</em> / <em>пидорас 😘</em> / <em>уёбище (шутка)</em></p>
        </div>
      </>
    ),
  },
  {
    num: "02",
    title: "Ссоры",
    body: (
      <>
        <p>Если у вас возникли разногласия с членами группы и это перерастает в ссору:</p>
        <div className="rule-sub">
          <p>a. Сообщите владельцу / совладельцу — они разберутся.</p>
          <p>b. Решайте проблему в личных сообщениях, не вынося в общий чат.</p>
          <p>c. Если видите ссору двух участников — не вмешивайтесь самостоятельно, сообщите владельцу / совладельцу. Иначе накажут всех.</p>
        </div>
      </>
    ),
  },
  {
    num: "03",
    title: "Добавление участников",
    body: (
      <p>
        Если хотите добавить кого-то — предупредите владельца / совладельца заранее.
        Они сами всё расскажут новичку.
      </p>
    ),
  },
  {
    num: "04",
    title: "Спам",
    body: (
      <p>Не более 3 стикеров подряд. Это ролевая и флуд, а не помойка.</p>
    ),
  },
  {
    num: "05",
    title: "Гуро (расчленёнка, кровь, мясо и т.д.)",
    body: (
      <>
        <p>
          Подробные описания, фотографии, видео и стикеры с гуро не приветствуются.
        </p>
        <div className="rule-sub">
          <p>Если очень нужно — пишите в общих чертах: нет ноги / руки / головы / органов, человек превратился в фарш.</p>
        </div>
      </>
    ),
  },
  {
    num: "06",
    title: "Омегавёрс",
    body: (
      <p>
        Течки, гон, омежки, альфы, беты, энигмы и т.д. — у нас это не приветствуется.
        Если это вам необходимо, просим не вступать.
      </p>
    ),
  },
  {
    num: "07",
    title: "Таймскип (Timeskip)",
    body: (
      <p>
        Если хотите перемотать время — предварительно обговорите это с участниками,
        совладельцем или владельцем.
      </p>
    ),
  },
  {
    num: "08",
    title: "Смерть / воскрешение основного персонажа",
    body: (
      <>
        <p>Не пишите «Пик убит Зонтиком» или «Клео воскресила Родефа» без согласования.</p>
        <div className="rule-sub">
          <p>Это издевательство над участниками и их персонажем.</p>
        </div>
      </>
    ),
  },
  {
    num: "09",
    title: "Политические, духовные, мировоззренческие темы",
    body: (
      <p>Подобные разговоры здесь не приветствуются.</p>
    ),
  },
  {
    num: "10",
    title: "Выход",
    body: (
      <p>
        Если нужно уйти на время / что-то не устраивает / просто устали —
        предупредите владельца / совладельца об уходе и желательно укажите причину.
      </p>
    ),
  },
  {
    num: "11",
    title: "Взятие нескольких ролей / чужого персонажа",
    body: (
      <p>Брать несколько ролей или персонажа, созданного другим участником, у нас не приветствуется.</p>
    ),
  },
];

const WARN_TEXT = "Варн → Варн → Варн → Бан";

export default function Rules() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="inner-page rules-page">
      <div className="noise-overlay" />
      <div className="grid-bg" />
      <div className={`inner-content ${visible ? "is-visible" : ""}`}>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← НАЗАД
        </button>
        <div className="page-num-tag" style={{ "--tag-color": "#C2783E" } as React.CSSProperties}>01</div>
        <h2 className="inner-title" style={{ "--tag-color": "#C2783E" } as React.CSSProperties}>ПРАВИЛА</h2>

        <div className="rules-list">
          {rules.map((r) => (
            <div className="rule-card" key={r.num}>
              <div className="rule-header">
                <span className="rule-num">{r.num}</span>
                <span className="rule-title">{r.title}</span>
              </div>
              <div className="rule-body">{r.body}</div>
              <div className="rule-warn">⚠ {WARN_TEXT}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
