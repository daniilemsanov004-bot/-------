import s from './Property.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

const Property = () => {

    const { t } = useTranslation();

    return (
        <section className={s.property}>
            <div className={s.all}>

                <motion.img
                    src="/aaab60f0-97d6-46aa-97fa-807504b62433.png"
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

                    <motion.h1>
                        {t("property8.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property8.bedroom4")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property8.bathrooms3")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property8.villa")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property8.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.bedrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.bathrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.squareFeet")}</h4>
                                <h3>2,800</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.yearBuilt")}</h4>
                                <h3>2019</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.parking")}</h4>
                                <h3>{t("property8.twoCarGarage")}</h3>
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
                <h1>{t("property8.aboutTitle")}</h1>
                <p>{t("property8.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;