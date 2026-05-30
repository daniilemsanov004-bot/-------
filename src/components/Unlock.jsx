import { Link } from 'react-router-dom';
import s from './Unlock.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const Unlock = () => {

    const { t } = useTranslation()

    const unlock = [
        {
            id: 1,
            image: "/Icon Container (4).svg",
            name: t("unlock.items.0.name"),
            info: t("unlock.items.0.info"),
        },

        {
            id: 2,
            image: "/Icon Container (5).svg",
            name: t("unlock.items.1.name"),
            info: t("unlock.items.1.info"),
        },

        {
            id: 3,
            image: "/Icon Container (6).svg",
            name: t("unlock.items.2.name"),
            info: t("unlock.items.2.info"),
        },

        {
            id: 4,
            image: "/Icon Container (7).svg",
            name: t("unlock.items.3.name"),
            info: t("unlock.items.3.info"),
        },
    ];

    return (
        <section className={s.unlock} id='unlock'>

            <motion.div
                className={s.texts}

                initial={{
                    opacity: 0,
                    y: 40
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8
                }}

                viewport={{
                    once: true,
                    amount: 0.2
                }}
            >

                <img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <h1>{t("unlock.title")}</h1>

                <p>
                    {t("unlock.description")}
                </p>

            </motion.div>

            <div className={s.cards}>

                {unlock.map((item, index) => (

                    <motion.div
                        key={item.id}
                        className={s.card}

                        initial={{
                            opacity: 0,
                            y: 60
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}

                        viewport={{
                            once: true,
                            amount: 0.2
                        }}

                        whileHover={{
                            y: -8
                        }}
                    >

                        <motion.div
                            className={s.logo}

                            whileHover={{
                                x: 3
                            }}
                        >

                            <motion.img
                                src={item.image}
                                alt=""

                                whileHover={{
                                    scale: 1.08,
                                    rotate: 6
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                            />

                            <h2>{item.name}</h2>

                        </motion.div>

                        <p>{item.info}</p>

                    </motion.div>

                ))}

                <motion.div
                    className={s.cardd}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.9,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    whileHover={{
                        y: -6
                    }}
                >

                    <div className={s.text}>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                x: -30
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}

                            transition={{
                                delay: 0.2,
                                duration: 0.7
                            }}
                        >
                            {t("unlock.cardTitle")}
                        </motion.h1>

                        <motion.div
                            whileHover={{
                                scale: 1.04
                            }}

                            whileTap={{
                                scale: 0.96
                            }}
                        >

                            <Link
                                to="/Properties"
                                className={s.linkk}
                            >
                                {t("unlock.button")}
                            </Link>

                        </motion.div>

                    </div>

                    <motion.p
                        initial={{
                            opacity: 0
                        }}

                        whileInView={{
                            opacity: 1
                        }}

                        transition={{
                            delay: 0.4,
                            duration: 0.8
                        }}
                    >
                        {t("unlock.cardDescription")}
                    </motion.p>

                </motion.div>

            </div>
        </section>
    )
}

export default Unlock