import React, { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import History from '../History/History';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import styles from './Page.css';

function Page() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <Header/>
            <Hero/>
            <div className={styles.content}>
                <Intro/>
                <History/>
                <Contact/>
                {/*
                <div className={styles['container--contents']}>
                    <h1>Hello world! Count: {count}</h1>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div> */}
            </div>
            <Footer/>
        </div>
    );
}

export default Page;
