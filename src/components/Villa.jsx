import s from './Villa.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const Villa = () => {

    const { t } = useTranslation()

    return (
        <section className={s.villaBg}>

            <motion.div
                className={s.villa}

                initial={{
                    opacity: 0,
                    y: 100,
                    filter: "blur(10px)"
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                }}

                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                }}

                viewport={{
                    once: true,
                    amount: 0.2
                }}
            >

                <motion.h1
                    initial={{
                        opacity: 0,
                        x: -80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.9
                    }}

                    viewport={{
                        once: true
                    }}
                >
                    {t("villa7.title")}
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        x: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.2
                    }}

                    viewport={{
                        once: true
                    }}
                >
                    {t("villa7.description")}
                </motion.p>

                <div className={s.info}>

                    <motion.div
                        className={s.box}

                        initial={{
                            opacity: 0,
                            y: 80
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}

                        viewport={{
                            once: true
                        }}

                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                    >
                        <h4>
                            <span>{t("villa7.location")}:</span>
                            {t("villa7.locationValue")}
                        </h4>
                    </motion.div>

                    <motion.div
                        className={s.box}

                        initial={{
                            opacity: 0,
                            y: 80
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.4
                        }}

                        viewport={{
                            once: true
                        }}

                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                    >
                        <h5>
                            <span>{t("villa7.type")}:</span>
                            {t("villa7.typeValue")}
                        </h5>
                    </motion.div>

                    <motion.div
                        className={s.box}

                        initial={{
                            opacity: 0,
                            y: 80
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.6
                        }}

                        viewport={{
                            once: true
                        }}

                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                    >
                        <h3>
                            <span className={s.prc}>{t("villa7.price")}:</span>
                            $550,000
                        </h3>
                    </motion.div>

                </div>

            </motion.div>

        </section>
    )
}

export default Villa