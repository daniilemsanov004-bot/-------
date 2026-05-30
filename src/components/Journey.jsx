import s from './Journey.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const Journey = () => {

    const { t } = useTranslation()

    return (
        <section className={s.journey} id='journey'>

            <motion.div
                className={s.text}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ amount: 0.2 }}
            >

                <img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ amount: 0.2 }}
                >
                    {t("journeyTitle")}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ amount: 0.2 }}
                >
                    {t("journeyDescription")}
                </motion.p>

                <div className={s.info}>

                    <motion.div
                        className={s.card}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ amount: 0.2 }}
                        whileHover={{ y: -10, scale: 1.03 }}
                    >
                        <h1>200+</h1>
                        <p>{t("happyCustomers")}</p>
                    </motion.div>

                    <motion.div
                        className={s.card}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ amount: 0.2 }}
                        whileHover={{ y: -10, scale: 1.03 }}
                    >
                        <h1>10k+</h1>
                        <p>{t("propertiesForClients")}</p>
                    </motion.div>

                    <motion.div
                        className={s.card}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ amount: 0.2 }}
                        whileHover={{ y: -10, scale: 1.03 }}
                    >
                        <h1>16+</h1>
                        <p>{t("yearsExperience")}</p>
                    </motion.div>

                </div>

            </motion.div>

            <motion.img
                src="/Sub Container.png"
                alt=""

                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}

                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                }}

                viewport={{ amount: 0.2 }}

                whileHover={{
                    scale: 1.02
                }}
            />

        </section>
    )
}

export default Journey