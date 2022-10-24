import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
                <ul className={styles.nav__list}>
                    <li>
                        <Link to="/">High Rating</Link>
                    </li>
                    <li>
                        <Link to="/">Romance</Link>
                    </li>
                    <li>
                        <Link to="/">Horror</Link>
                    </li>
                    <li>
                        <Link to="/">Animation</Link>
                    </li>
                </ul>
                <div className={styles.head__search}>
                    <input
                        placeholder='search movie'
                    />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            color: "#fff",
                            cursor: "pointer"
                        }}
                    />
                </div>
            </nav>
        </div>
    );
}

export default Nav;