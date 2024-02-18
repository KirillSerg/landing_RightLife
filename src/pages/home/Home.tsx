import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <div className={styles.title}>
          <h1>Find your home in Italy</h1>
          <p>Search over 40,000 properties for sale</p>
        </div>
      </section>

      <section className={styles.advantages}>
        <h1>
          Acquistare un immobile in Italia <br />è un buon investimento?
        </h1>
        <div className={styles.info}>
          <div className={styles.img} />
          <p>
            L'Italia attira da tempo gli investitori stranieri in cerca di una
            seconda casa:{" "}
            <b>
              pensa alle ville di campagna, agli appartamenti fronte mare e alle
              pittoresche
            </b>{" "}
            case a schiera e avrai un'idea solo di una manciata di proprietà
            disponibili su Gate-away.com. Dai un'occhiata alla pagina Proprietà
            insolite per una casa unica, con opzioni tra cui castelli, mulini e
            persino una chiesa o un monastero! <br />
            <br />
            Poiché l’Italia è facilmente accessibile, con aeroporti e porti che
            servono destinazioni europee e internazionali, è anche un’ottima
            base per gli acquirenti che desiderano esplorare altri paesi
            europei. Attira visitatori da tutto il mondo con il suo ricco
            patrimonio culturale e artistico, panorami spettacolari, coste
            meravigliose e chi potrebbe dimenticare quel cibo deliziosamente
            fresco e il buon vino? <br />
            <br /> Mentre località popolari come <b>Roma</b>, <b>Milano</b> e
            <b>Firenze</b> potrebbero avere un prezzo più alto, ci sono anche
            opportunità nei mercati emergenti come la Sardegna e la Calabria, e
            con la domanda di immobili in Italia in aumento, è il momento ideale
            per cogliere al volo fare un investimento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
