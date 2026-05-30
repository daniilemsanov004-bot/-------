import s from './Property.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

const Property = () => {

    const { t } = useTranslation();

    return (
        <section className={s.property}>
            <div className={s.all}>

                <motion.img
                    src="/1f373383-03f8-4cdc-a40b-6b1d74266e1d.png"
                    alt=""
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}
                />

                <motion.div
                    className={s.texts}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}
                >

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.2 }}
                    >
                        {t("property6.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property6.bedroom4")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property6.bathrooms3")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property6.residence")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property6.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.bedrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.bathrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.squareFeet")}</h4>
                                <h3>2,450</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.yearBuilt")}</h4>
                                <h3>2022</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.parking")}</h4>
                                <h3>{t("property6.undergroundParking")}</h3>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

            </div>

            <motion.div
                className={s.text}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.2 }}
            >
                <h1>{t("property6.aboutTitle")}</h1>
                <p>{t("property6.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;