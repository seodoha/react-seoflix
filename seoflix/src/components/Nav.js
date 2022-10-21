import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav() {
    return (
        <div>
            <nav className={styles.header}>
                <h1 className={styles.logo}>
                    <Link to="/react-seoflix">
                        <strong>SEOFLIX</strong>
                        <strong>SEOFLIX</strong>
                    </Link>
                </h1>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;