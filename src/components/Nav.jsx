import s from "./Nav.module.css";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../Context";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = () => {

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
        setIsOpen(false);
    };

    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    const { handleBurger, handleIsAdmin, handleDark, isDark, logoutAdmin, isAdmin } = useContext(MyContext);
    const user = JSON.parse(localStorage.getItem("user"))
    const isAuth = localStorage.getItem("isAuth")

    return (
        <nav className={`${s.nav} ${show ? s.active : s.hidden}`}>
            <div className={s.block}>

                <img
                    className={s.logo}
                    src="/Symbol.svg"
                    alt="logo"
                />

                <div className={s.links}>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                        to="/"
                    >
                        {t("home")}
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                        to="/AboutUs"
                    >
                        {t("aboutUs")}
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                        to="/Properties"
                    >
                        {t("properties")}
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                        to="/Services"
                    >
                        {t("services")}
                    </NavLink>

                </div>

                <div className={s.right}>

                    {
                        isAuth && (
                            <>
                                <p className={s.user}>
                                    {t("hello")}, {user.name}
                                </p>

                                <button
                                    className={s.logout}
                                    onClick={() => {
                                        localStorage.removeItem("isAuth")
                                        window.location.reload();
                                    }}
                                >
                                    {t("logout")}
                                </button>
                            </>
                        )
                    }

                    {
                        !isAuth && (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${s.register} ${s.activeBtn}`
                                        : s.register
                                }
                            >
                                {t("login")}
                            </NavLink>
                        )
                    }

                    <NavLink
                        to="/ContactUs"
                        className={({ isActive }) =>
                            isActive
                                ? `${s.linkk} ${s.activeBtn}`
                                : s.linkk
                        }
                    >
                        {t("contactUs")}
                    </NavLink>

                    <div className={s.languageWrapper}>

                        <button
                            className={s.languageBtn}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            🌐
                        </button>

                        <div
                            className={`${s.languageMenu} ${isOpen ? s.open : ""}`}
                        >

                            <button onClick={() => changeLanguage("ru")}>
                                🇷🇺 Рус
                            </button>

                            <button onClick={() => changeLanguage("uz")}>
                                🇺🇿 O'z
                            </button>

                            <button onClick={() => changeLanguage("en")}>
                                🇺🇸 Eng
                            </button>

                        </div>

                    </div>

                    <button className={s.btn} onClick={handleDark}>
                        {isDark ? t("dark") : t("light")}
                    </button>
                    {isAdmin ? (

                        <button onClick={logoutAdmin} className={s.btn}>
                            {t("adminLogout")}
                        </button>

                    ) : (

                        <button onClick={handleIsAdmin} className={s.btn}>
                            {t("admin")}
                        </button>

                    )}
                </div>

                <svg
                    className={s.menu}
                    onClick={handleBurger}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>

            </div>
        </nav>
    );
};

export default Nav;