import React, { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import styles from './Page.css';

function Page() {
    const strings = {
        headingGlobal: 'GitHub Static Site Template',
        subheadingGlobal: 'A React-based template for GitHub Pages. Start editing away!'
    };

    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <Header/>
            <Hero/>
            <div className={styles.content}>
                <Intro/>
                {/* <header className={styles.titles}>
                    <h1 className={styles['heading--titles']}>{strings.headingGlobal}</h1>
                    <h3 className={styles['subheading--titles']}>{strings.subheadingGlobal}</h3>
                </header>
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
