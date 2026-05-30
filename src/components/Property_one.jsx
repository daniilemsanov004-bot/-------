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
                    src="/5e41a132-7ab1-49f0-b3fe-103cfa32cf24.png"
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
                        {t("property3.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property3.bedroom2")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property3.bathrooms2")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property3.penthouse")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property3.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property3.bedrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property3.bathrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property3.squareFeet")}</h4>
                                <h3>1,800</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property3.yearBuilt")}</h4>
                                <h3>2021</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property3.parking")}</h4>
                                <h3>{t("property3.assignedParking")}</h3>
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
                <h1>{t("property3.aboutTitle")}</h1>
                <p>{t("property3.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;