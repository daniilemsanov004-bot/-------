import s from './Property.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

const Property = () => {

    const { t } = useTranslation();

    const cardAnim = (delay) => ({
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay },
        viewport: { amount: 0.2 },
        whileHover: { y: -10 }
    });

    return (
        <section className={s.property}>
            <div className={s.all}>

                <motion.img
                    src="/495c8c25-fc6c-43c7-9096-aa7ff174a0b7.png"
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

                    <motion.h1>{t("property.featuresTitle")}</motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property.bedroom3")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property.bathrooms2")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property.modernResidence")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property.bedrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property.bathrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property.squareFeet")}</h4>
                                <h3>2,350</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property.yearBuilt")}</h4>
                                <h3>2021</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property.parking")}</h4>
                                <h3>{t("property.privateGarage")}</h3>
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
                <h1>{t("property.aboutTitle")}</h1>
                <p>{t("property.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;