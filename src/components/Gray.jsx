import s from './Gray.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const Gray = () => {

    const { t } = useTranslation()

    return (
        <motion.footer
            className={s.gray}

            initial={{
                opacity: 0,
                y: 50
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.8
            }}

            viewport={{
                once: false,
                amount: 0.2
            }}
        >

            <div className={s.texts}>

                <motion.div
                    className={s.text}

                    initial={{
                        opacity: 0,
                        x: -40
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        delay: 0.2,
                        duration: 0.7
                    }}

                    viewport={{
                        once: false
                    }}
                >

                    <motion.h1
                        whileHover={{
                            y: -2
                        }}
                    >
                        {t("rights")}
                    </motion.h1>

                    <motion.h1
                        whileHover={{
                            y: -2
                        }}
                    >
                        {t("terms")}
                    </motion.h1>

                </motion.div>

                <motion.div
                    className={s.links}

                    initial={{
                        opacity: 0,
                        x: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        delay: 0.3,
                        duration: 0.7
                    }}

                    viewport={{
                        once: false
                    }}
                >

                    <motion.a
                        href="https://www.facebook.com/"

                        whileHover={{
                            y: -6,
                            scale: 1.08
                        }}

                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img src="/Button.svg" alt="" />
                    </motion.a>

                    <motion.a
                        href="https://uz.linkedin.com/"

                        whileHover={{
                            y: -6,
                            scale: 1.08
                        }}

                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img src="/Button (1).svg" alt="" />
                    </motion.a>

                    <motion.a
                        href="https://x.com/"

                        whileHover={{
                            y: -6,
                            scale: 1.08
                        }}

                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img src="/Button (2).svg" alt="" />
                    </motion.a>

                    <motion.a
                        href="https://www.youtube.com/"

                        whileHover={{
                            y: -6,
                            scale: 1.08
                        }}

                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img src="/Button (3).svg" alt="" />
                    </motion.a>

                </motion.div>

            </div>

        </motion.footer>
    )
}

export default Gray