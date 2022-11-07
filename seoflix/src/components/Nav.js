import { useState } from 'react';
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";

import styles from './Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/**
 * Header Navigation
 */
function Nav() {
    const [search, setSearch] = useState(null);
    const searchClick = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav className={styles.header}>
                <h1 className={styles.logo}>
                    <Link to="/">
                        <strong>SEOFLIX</strong>
                        <strong>SEOFLIX</strong>
                    </Link>
                </h1>
                <ul className={styles.nav__list}>
                    {
                        Group_key_arr.map((key)=>{
                            return (
                                <li key={key}>
                                    <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className={styles.head__search}>
                    <form>
                        <input
                            type="text"
                            placeholder='search movie'
                            value={search}
                            onChange={searchClick}
                        />
                        <Link to={`/search/${search}`}>
                            <button>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    style={{
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        color: "#fff",
                                    }}
                                />
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Nav;