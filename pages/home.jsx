/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {

    // SCROLL //

    const [header, setHeader] = useState(false);

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeHeader);
    }, []);

    //RELOJ//

    const [TimerDays, setTimerDays] = useState('00');
    const [TimerHours, setTimerHours] = useState('00');
    const [TimerMinutes, setTimerMinutes] = useState('00');

    let interval = useRef();

    const starTimer = () => {
        const countDownDate = new Date('Nov 20 2022 13:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            if (distance <= 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
            };
        }, 1000);
    };

    useEffect(() => {
        starTimer();
        return () => {
            clearInterval(interval)
        }
    });

    return (
        <div className={styles.container}>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Home | World Proyect</title>
                <meta name="description" content="Generated by World Proyect" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.body}>
                <header className={header ? styles.header2 : styles.header}>
                    <div>
                        <div className={styles.logo1}></div>
                        <h4>World Proyect</h4>
                    </div>
                    <div>
                        <a href="#info">Infromacion</a>
                        <Image src="/img/rombo.jpg" alt="Rombo" width={8} height={8} />
                        <a href="#groups">Fase de Grupos</a>
                        <Image src="/img/rombo.jpg" alt="Rombo" width={8} height={8} />
                        <a href="#people">Personas</a>
                    </div>
                    <a href="#"><button>Iniciar Sesion</button></a>
                </header>

                <section className={styles.cont}>
                    <div className={styles.video}>
                        <video src="/img/qatar.mp4" loop autoPlay muted></video>
                    </div>
                    <div className={styles.timer2}>
                        <div>
                            <h4>{TimerDays}</h4>
                            <p>Dias</p>
                        </div>
                        <Image src="/img/rombo.jpg" alt="Rombo" width={8} height={8} />
                        <div>
                            <h4>{TimerHours}</h4>
                            <p>Horas</p>
                        </div>
                        <Image src="/img/rombo.jpg" alt="Rombo" width={8} height={8} />
                        <div>
                            <h4>{TimerMinutes}</h4>
                            <p>Min</p>
                        </div>
                    </div>
                    <div className={styles.redirect}>
                        <h1>World Proyect</h1>
                        <a href="#register"><button className={styles.button}>Registrate</button></a>
                    </div>
                </section>

                <section className={styles.informative} id="info">
                    <div>
                        <h2>Informacion</h2>
                        <p>Este trabajo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aliquid repellendus quaerat dicta doloribus quos repudiandae eos natus voluptatibus rem? Facere, quasi? Maiores fuga nemo accusamus sint commodi perferendis vitae.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nihil unde delectus dolorem quas perferendis ipsam nisi nostrum excepturi natus amet non iste, cumque est! Nam vero molestias aliquam. Quod.</p>
                    </div>
                </section>

                <section className={styles.groups} id="groups">
                    <h2>Fase De Grupos</h2>
                    <div></div>
                </section>
                <section className={styles.people} id="people">
                    <div>
                        <Image src="/img/rombo.jpg" alt="Rombo" width={16} height={16} />
                        <h2>Personas participando</h2>
                        <p>1</p>
                    </div>
                    <img src="/img/marado.jpg" alt="maradona" />
                </section>
            </section>
        </div>
    )
}