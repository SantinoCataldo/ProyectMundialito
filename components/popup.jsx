/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const TestModals = () => {
  const [showQatar, setshowQatar] = useState(false);
  const [showEcuador, setshowEcuador] = useState(false);
  const [showSenegal, setshowSenegal] = useState(false);
  const [showHolanda, setshowHolanda] = useState(false);

  return (

    <section className={styles.groups}>
      <div className={styles.groups_info}>
        <h2>Informacion Sobre Equipos</h2>
        <p>Al tocar en alguna soleccion vas a poder ver la informacion de la misma, esto contara con el cuerpo tecnico, informacion sobre la seleccion, los 26 jugadores seleccionados y algunos datos especiales, en la cual vas a poder seleccionar a tu jugador favorito para poder ver sus estadisticas</p>
      </div>
      <div className={styles.game} action="">

        {/* GRUPO A */}
        <div className={styles.game_groups}>
          <h4>Grupo A</h4>
          <div onClick={() => setshowQatar(true)}>
            <img src="/img/selections/QAT.jpg" alt="" />
            <p>Qatar</p>
          </div>
          <div onClick={() => setshowEcuador(true)}>
            <img src="/img/selections/ECU.jpg" alt="" />
            <p>Ecuador</p>
          </div>
          <div onClick={() => setshowSenegal(true)}>
            <img src="/img/selections/SEN.jpg" alt="" />
            <p>Senegal</p>
          </div>
          <div onClick={() => setshowHolanda(true)}>
            <img src="/img/selections/NED.jpg" alt="" />
            <p>Netherlands</p>
          </div>
        </div>
        {/* GRUPO B */}
        <div className={styles.game_groups}>
          <h4>Grupo B</h4>
          <div>
            <img src="/img/selections/ENG.jpg" alt="" />
            <p>England</p>
          </div>
          <div>
            <img src="/img/selections/IRN.jpg" alt="" />
            <p>IR Iran</p>
          </div>
          <div>
            <img src="/img/selections/USA.jpg" alt="" />
            <p>USA</p>
          </div>
          <div>
            <img src="/img/selections/WAL.jpg" alt="" />
            <p>Wales</p>
          </div>
        </div>
        {/* GRUPO C */}
        <div className={styles.game_groups}>
          <h4>Grupo C</h4>
          <div>
            <img src="/img/selections/ARG.jpg" alt="" />
            <p>Argentina</p>
          </div>
          <div>
            <img src="/img/selections/KSA.jpg" alt="" />
            <p>Saudi Arabia</p>
          </div>
          <div>
            <img src="/img/selections/MEX.jpg" alt="" />
            <p>Mexico</p>
          </div>
          <div>
            <img src="/img/selections/POL.jpg" alt="" />
            <p>Poland</p>
          </div>
        </div>
        {/* GRUPO D */}
        <div className={styles.game_groups}>
          <h4>Grupo D</h4>
          <div>
            <img src="/img/selections/FRA.jpg" alt="" />
            <p>France</p>
          </div>
          <div>
            <img src="/img/selections/AUS.jpg" alt="" />
            <p>Denmark</p>
          </div>
          <div>
            <img src="/img/selections/DEN.jpg" alt="" />
            <p>Tunisia</p>
          </div>
          <div>
            <img src="/img/selections/TUN.jpg" alt="" />
            <p>Australia</p>
          </div>
        </div>
        {/* GRUPO E */}
        <div className={styles.game_groups}>
          <h4>Grupo E</h4>
          <div>
            <img src="/img/selections/ESP.jpg" alt="" />
            <p>Spain</p>
          </div>
          <div>
            <img src="/img/selections/GER.jpg" alt="" />
            <p>Germany</p>
          </div>
          <div>
            <img src="/img/selections/JPN.jpg" alt="" />
            <p>Japan</p>
          </div>
          <div>
            <img src="/img/selections/CRC.jpg" alt="" />
            <p>Costa Rica</p>
          </div>
        </div>
        {/* GRUPO F */}
        <div className={styles.game_groups}>
          <h4>Grupo F</h4>
          <div>
            <img src="/img/selections/BEL.jpg" alt="" />
            <p>Belgium</p>
          </div>
          <div>
            <img src="/img/selections/CAN.jpg" alt="" />
            <p>Canada</p>
          </div>
          <div>
            <img src="/img/selections/MAR.jpg" alt="" />
            <p>Morocco</p>
          </div>
          <div>
            <img src="/img/selections/CRO.jpg" alt="" />
            <p>Croatia</p>
          </div>
        </div>
        {/* GRUPO G */}
        <div className={styles.game_groups}>
          <h4>Grupo G</h4>
          <div>
            <img src="/img/selections/BRA.jpg" alt="" />
            <p>Brazil</p>
          </div>
          <div>
            <img src="/img/selections/SRB.jpg" alt="" />
            <p>Serbia</p>
          </div>
          <div>
            <img src="/img/selections/SUI.jpg" alt="" />
            <p>Switzerland</p>
          </div>
          <div>
            <img src="/img/selections/CMR.jpg" alt="" />
            <p>Cameroon</p>
          </div>
        </div>
        {/* GRUPO H */}
        <div className={styles.game_groups}>
          <h4>Grupo H</h4>
          <div>
            <img src="/img/selections/POR.jpg" alt="" />
            <p>Portugal</p>
          </div>
          <div>
            <img src="/img/selections/GHA.jpg" alt="" />
            <p>Ghana</p>
          </div>
          <div>
            <img src="/img/selections/URU.jpg" alt="" />
            <p>Uruguay</p>
          </div>
          <div>
            <img src="/img/selections/KOR.jpg" alt="" />
            <p>South Korea</p>
          </div>
        </div>
      </div>
      {showQatar ? (
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
            <div className={styles.close} onClick={() => setshowQatar(false)}>X</div>
          </div>
        </section>
      ) : null}

      {showEcuador ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Ecuador</h2>
            <img src="https://www.promiedos.com.ar/images/64/853.png" alt="" />
            <p>Sin copas</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>44</h6>
            <h4>DT</h4>
            <div>
              <img src="/img/selections/ECU.jpg" alt="" />
              <h3>Gustavo Alfaro</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5></h5>
              <h5></h5>
              <h5></h5>

              <h3>Defensores</h3>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowEcuador(false)}>X</div>
        </div>
      </section> : null}

      {showSenegal ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Senegal</h2>
            <img src="https://www.promiedos.com.ar/images/64/814.png" alt="" />
            <p>Sin copas</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>18</h6>
            <h4>DT</h4>
            <div>
              <img src="/img/selections/SEN.jpg" alt="" />
              <h3>Aliou Cissé</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Edouard Mendy</h5>
              <h5>Alfred Gomis</h5>
              <h5>Seny Dieng</h5>

              <h3>Defensores</h3>
              <h5>Kalidou Koulibaly</h5>
              <h5>Abdou Diallo</h5>
              <h5>Youssouf Sabaly</h5>
              <h5>Fodé Ballo-Touré</h5>
              <h5>Pape Abou Cisse</h5>
              <h5>Ismail Jakobs</h5>
              <h5>Formose Mendy</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Gana Gueye</h5>
              <h5>Cheikhou Kouyaté</h5>
              <h5>Nampalys Mendy</h5>
              <h5>Krepin Diatta</h5>
              <h5>Pape Gueye</h5>
              <h5>Pape Matar Sarr</h5>
              <h5>Pathé Ciss</h5>
              <h5>Moustapha Name</h5>
              <h5>Loum N Diaye</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Sadio Mané</h5>
              <h5>Ismaila Sarr</h5>
              <h5>Boulaye Dia</h5>
              <h5>Bamba Dieng</h5>
              <h5>Famara Diédhiou</h5>
              <h5>Nicolas Jackson</h5>
              <h5>Iliman Ndiaye</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowSenegal(false)}>X</div>
        </div>
      </section> : null}

      {showHolanda ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Netherlands</h2>
            <img src="https://www.promiedos.com.ar/images/64/846.png" alt="" />
            <p>Sin copas</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Tercer puesto</h5>
            <h4>Ranking fifa</h4>
            <h6>8</h6>
            <h4>DT</h4>
            <div>
              <img src="/img/selections/NED.jpg" alt="" />
              <h3>Louis van Gaal</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Justin Bijlow</h5>
              <h5>Andries Noppert</h5>
              <h5>Remko Pasveer</h5>

              <h3>Defensores</h3>
              <h5>Virgil van Dijk</h5>
              <h5>Nathan Aké</h5>
              <h5>Daley Blind</h5>
              <h5>Jurriën Timber</h5>
              <h5>Denzel Dumfries</h5>
              <h5>Stefan de Vrij</h5>
              <h5>Matthijs de Ligt</h5>
              <h5>Tyrell Malacia</h5>
              <h5>Jeremie Frimpong</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Frenkie de Jong</h5>
              <h5>Steven Berghuis</h5>
              <h5>Davy Klaasen</h5>
              <h5>Teun Koopmeiners</h5>
              <h5>Cody Gakpo</h5>
              <h5>Marten de Roon</h5>
              <h5>Kenneth Taylor</h5>
              <h5>Xavi Simons</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Memphis Depay</h5>
              <h5>Steven Bergwijn</h5>
              <h5>Vincent Janssen</h5>
              <h5>Luuk de Jong</h5>
              <h5>Noa Lang</h5>
              <h5>Wout Weghorst</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowHolanda(false)}>X</div>
        </div>
      </section> : null}

    </section>
  )
}
export default TestModals;