/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Timer from '../components/timer2';
import Nav from '../components/nav';
import { MongoClient } from 'mongodb';

import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const accountsCollection = db.collection('accounts');

    const accounts = await accountsCollection.countDocuments();
    client.close();

    return {
        props: {
            accounts: accounts,
        },
        revalidate: 1,
    };
}

export default function Home({accounts}) {
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
                <Nav />

                <section className={styles.cont}>
                    <div className={styles.video}>
                        <video src="/img/qatar.mp4" loop autoPlay muted></video>
                    </div>
                    <Timer />
                    <div className={styles.redirect}>
                        <h1>World Proyect</h1>
                        <a href="#info"><button className={styles.button}>Mas información</button></a>
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
                        <p>{accounts}</p>
                    </div>
                    <img src="/img/marado.jpg" alt="maradona" />
                </section>
        </div>
    )
}