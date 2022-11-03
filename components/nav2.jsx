/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Nav() {
    const { data: session } = useSession();
    const { push } = useRouter();


    const handleSignOut = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/home' });
        push(data.url);
    }

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
        <header className={header ? styles.header2 : styles.header3}>
            <div>
                <div className={styles.logo1}></div>
                {session ? <div><button>{session.user.name}</button></div> : <div></div>}
                <h4>World Proyect</h4>
            </div>
            <div>
                <a href="#groups">Fase de Grupos</a>
                <Image src="/img/rombo.jpg" alt="Rombo" width={8} height={8} />
                <a href="#playoffs">Eliminatorias</a>
            </div>
            {session ? <button onClick={handleSignOut}>Cerrar Sesion</button> : <button>Iniciar Sesion</button>}
        </header>
    )

}
