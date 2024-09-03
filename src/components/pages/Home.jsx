import styles from "../css/style.module.css";

export default function Home() {
  return (
    <body class="card" style={{ marginTop: "30px" }}>
      <h1 align="center" class="card bg-primary-subtle">
        Brian's Deployed Projects
      </h1>

      <div className={styles.main}>
        <div
          className="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://github.com/heropon1k/Refactoring">
            <strong>code-refactor</strong>
          </a>
          <img
            src="https://raw.githubusercontent.com/heropon1k/Refactor/main/assets/images/website-view.png"
            style={{ height: "100%" }}
          />
          <a href="https://github.com/heropon1k/Refactoring">Repository</a>
        </div>

        </div>
        
      
    </body>
  );
}