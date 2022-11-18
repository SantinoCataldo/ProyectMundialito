/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const TestModals = () => {
  const [showQatar, setshowQatar] = useState(false);
  const [showEcuador, setshowEcuador] = useState(false);
  const [showSenegal, setshowSenegal] = useState(false);
  const [showHolanda, setshowHolanda] = useState(false);
  const [showInglaterra, setshowInglaterra] = useState(false);
  const [showIran, setshowIran] = useState(false);
  const [showUSA, setshowUSA] = useState(false);
  const [showGales, setshowGales] = useState(false);
  const [showArgentina, setshowArgentina] = useState(false);
  const [showArabia, setshowArabia] = useState(false);
  const [showMexico, setshowMexico] = useState(false);
  const [showPolonia, setshowPolonia] = useState(false);
  const [showFrancia, setshowFrancia] = useState(false);
  const [showDinamarca, setshowDinamarca] = useState(false);
  const [showTunisia, setshowTunisia] = useState(false);
  const [showAustralia, setshowAustralia] = useState(false);
  const [showEspaña, setshowEspaña] = useState(false);
  const [showAlemania, setshowAlemania] = useState(false);
  const [showJapon, setshowCostaRica] = useState(false);
  const [showBelgica, setshowBelgica] = useState(false);
  const [showCanada, setshowCanada] = useState(false);
  const [showMarruecos, setshowMarruecos] = useState(false);
  const [showCroacia, setshowCroacia] = useState(false);
  const [showBrasil, setshowBrasil] = useState(false);
  const [showSerbia, setshowSerbia] = useState(false);
  const [showSuiza, setshowSuiza] = useState(false);
  const [showCamerun, setshowCamerun] = useState(false);
  const [showPortugal, setshowPortugal] = useState(false);
  const [showGhana, setshowGhana] = useState(false);
  const [showUruguay, setshowUruguay] = useState(false);
  const [showKorea, setshowKorea] = useState(false);

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
          <div onClick={() => setshowInglaterra(true)}>
            <img src="/img/selections/ENG.jpg" alt="" />
            <p>England</p>
          </div>
          <div onClick={() => setshowIran(true)}>
            <img src="/img/selections/IRN.jpg" alt="" />
            <p>IR Iran</p>
          </div>
          <div onClick={() => setshowUSA(true)}>
            <img src="/img/selections/USA.jpg" alt="" />
            <p>USA</p>
          </div>
          <div onClick={() => setshowGales(true)}>
            <img src="/img/selections/WAL.jpg" alt="" />
            <p>Wales</p>
          </div>
        </div>
        {/* GRUPO C */}
        <div className={styles.game_groups}>
          <h4>Grupo C</h4>
          <div onClick={() => setshowArgentina(true)}>
            <img src="/img/selections/ARG.jpg" alt="" />
            <p>Argentina</p>
          </div>
          <div onClick={() => setshowArabia(true)}>
            <img src="/img/selections/KSA.jpg" alt="" />
            <p>Saudi Arabia</p>
          </div>
          <div onClick={() => setshowMexico(true)}>
            <img src="/img/selections/MEX.jpg" alt="" />
            <p>Mexico</p>
          </div>
          <div onClick={() => setshowPolonia(true)}>
            <img src="/img/selections/POL.jpg" alt="" />
            <p>Poland</p>
          </div>
        </div>
        {/* GRUPO D */}
        <div className={styles.game_groups}>
          <h4>Grupo D</h4>
          <div onClick={() => setshowFrancia(true)}>
            <img src="/img/selections/FRA.jpg" alt="" />
            <p>France</p>
          </div>
          <div onClick={() => setshowDinamarca(true)}>
            <img src="/img/selections/DEN.jpg" alt="" />
            <p>Denmark</p>
          </div>
          <div onClick={() => setshowTunisia(true)}>
            <img src="/img/selections/TUN.jpg" alt="" />
            <p>Tunisia</p>
          </div>
          <div onClick={() => setshowAustralia(true)}>
            <img src="/img/selections/AUS.jpg" alt="" />
            <p>Australia</p>
          </div>
        </div>
        {/* GRUPO E */}
        <div className={styles.game_groups}>
          <h4>Grupo E</h4>
          <div onClick={() => setshowEspaña(true)}>
            <img src="/img/selections/ESP.jpg" alt="" />
            <p>Spain</p>
          </div>
          <div onClick={() => setshowAlemania(true)}>
            <img src="/img/selections/GER.jpg" alt="" />
            <p>Germany</p>
          </div>
          <div onClick={() => setshowJapon(true)}>
            <img src="/img/selections/JPN.jpg" alt="" />
            <p>Japan</p>
          </div>
          <div onClick={() => setshowCostaRica(true)}>
            <img src="/img/selections/CRC.jpg" alt="" />
            <p>Costa Rica</p>
          </div>
        </div>
        {/* GRUPO F */}
        <div className={styles.game_groups}>
          <h4>Grupo F</h4>
          <div onClick={() => setshowBelgica(true)}>
            <img src="/img/selections/BEL.jpg" alt="" />
            <p>Belgium</p>
          </div>
          <div onClick={() => setshowCanada(true)}>
            <img src="/img/selections/CAN.jpg" alt="" />
            <p>Canada</p>
          </div>
          <div onClick={() => setshowMarruecos(true)}>
            <img src="/img/selections/MAR.jpg" alt="" />
            <p>Morocco</p>
          </div>
          <div onClick={() => setshowCroacia(true)}>
            <img src="/img/selections/CRO.jpg" alt="" />
            <p>Croatia</p>
          </div>
        </div>
        {/* GRUPO G */}
        <div className={styles.game_groups}>
          <h4>Grupo G</h4>
          <div onClick={() => setshowBrasil(true)}>
            <img src="/img/selections/BRA.jpg" alt="" />
            <p>Brazil</p>
          </div>
          <div onClick={() => setshowSerbia(true)}>
            <img src="/img/selections/SRB.jpg" alt="" />
            <p>Serbia</p>
          </div>
          <div onClick={() => setshowSuiza(true)}>
            <img src="/img/selections/SUI.jpg" alt="" />
            <p>Switzerland</p>
          </div>
          <div onClick={() => setshowCamerun(true)}>
            <img src="/img/selections/CMR.jpg" alt="" />
            <p>Cameroon</p>
          </div>
        </div>
        {/* GRUPO H */}
        <div className={styles.game_groups}>
          <h4>Grupo H</h4>
          <div onClick={() => setshowPortugal(true)}>
            <img src="/img/selections/POR.jpg" alt="" />
            <p>Portugal</p>
          </div>
          <div onClick={() => setshowGhana(true)}>
            <img src="/img/selections/GHA.jpg" alt="" />
            <p>Ghana</p>
          </div>
          <div onClick={() => setshowUruguay(true)}>
            <img src="/img/selections/URU.jpg" alt="" />
            <p>Uruguay</p>
          </div>
          <div onClick={() => setshowKorea(true)}>
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
              <p>No posee campeonatos del mundo</p>
              <h4>Ultima Participacion</h4>
              <h5>Esta sera su primera</h5>
              <h4>Ranking fifa</h4>
              <h6>50</h6>
              <h4>DT</h4>
              <div className={styles.dt}>
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
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>44</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
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
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>18</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
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
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Tercer puesto</h5>
            <h4>Ranking fifa</h4>
            <h6>8</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
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

      {showInglaterra ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>England</h2>
            <img src="https://www.promiedos.com.ar/images/64/812.png" alt="" />
            <div className={styles.wordl}>
              <div className={styles.champions}>
                <p></p>
                <h3>1966</h3>
              </div>
            </div>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Cuartos de Final</h5>
            <h4>Ranking fifa</h4>
            <h6>5</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/ENG.jpg" alt="" />
              <h3>Gareth Southgate</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Jordan Pickford</h5>
              <h5>Nick Pope</h5>
              <h5>Aaron Ramsdale</h5>

              <h3>Defensores</h3>
              <h5>Trent Alexander-Arnold</h5>
              <h5>Conor Coady</h5>
              <h5>Eric Dier</h5>
              <h5>Harry Maguire</h5>
              <h5>Luke Shaw</h5>
              <h5>John Stones</h5>
              <h5>Kieran Trippier</h5>
              <h5>Kyle Walker</h5>
              <h5>Ben White</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Jude Bellingham</h5>
              <h5>Conor Gallagher</h5>
              <h5>Jordan Henderson</h5>
              <h5>Mason Mount</h5>
              <h5>Kalvin Phillips</h5>
              <h5>Declan Rice</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Phil Foden</h5>
              <h5>Jack Grealish</h5>
              <h5>Harry Kane</h5>
              <h5>James Maddison</h5>
              <h5>Marcus Rashford</h5>
              <h5>Bukayo Saka</h5>
              <h5>Raheem Sterling</h5>
              <h5>Callum Wilson</h5>

            </div>
          </div>
          <div className={styles.close} onClick={() => setshowInglaterra(false)}>X</div>
        </div>
      </section> : null}

      {showIran ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>IR Iran</h2>
            <img src="https://www.promiedos.com.ar/images/64/793.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>20</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/IRN.jpg" alt="" />
              <h3>Carlos Queiroz</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Alireza Beiranvand</h5>
              <h5>Amir Abedzadeh</h5>
              <h5>Hossein Hossini</h5>
              <h5>Payam Niazmand</h5>

              <h3>Mediocampistas</h3>
              <h5>Saeid Ezatolahi</h5>
              <h5>Ali Karimi</h5>
              <h5>Ahmad Nourollahi</h5>
              <h5>Saman Ghoddos</h5>
              <h5>Alireza Jahanbakhsh</h5>
              <h5>Mehdi Torabi</h5>
              <h5>Ali Gholizadeh</h5>
            </div>

            <div><h3>Defensores</h3>
              <h5>Majid Hosseini</h5>
              <h5>Hossein Kanaani</h5>
              <h5>Shoja Khalilzadeh</h5>
              <h5>Morteza Pouraliganj</h5>
              <h5>Sadegh Moharrami</h5>
              <h5>Milad Mohammadi</h5>
              <h5>Ehsan Hajsafi</h5>
              <h5>Ramin Rezaeian</h5>
              <h5>Abolfazl Jalali</h5>
              <h5>Rouzbeh Cheshmi</h5>

              <h3>Delanteros</h3>
              <h5>Sardar Azmoun</h5>
              <h5>Mehdi Taremi</h5>
              <h5>Karim Ansarifard</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowIran(false)}>X</div>
        </div>
      </section> : null}

      {showUSA ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>USA</h2>
            <img src="https://www.promiedos.com.ar/images/64/1716.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>16</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/USA.jpg" alt="" />
              <h3>Gregg Berhalter</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Ethan Horvath</h5>
              <h5>Matt Turner</h5>
              <h5>Sean Johnson</h5>

              <h3>Defensores</h3>
              <h5>Cameron Carter Vickers</h5>
              <h5>Shaq Moore</h5>
              <h5>Aaron LongYork</h5>
              <h5>Walker Zimmerman</h5>
              <h5>DeAndre Yedlin</h5>
              <h5>Sergiño Dest</h5>
              <h5>Joe Scally</h5>
              <h5>Antonee Robinson</h5>
              <h5>Tim Ream</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Tyler Adams</h5>
              <h5>Kellyn Acosta</h5>
              <h5>Weston McKennie</h5>
              <h5>Luca De la Torre</h5>
              <h5>Brenden Aaronson</h5>
              <h5>Yunus Musah</h5>
              <h5>Cristian Roldán</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Jesús Ferreira</h5>
              <h5>Jordan Morris</h5>
              <h5>Christian Pulisic</h5>
              <h5>Gio Reyna</h5>
              <h5>Josh Sargent</h5>
              <h5>Tim Weah</h5>
              <h5>Haji Wright</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowUSA(false)}>X</div>
        </div>
      </section> : null}

      {showGales ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Wales</h2>
            <img src="https://www.promiedos.com.ar/images/64/858.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2014 | Fase de grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>19</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/WAL.jpg" alt="" />
              <h3>Rob Page</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Wayne Hennessey</h5>
              <h5>Danny Ward</h5>
              <h5>Adam Davies</h5>

              <h3>Defensores</h3>
              <h5>Chris Gunter</h5>
              <h5>Tom Lockyer</h5>
              <h5>Ben Davies</h5>
              <h5>Connor Roberts</h5>
              <h5>Joe Rodon</h5>
              <h5>Neco Williams</h5>
              <h5>Ben Cabango</h5>
              <h5>Chris Mepham</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Joe Allen</h5>
              <h5>Aaron Ramsey</h5>
              <h5>Jonathan Williams</h5>
              <h5>Harry Wilson</h5>
              <h5>Joe Morrell</h5>
              <h5>Matthew Smith</h5>
              <h5>Ethan Ampadu</h5>
              <h5>Daniel James</h5>
              <h5>Dylan Levitt</h5>
              <h5>Sorba Thomas</h5>
              <h5>Rubin Colwill</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Gareth Bale</h5>
              <h5>Kieffer Moore</h5>
              <h5>Mark Harris</h5>
              <h5>Brennan Johnson</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowGales(false)}>X</div>
        </div>
      </section> : null}

      {showArgentina ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Argentina</h2>
            <img src="https://www.promiedos.com.ar/images/64/785.png" alt="" />
            <div className={styles.wordl}>
              <div className={styles.champions}>
                <p></p>
                <h3>1974</h3>
              </div>
              <div className={styles.champions}>
                <p></p>
                <h3>1986</h3>
              </div>
            </div>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Octavos de grupo</h5>
            <h4>Ranking fifa</h4>
            <h6>3</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/ARG.jpg" alt="" />
              <h3>Lionel Scaloni</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Emiliano Martínez</h5>
              <h5>Gerónimo Rulli</h5>
              <h5>Franco Armani</h5>

              <h3>Defensores</h3>
              <h5>Nahuel Molina</h5>
              <h5>Gonzalo Montiel</h5>
              <h5>Cristian Romero</h5>
              <h5>Germán Pezzella</h5>
              <h5>Nicolás Otamendi</h5>
              <h5>Lisandro Martínez</h5>
              <h5>Marcos Acuña</h5>
              <h5>Nicolás Tagliafico</h5>
              <h5>Juan Foyth</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Rodrigo De Paul</h5>
              <h5>Leandro Paredes</h5>
              <h5>Alexis Mac Allister</h5>
              <h5>Guido Rodríguez</h5>
              <h5>Alejandro Gómez</h5>
              <h5>Enzo Fernández</h5>
              <h5>Exequiel Palacios</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Ángel Di María</h5>
              <h5>Lautaro Martínez</h5>
              <h5>Julián Álvarez</h5>
              <h5>Paulo Dybala</h5>
              <h5>Nicolás González</h5>
              <h5>Joaquín Correa</h5>
              <h5>Lionel Messi</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowArgentina(false)}>X</div>
        </div>
      </section> : null}

      {showArabia ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Saudi Arabia</h2>
            <img src="https://www.promiedos.com.ar/images/64/787.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 - Fase de Grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>51</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/KSA.jpg" alt="" />
              <h3>Hervé Renard</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Mohammed Al-Owais</h5>
              <h5>Mohammed Alyami</h5>
              <h5>Nawaf Al-Aqidi</h5>

              <h3>Defensores</h3>
              <h5>Yasser Al-Shahrani</h5>
              <h5>Feras Al-Brikan</h5>
              <h5>Ali Al-Bulayhi</h5>
              <h5>Sultan Al-Ghannam</h5>
              <h5>Saul Abdulhamid</h5>
              <h5>Abdulelah Al-Amri</h5>
              <h5>Hassan Al-Tambakti</h5>
              <h5>Abdullah Madu</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Nasser Al-Dawsari</h5>
              <h5>Salman Al-Faraj</h5>
              <h5>Abdullah Otayf</h5>
              <h5>Hattan Bahbri</h5>
              <h5>Mohammed Kanno</h5>
              <h5>Abdulelah Al-Malki</h5>
              <h5>Sami Al-Najei</h5>
              <h5>Ali Al-Hassan</h5>
              <h5>Salem Al-Dawsari</h5>
              <h5>Abdulrahman Al-Aboud</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Mohammed Al-Burayk</h5>
              <h5>Fahad Al-Muwalad</h5>
              <h5>Saleh Al-Shehri</h5>
              <h5>Haitham Asiri</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowArabia(false)}>X</div>
        </div>
      </section> : null}

      {showMexico ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Mexico</h2>
            <img src="https://www.promiedos.com.ar/images/64/806.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Octavos</h5>
            <h4>Ranking fifa</h4>
            <h6>13</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/MEX.jpg" alt="" />
              <h3>Gerardo Daniel Martino</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Guillermo Ochoa</h5>
              <h5>Alfredo Talavera</h5>
              <h5>Rodolfo Cota</h5>

              <h3>Defensores</h3>
              <h5>Jorge Sánchez</h5>
              <h5>Kevin Álvarez</h5>
              <h5>Néstor Araujo</h5>
              <h5>Johan Vásquez</h5>
              <h5>Héctor Moreno</h5>
              <h5>César Montes</h5>
              <h5>Gerardo Arteaga</h5>
              <h5>Jesús Gallardo</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Andrés Guardado</h5>
              <h5>Héctor Herrera</h5>
              <h5>Carlos Rodríguez</h5>
              <h5>Erick Gutiérrez</h5>
              <h5>Luis Chávez </h5>
              <h5> Edson Álvarez</h5>
              <h5>Orbelín Pineda</h5>
              <h5>Luis Romo</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Alexis Vega</h5>
              <h5>Hirving Lozano</h5>
              <h5>Raúl Jiménez</h5>
              <h5>Roberto Alvarado</h5>
              <h5>Uriel Antuna</h5>
              <h5>Henry Martín</h5>
              <h5>Rogelio Funes Mori</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowMexico(false)}>X</div>
        </div>
      </section> : null}

      {showPolonia ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Polonia</h2>
            <img src="https://www.promiedos.com.ar/images/64/813.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Fase de Grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>26</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/POL.jpg" alt="" />
              <h3>Czesław Michniewicz</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Wojciech Szczesny</h5>
              <h5>Bartlomiej Dragowski</h5>
              <h5>Lukasz Skorupski</h5>

              <h3>Defensores</h3>
              <h5>Jan Bednarek</h5>
              <h5>Bartosz Bereszynski</h5>
              <h5>Matty Cash</h5>
              <h5>Kamil Glik</h5>
              <h5>Robert Gumny</h5>
              <h5>Jakub Kiwior</h5>
              <h5>Artur Jędrzejczyk</h5>
              <h5>Nicola Zalewski</h5>
              <h5>Mateusz Wieteska</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Grzegorz Krychowiak </h5>
              <h5>Kamil Grosicki</h5>
              <h5>Przemyslaw Frankowski </h5>
              <h5>Jakub Kaminski</h5>
              <h5>Krystian Bielik</h5>
              <h5>Michał Skóraś</h5>
              <h5>Sebastian Szymanski</h5>
              <h5>Szymon Zurkowski</h5>
              <h5>Piotr Zielinski</h5>
              <h5>Szymon Żurkowski</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Robert Lewandowski</h5>
              <h5>Arkadiusz Milik</h5>
              <h5>Krzysztof Piatek</h5>
              <h5>Karol Swiderski</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowPolonia(false)}>X</div>
        </div>
      </section> : null}

      {showFrancia ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>France</h2>
            <img src="https://www.promiedos.com.ar/images/64/794.png" alt="" />
            <div className={styles.wordl}>
              <div className={styles.champions}>
                <p></p>
                <h3>1998</h3>
              </div>
              <div className={styles.champions}>
                <p></p>
                <h3>2018</h3>
              </div>
            </div>
            <h4>Ultima Participacion</h4>
            <h5>2018 -Campeón</h5>
            <h4>Ranking fifa</h4>
            <h6>4</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/FRA.jpg" alt="" />
              <h3>Didier Deschamps</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Matt Ryan</h5>
              <h5>Andrew Redmayne</h5>
              <h5>Danny Vukovic</h5>

              <h3>Defensores</h3>
              <h5>Lucas Hernandez</h5>
              <h5>Théo Hernandez</h5>
              <h5>Axel Disasi</h5>
              <h5>Ibrahima Konaté</h5>
              <h5>Jules Koundé</h5>
              <h5>Benjamin Pavard</h5>
              <h5>William Saliba</h5>
              <h5>Dayot Upamecano</h5>
              <h5>Raphaël Varane</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Eduardo Camavinga</h5>
              <h5>Youssouf Fofana</h5>
              <h5>Mattéo Guendouzi</h5>
              <h5>Adrien Rabiot</h5>
              <h5>Aurélien Tchouaméni</h5>
              <h5>Jordan Veretout</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Karim Benzema</h5>
              <h5>Kingsley Coman</h5>
              <h5>Ousmane Dembélé</h5>
              <h5>Olivier Giroud</h5>
              <h5>Antoine Griezmann</h5>
              <h5>Kylian Mbappé</h5>
              <h5>Christopher Nkunku</h5>
              <h5>Marcush Thuram</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowFrancia(false)}>X</div>
        </div>
      </section> : null}

      {showDinamarca ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Denmark</h2>
            <img src="https://www.promiedos.com.ar/images/64/797.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 - Octavos de Final</h5>
            <h4>Ranking fifa</h4>
            <h6>10</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/DEN.jpg" alt="" />
              <h3>Kasper Hjulmand</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Kasper Schmeichel</h5>
              <h5>Frederik Ronnow</h5>
              <h5>Oliver Christensen</h5>

              <h3>Defensores</h3>
              <h5>Simon Kjær</h5>
              <h5>Joakim Mæhle</h5>
              <h5>Rasmus Nissen</h5>
              <h5>Daniel Wass</h5>
              <h5>Jens Stryger Larsen</h5>
              <h5>Andreas Christensen</h5>
              <h5>Joachim Andersen</h5>
              <h5>Victor Nelsson</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Alexander Bah</h5>
              <h5>Mathias Jensen</h5>
              <h5>Pierre Emile Højbjerg</h5>
              <h5>Thomas Delaney</h5>
              <h5>Christian Eriksen Nørgaard</h5>
              <h5>Andreas Skov Olsen</h5>
              <h5>Mikkel Damsgaard</h5>
              <h5>Jesper Lindstrøm</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Kasper Dolberg</h5>
              <h5>Robert Skov</h5>
              <h5>Andreas Cornelius</h5>
              <h5>Jonas Wind</h5>
              <h5>Martin Braithwaite</h5>
              <h5>Yussuf Yurary Poulsen</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowDinamarca(false)}>X</div>
        </div>
      </section> : null}

      {showTunisia ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Tunisia</h2>
            <img src="https://www.promiedos.com.ar/images/64/811.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 - Fase de Grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>30</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/TUN.jpg" alt="" />
              <h3>Jalel Kadri</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Alphonse Areola</h5>
              <h5>Hugo Lloris</h5>
              <h5>Steve Mandanda</h5>

              <h3>Defensores</h3>
              <h5>Lucas Hernandez</h5>
              <h5>Théo Hernandez </h5>
              <h5>Axel Disasi</h5>
              <h5>Ibrahima Konaté</h5>
              <h5>Jules Koundé </h5>
              <h5>Benjamin Pavard</h5>
              <h5>William Saliba</h5>
              <h5>Dayot Upamecano</h5>
              <h5>Raphaël Varane</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Eduardo Camavinga</h5>
              <h5>Youssouf Fofana</h5>
              <h5>Mattéo Guendouzi</h5>
              <h5>Adrien Rabiot</h5>
              <h5>Aurélien Tchouaméni</h5>
              <h5>Jordan Veretout</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Karim Benzema</h5>
              <h5>Kingsley Coman</h5>
              <h5>Ousmane Dembélé</h5>
              <h5>Olivier Giroud</h5>
              <h5>Antoine Griezmann</h5>
              <h5>Kylian Mbappé</h5>
              <h5>Christopher Nkunku</h5>
              <h5>Marcush Thuram</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowTunisia(false)}>X</div>
        </div>
      </section> : null}

      {showAustralia ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Australia</h2>
            <img src="https://www.promiedos.com.ar/images/64/795.png" alt="" />
            <p>No posee campeonatos del mundo</p>
            <h4>Ultima Participacion</h4>
            <h5>2018 - Fase de Grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>38</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/AUS.jpg" alt="" />
              <h3>Graham Arnold</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Matt Ryan</h5>
              <h5>Andrew Redmayne</h5>
              <h5>Danny Vukovic</h5>

              <h3>Defensores</h3>
              <h5>Milos Degenek</h5>
              <h5>Aziz Behich</h5>
              <h5>Joel King</h5>
              <h5>Nathaniel Atkinson</h5>
              <h5>Kye Rowles</h5>
              <h5>Fran Karacic</h5>
              <h5>HarrySouttar</h5>
              <h5>Bailey Wright</h5>
              <h5>Thomas Deng</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Aaron Mooy</h5>
              <h5>Jackson Irvine</h5>
              <h5>Ajdin Hrustic</h5>
              <h5>Keanu Baccus</h5>
              <h5>Cameron Devlin</h5>
              <h5>Riley McGree</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Awer Mabil</h5>
              <h5>Mathew Leckie</h5>
              <h5>Martin Boyle</h5>
              <h5>Jamie Maclaren</h5>
              <h5>Jason Cummings</h5>
              <h5>Garang Kuol</h5>
              <h5>Mitchell Duke</h5>
              <h5>Craig Goodwin</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowAustralia(false)}>X</div>
        </div>
      </section> : null}

      {showEspaña ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Spain</h2>
            <img src="https://www.promiedos.com.ar/images/64/791.png" alt="" />
            <div className={styles.wordl}>
              <div className={styles.champions}>
                <p></p>
                <h3>2010</h3>
              </div>
            </div>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Octavos de Final</h5>
            <h4>Ranking fifa</h4>
            <h6>7</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/ESP.jpg" alt="" />
              <h3>Luis Enrique Martínez García</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Unai Simón</h5>
              <h5>Robert Sánchez</h5>
              <h5>David Raya</h5>

              <h3>Defensores</h3>
              <h5>Dani Carvajal</h5>
              <h5>César Azpilicueta</h5>
              <h5> Eric García</h5>
              <h5>Hugo Guillamón</h5>
              <h5>Pau Torres</h5>
              <h5>Aymeric Laporte</h5>
              <h5>Jordi Alba</h5>
              <h5>José Gayá</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Sergio Busquets</h5>
              <h5>Rodrigo</h5>
              <h5>Gavi</h5>
              <h5>Carlos Soler</h5>
              <h5>Marcos Llorente</h5>
              <h5>Pedri</h5>
              <h5>Koke</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Ferrán Torres</h5>
              <h5>Nico Williams</h5>
              <h5>Yeremy Pino</h5>
              <h5>Álvaro Morata</h5>
              <h5>Marco Asensio</h5>
              <h5>Pablo Sarabia</h5>
              <h5>Dani Olmo</h5>
              <h5>Ansu Fati</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowEspaña(false)}>X</div>
        </div>
      </section> : null}

      {showAlemania ? <section className={styles.teams}>
        <div className={styles.teams_box}>
          <div className={styles.teams_informations}>
            <h2>Germany</h2>
            <img src="https://www.promiedos.com.ar/images/64/805.png" alt="" />
            <div className={styles.wordl}>
              <div className={styles.champions}>
                <p></p>
                <h3>1954</h3>
              </div>
              <div className={styles.champions}>
                <p></p>
                <h3>1970</h3>
              </div>
              <div className={styles.champions}>
                <p></p>
                <h3>1990</h3>
              </div>
              <div className={styles.champions}>
                <p></p>
                <h3>2014</h3>
              </div>
            </div>
            <h4>Ultima Participacion</h4>
            <h5>2018 | Fase de Grupos</h5>
            <h4>Ranking fifa</h4>
            <h6>11</h6>
            <h4>DT</h4>
            <div className={styles.dt}>
              <img src="/img/selections/GER.jpg" alt="" />
              <h3>Hansi Flick</h3>
            </div>
          </div>
          <div className={styles.teams_players}>
            <div>
              <h4>Convocados</h4>
              <h3>Arqueros</h3>
              <h5>Manuel Neuer</h5>
              <h5>Marc-André ter Stegen</h5>
              <h5>Kevin Trapp</h5>

              <h3>Defensores</h3>
              <h5>Thilo Kehrer</h5>
              <h5>David Raum</h5>
              <h5>Antonio Rüdiger</h5>
              <h5>Niklas Süle</h5>
              <h5>Matthias Ginter</h5>
              <h5>Nico Schlotterbeck</h5>
              <h5>Lukas Klostermann</h5>
              <h5>Christian Günter</h5>
              <h5>Armel Bella-Kotchap</h5>
            </div>
            <div>
              <h3>Mediocampistas</h3>
              <h5>Joshua Kimmich</h5>
              <h5>Leon Goretzka</h5>
              <h5>İlkay Gündogan</h5>
              <h5>Jamal Musiala</h5>
              <h5>Jonas Hofmann</h5>
              <h5>Julian Brandt</h5>
              <h5>Mario Götze</h5>
            </div>
            <div>
              <h3>Delanteros</h3>
              <h5>Kai Havertz</h5>
              <h5>Karim Adeyemi</h5>
              <h5>Niclas Füllkrug</h5>
              <h5>Youssoufa Moukoko</h5>
              <h5>Serge Gnabry</h5>
              <h5>Leroy Sané</h5>
              <h5>Thomas Müller</h5>
            </div>
          </div>
          <div className={styles.close} onClick={() => setshowAlemania(false)}>X</div>
        </div>
      </section> : null}

    </section>
  )
}
export default TestModals;