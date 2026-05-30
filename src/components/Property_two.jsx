import s from './Property.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

const Property = () => {

    const { t } = useTranslation();

    return (
        <section className={s.property}>
            <div className={s.all}>

                <motion.img
                    src="/8ff38ba4-f71b-4819-a503-216b299b7029.png"
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
                        {t("property7.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property7.bedroom3")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property7.bathrooms2")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property7.cottage")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property7.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.bedrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.bathrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.squareFeet")}</h4>
                                <h3>2,150</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.yearBuilt")}</h4>
                                <h3>2016</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.parking")}</h4>
                                <h3>{t("property7.privateDriveway")}</h3>
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
                <h1>{t("property7.aboutTitle")}</h1>
                <p>{t("property7.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;