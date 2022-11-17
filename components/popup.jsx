/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setSecondShowModal] = useState(false);

  return (
    <div className={styles.alitaputo}>
      <div>
        <div onClick={() => setShowModal(true)}>Abrir Primer modal </div>
        <button type='button' onClick={() => setSecondShowModal(true)}>Abrir Segundo modal </button>
      </div>
      {showModal ? (
        <section className={styles.teams}>
        <div className={styles.teams_box}>
            <div className={styles.teams_informations}>
                <h2>Qatar</h2>
                <img src="https://www.promiedos.com.ar/images/64/894.png" alt="" />
                <p>Sin copas</p>
                <h4>Ultima Participacion</h4>
                <h5>Esta sera su primera</h5>
                <h4>Ranking fifa</h4>
                <h6>50</h6>
                <h4>DT</h4>
                <div>
                    <img src="/img/selections/QAT.jpg" alt="" />
                    <h3>Félix Sánchez Bas</h3>
                </div>
            </div>
            <div className={styles.teams_players}>
                <div>
                    <h4>Convocados</h4>
                    <h3>Arqueros</h3>
                    <h5>Saad Al Sheeb</h5>
                    <h5>Meshaal Barsham</h5>
                    <h5>Yousuf Hassan</h5>

                    <h3>Defensores</h3>
                    <h5>Pedro Miguel</h5>
                    <h5>Musaab Khidir</h5>
                    <h5>Tarek Salman</h5>
                    <h5>Bassam Al Rawi</h5>
                    <h5>Khoukhi Boualem</h5>
                    <h5>AbdelKarim Hassan</h5>
                </div>
                <div>
                    <h3>Mediocampistas</h3>
                    <h5>Ismaeel Mohammad</h5>
                    <h5>Hammam Al Amin</h5>
                    <h5>Jassim Jabir</h5>
                    <h5>Ali Asad</h5>
                    <h5>Mohammed Waad</h5>
                    <h5>Salem Al- Hajri</h5>
                    <h5>Assim Madibo</h5>
                    <h5>Mustafa Mashaal</h5>
                </div>
                <div>   
                    <h3>Delanteros</h3>
                    <h5>Karim Boudiaf</h5>
                    <h5>Abdulaziz Hatem</h5>
                    <h5>Naif Al-Hadhrami</h5>
                    <h5>Hassan Al-Haidos</h5>
                    <h5>Akram Afif</h5>
                    <h5>Almoez Ali</h5>
                    <h5>Mohammed Muntari</h5>
                    <h5>Ahmed Alaa</h5>
                    <h5>Khalid Muneer</h5>
                </div>
            </div>
            <button type='button' onClick={()=> setShowModal(false)}>Close</button>
        </div>
    </section>
      ) : null}
      {showSecondModal ? (<div>Aca va lo que tenes que poner <button type='button' onClick={() => setSecondShowModal(false)}>Close</button></div>) : null}
    </div>
  )
}
export default TestModals;