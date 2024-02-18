import Form from "../../components/form/Form";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
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

      <Form />

      <section className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11190.902728408879!2d9.1564425!3d45.4753296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c147aa41b7cf%3A0xfbbcb44d7ec5c615!2sArco%20della%20Pace!5e0!3m2!1sru!2sua!4v1708285448969!5m2!1sru!2sua"
          width="800"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
