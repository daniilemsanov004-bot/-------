import { Link } from 'react-router-dom'
import s from './Smart.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Smart = () => {
    const { t } = useTranslation()

    const smart = [
        {
            id: 1,
            title: t("smart.items.0.title"),
            description: t("smart.items.0.desc"),
            image: "/Icon Container (16).svg",
        },
        {
            id: 2,
            title: t("smart.items.1.title"),
            description: t("smart.items.1.desc"),
            image: "/Icon Container (17).svg",
        },
        {
            id: 3,
            title: t("smart.items.2.title"),
            description: t("smart.items.2.desc"),
            image: "/Icon Container (18).svg",
        },
        {
            id: 4,
            title: t("smart.items.3.title"),
            description: t("smart.items.3.desc"),
            image: "/Icon Container (19).svg",
        },
    ]

    return (
        <section className={s.smart} id='smart'>

            <motion.div className={s.text}>
                <motion.img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <motion.h1>
                    {t("smart.title")}
                </motion.h1>

                <motion.p>
                    {t("smart.subtitle")}
                </motion.p>

                <motion.div className={s.cardd}>
                    <h1>{t("smart.cta.title")}</h1>

                    <p>{t("smart.cta.desc")}</p>

                    <Link className={s.linkk} to={"/ContactUs"}>
                        {t("smart.cta.button")}
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className={s.cards}>

                {smart.map((item, index) => (
                    <motion.div key={item.id} className={s.card}>
                        <motion.div className={s.logo}>
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className={s.image}
                            />
                            <h2>{item.title}</h2>
                        </motion.div>

                        <p>{item.description}</p>
                    </motion.div>
                ))}

            </motion.div>

        </section>
    )
}

export default Smart