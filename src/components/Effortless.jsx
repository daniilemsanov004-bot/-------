import { Link } from 'react-router-dom';
import s from './Effortless.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Effortless = () => {

    const { t } = useTranslation()

    const effortless = [
        {
            id: 1,
            image: "/Icon Container (8).svg",
            name: t("tenantHarmony"),
            info: t("tenantHarmonyInfo"),
        },

        {
            id: 2,
            image: "/Icon Container (9).svg",
            name: t("maintenanceEase"),
            info: t("maintenanceEaseInfo"),
        },

        {
            id: 3,
            image: "/Icon Container (10).svg",
            name: t("financialPeace"),
            info: t("financialPeaceInfo"),
        },

        {
            id: 4,
            image: "/Icon Container (11).svg",
            name: t("legalGuardian"),
            info: t("legalGuardianInfo"),
        },
    ];

    return (
        <section className={s.effortless} id='effortless'>

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

                <h1>
                    {t("effortlessTitle")}
                </h1>

                <p>
                    {t("effortlessText")}
                </p>

            </motion.div>

            <div className={s.cards}>

                {effortless.map((item, index) => (

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
                            {t("experienceTitle")}
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
                                {t("learnMore")}
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
                        {t("experienceText")}
                    </motion.p>

                </motion.div>

            </div>
        </section>
    )
}

export default Effortless