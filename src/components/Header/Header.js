import React from 'react';
import styles from './Header.css'

const Header = () => {

    return (
        <header className={styles.header}>
          <div className={styles.content}>
            <div className={styles.logo}>北京东方华盛</div>
          </div>
        </header>
    );
};

export default Header;
