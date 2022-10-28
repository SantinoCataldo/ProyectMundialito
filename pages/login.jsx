/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login | World Proyect</title>
                <meta name="description" content="Generated by World Proyect" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.register} id="register">
                <div className={styles.register_container}>
                    <img src="/img/desierto.jpg" alt="" />
                    <h2>Ingreso</h2>
                    <form action="">
                        <p>Correo</p>
                        <input type="email" name="email" required />
                        <p>Contraseña</p>
                        <input type="password" name="contraseña" required />
                        <button className={styles.button}>Enviar</button>
                    </form>
                </div>
            </section>
        </div>


    )
}