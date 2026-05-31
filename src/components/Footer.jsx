import axios from 'axios';
import s from './Footer.module.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Gray from './Gray';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const scrollTo = (path, id) => {

        navigate(path);

        setTimeout(() => {

            const element = document.getElementById(id);

            if (element) {

                const isMobile = window.innerWidth <= 768;

                const yOffset = isMobile ? -90 : -120;

                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({
                    top: y,
                    behavior: "smooth"
                });
            }

        }, 300);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const token = import.meta.env.VITE_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;

    const urlTelegram = `https://api.telegram.org/bot${token}/sendMessage`;

    const sendTelegram = async (data) => {

        const message = `
Email: ${data.email}
        `;

        try {

            await axios.post(urlTelegram, {
                chat_id: chatId,
                text: message,
            });

            toast.success(t("success"));

            reset();

        } catch (error) {

            console.log(error);

            toast.error(t("error"));

        }
    };

    const onSubmit = (data) => {
        sendTelegram(data);
    };

    return (
        <footer>

            <motion.div
                className={s.ftr}

                initial={{
                    opacity: 0,
                    y: 80
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.9
                }}

                viewport={{
                    once: false,
                    amount: 0.15
                }}
            >

                <motion.div
                    className={s.logo}

                    initial={{
                        opacity: 0,
                        x: -60
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    viewport={{
                        once: false
                    }}
                >

                    <motion.img
                        src="/Logo (1).svg"
                        alt=""

                        whileHover={{
                            scale: 1.05,
                            rotate: -2
                        }}

                        transition={{
                            duration: 0.3
                        }}
                    />

                    <form
                        className={s.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <img src="/Vector.svg" alt="" />

                        <input
                            type="email"
                            className={s.inp}
                            placeholder={t("enterEmail")}

                            {...register("email", {
                                required: t("enterEmail")
                            })}
                        />

                        <motion.button
                            type="submit"

                            whileHover={{
                                scale: 1.06
                            }}

                            whileTap={{
                                scale: 0.95
                            }}
                        >
                            {t("send")}
                        </motion.button>

                    </form>

                    {errors.email && (
                        <p>{errors.email.message}</p>
                    )}

                </motion.div>

                <motion.div className={s.home}>

                    <button
                        onClick={() => scrollTo("/", "HeroSection")}
                        className={s.imp}
                    >
                        {t("home")}
                    </button>

                    <button onClick={() => scrollTo("/", "HeroSection")}>
                        {t("heroSection")}
                    </button>

                    <button onClick={() => scrollTo("/", "feautured")}>
                        {t("features")}
                    </button>

                    <button onClick={() => scrollTo("/", "what")}>
                        {t("testimonials")}
                    </button>

                    <button onClick={() => scrollTo("/", "questions")}>
                        {t("faq")}
                    </button>

                </motion.div>

                <motion.div className={s.aboutUs}>

                    <button
                        onClick={() => scrollTo("/AboutUs", "journey")}
                        className={s.imp}
                    >
                        {t("aboutUs")}
                    </button>

                    <button onClick={() => scrollTo("/AboutUs", "journey")}>
                        {t("ourStory")}
                    </button>

                    <button onClick={() => scrollTo("/AboutUs", "value")}>
                        {t("ourWorks")}
                    </button>

                    <button onClick={() => scrollTo("/AboutUs", "navigating")}>
                        {t("howItWorks")}
                    </button>

                    <button onClick={() => scrollTo("/AboutUs", "team")}>
                        {t("ourTeam")}
                    </button>

                    <button onClick={() => scrollTo("/AboutUs", "clients")}>
                        {t("ourClients")}
                    </button>

                </motion.div>

                <motion.div className={s.properties}>

                    <button
                        onClick={() => scrollTo("/Properties", "find")}
                        className={s.imp}
                    >
                        {t("properties")}
                    </button>

                    <button onClick={() => scrollTo("/Properties", "discover")}>
                        {t("portfolio")}
                    </button>

                    <button onClick={() => scrollTo("/Properties", "happen")}>
                        {t("message")}
                    </button>

                </motion.div>

                <motion.div className={s.services}>

                    <button
                        onClick={() => scrollTo("/Services", "elevate")}
                        className={s.imp}
                    >
                        {t("services")}
                    </button>

                    <button onClick={() => scrollTo("/Services", "unlock")}>
                        {t("valuation")}
                    </button>

                    <button onClick={() => scrollTo("/Services", "unlock")}>
                        {t("marketing")}
                    </button>

                    <button onClick={() => scrollTo("/Services", "effortless")}>
                        {t("management")}
                    </button>

                    <button onClick={() => scrollTo("/Services", "smart")}>
                        {t("negotiation")}
                    </button>

                    <button onClick={() => scrollTo("/Services", "smart")}>
                        {t("closing")}
                    </button>

                </motion.div>

                <motion.div className={s.contactUs}>

                    <button
                        onClick={() => scrollTo("/ContactUs", "get")}
                        className={s.imp}
                    >
                        {t("contactUs")}
                    </button>

                    <button onClick={() => scrollTo("/ContactUs", "connect")}>
                        {t("contactForm")}
                    </button>

                    <button onClick={() => scrollTo("/ContactUs", "locations")}>
                        {t("ourOffices")}
                    </button>

                </motion.div>

            </motion.div>

            <Gray />

        </footer>
    );
};

export default Footer;