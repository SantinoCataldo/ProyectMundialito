import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Footer() {
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
        <div className={styles.timer}>
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
    )
}