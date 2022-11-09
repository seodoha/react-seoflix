import { useState } from 'react';
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import { listPageReLoading, focusNav } from "../atom/Atoms";

import styles from '../assets/css/module/Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    const [search, setSearch] = useState('');
    const pageReLoading = useSetRecoilState(listPageReLoading);
    const [focusPath, setFocusPath] = useRecoilState(focusNav);

    const searchClick = (event) => {
        setSearch(event.target.value)
    }
    const optionOnClick = () => {
        pageReLoading(true);
    }

    return (
        <div>
            <nav className={styles.header}>
                <h1 className={styles.logo}>
                    <Link to="/" onClick={() => setFocusPath("")}>
                        <strong>SEOFLIX</strong>
                        <strong>SEOFLIX</strong>
                    </Link>
                </h1>
                <ul className={styles.nav__list}>
                    {
                        Group_key_arr.map((key)=>{
                            return (
                                <li key={key}>
                                    <Link
                                        to={`/${Group_obj[key]}/1`}
                                        onClick={focusPath !== Group_obj[key] ? optionOnClick : null}
                                        style={focusPath !== Group_obj[key] ? null : {
                                            color: "#e50914"
                                        }}
                                    >{key}</Link>
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