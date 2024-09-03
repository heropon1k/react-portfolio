import styles from "../css/about.module.css";

export default function About() {
  return (
    <>
      <div>
        <div>
          <div className={`${styles.section} card bg-primary-subtle`} align="center">
            <h1>
              <strong>About Me</strong>
            </h1>
            <p>
              Web developer with a psychology background specializing in
              creating intuitive and adaptable user interfaces. Earned a
              certificate in Full Stack Web Development from the University of
              Central Florida Coding Bootcamp. Attentive to detail and clarity
              are at the core of my designs and development. My strengths in
              teamwork and intuitive problem-solving are at the core of my
              ability to create effective and user-centered digital products.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <div className="card bg-primary-subtle" align="center">

          </div>
        </div>
        <div className={styles.section}>
          <div className="card bg-primary-subtle" align="center">
            <h1>
                            </h1>

          </div>
        </div>
      </div>
    </>
  );
}