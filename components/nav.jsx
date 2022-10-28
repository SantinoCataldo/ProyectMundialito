import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Nav() {
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

    return (
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
    )

}
