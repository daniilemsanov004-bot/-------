import { supabase } from "./supabase";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [isBurger, setIsBurger] = useState(false);

    const handleBurger = () => setIsBurger((prev) => !prev);
    const [properties, setCards] = useState([]);

    const [cardId, setCardId] = useState(null);

    const [isAdmin, setIsAdmin] = useState(false);

    const adminPassword = "935391813";


    useEffect(() => {

        const savedAdmin =
            sessionStorage.getItem("isAdmin");

        if (savedAdmin === "true") {

            setIsAdmin(true);

        }

    }, []);
    const [isDark, setIsDark] = useState(false);
    const handleDark = () => {
        setIsDark((prev) => !prev);
    };

    const handleIsAdmin = () => {

        const password = prompt("Введите пароль");

        if (password === adminPassword) {

            setIsAdmin(true);

            sessionStorage.setItem("isAdmin", "true");

            toast.success("Вы вошли как администратор");

        } else {

            toast.error("Неверный пароль");

        }
    };

    const logoutAdmin = () => {

        setIsAdmin(false);

        sessionStorage.removeItem("isAdmin");

        toast.success("Вы вышли из режима администратора");
    };

    const getCards = async () => {

        try {

            const { data, error } = await supabase
                .from("cardss")
                .select("*");

            if (error) throw error;

            const formattedData = data.map((item) => ({
                id: item.id,

                title: {
                    ru: item.title_ru,
                    en: item.title_en,
                    uz: item.title_uz,
                },

                description: {
                    ru: item.description_ru,
                    en: item.description_en,
                    uz: item.description_uz,
                },

                bedrooms: {
                    ru: item.bedrooms_ru,
                    en: item.bedrooms_en,
                    uz: item.bedrooms_uz,
                },

                bathrooms: {
                    ru: item.bathrooms_ru,
                    en: item.bathrooms_en,
                    uz: item.bathrooms_uz,
                },

                type: {
                    ru: item.type_ru,
                    en: item.type_en,
                    uz: item.type_uz,
                },

                image: item.image,
                price: item.price,
                link: item.link,

                bedroomIcon: "/BACKGROUND_2.svg",
                bathroomIcon: "/Icon.svg",
                typeIcon: "/Icon (1).svg",
            }));

            console.log(formattedData);

            setCards(formattedData);

        } catch (error) {

            console.log(error);

            toast.error("Ошибка загрузки");
        }
    };
    const getCardId = async (id) => {

        try {

            const { data, error } = await supabase
                .from("cardss")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;

            const formattedCard = {
                id: data.id,

                title: {
                    ru: data.title_ru,
                    en: data.title_en,
                    uz: data.title_uz,
                },

                description: {
                    ru: data.description_ru,
                    en: data.description_en,
                    uz: data.description_uz,
                },

                image: data.image,

                bedrooms: {
                    ru: data.bedrooms_ru,
                    en: data.bedrooms_en,
                    uz: data.bedrooms_uz,
                },

                bathrooms: {
                    ru: data.bathrooms_ru,
                    en: data.bathrooms_en,
                    uz: data.bathrooms_uz,
                },

                type: {
                    ru: data.type_ru,
                    en: data.type_en,
                    uz: data.type_uz,
                },

                price: data.price,

                link: data.link,
            };

            setCardId(formattedCard);

        } catch (error) {

            console.log(error);

            toast.error("Карточка не найдена");
        }
    };

    const deleteCard = async (id) => {

        try {

            const { error } = await supabase
                .from("cardss")
                .delete()
                .eq("id", id);

            if (error) throw error;

            getCards();

            toast.success("Карточка удалена");

        } catch (error) {

            console.log(error);

            toast.error("Ошибка удаления");
        }
    };

    const createCard = async (data) => {

        try {

            const { error } = await supabase
                .from("cardss")

                .insert([
                    {
                        title_ru: data.title.ru,
                        title_en: data.title.en,
                        title_uz: data.title.uz,

                        description_ru: data.description.ru,
                        description_en: data.description.en,
                        description_uz: data.description.uz,

                        bedrooms_ru: data.bedrooms.ru,
                        bedrooms_en: data.bedrooms.en,
                        bedrooms_uz: data.bedrooms.uz,

                        bathrooms_ru: data.bathrooms.ru,
                        bathrooms_en: data.bathrooms.en,
                        bathrooms_uz: data.bathrooms.uz,

                        type_ru: data.type.ru,
                        type_en: data.type.en,
                        type_uz: data.type.uz,

                        image: data.image,

                        price: data.price,

                        link: `/${data.link}`,
                    }
                ]);

            if (error) {
                console.log(error);
                toast.error(error.message);
                return;
            }

            getCards();

            toast.success("Карточка создана");

        } catch (error) {

            console.log(error);

            toast.error("Ошибка создания");
        }
    };
    const changeCard = async (data, id) => {

        try {

            const { error } = await supabase
                .from("cardss")
                .update({

                    title_ru: data.title.ru,
                    title_en: data.title.en,
                    title_uz: data.title.uz,

                    description_ru: data.description.ru,
                    description_en: data.description.en,
                    description_uz: data.description.uz,

                    bedrooms_ru: data.bedrooms.ru,
                    bedrooms_en: data.bedrooms.en,
                    bedrooms_uz: data.bedrooms.uz,

                    bathrooms_ru: data.bathrooms.ru,
                    bathrooms_en: data.bathrooms.en,
                    bathrooms_uz: data.bathrooms.uz,

                    type_ru: data.type.ru,
                    type_en: data.type.en,
                    type_uz: data.type.uz,

                    image: data.image,

                    price: data.price,

                    link: data.link.startsWith("/")
                        ? data.link
                        : `/${data.link}`,
                })
                .eq("id", id);

            if (error) throw error;

            getCards();

            toast.success("Карточка обновлена");

        } catch (error) {

            console.log(error);

            toast.error("Ошибка обновления");
        }
    };
    const uploadImage = async (file) => {

        try {

            const fileName = `${Date.now()}-${file.name}`;

            const { error } = await supabase.storage
                .from("images")
                .upload(fileName, file);

            if (error) throw error;

            const { data } = supabase.storage
                .from("images")
                .getPublicUrl(fileName);

            return data.publicUrl;

        } catch (error) {

            console.log(error);

            toast.error("Ошибка загрузки картинки");
        }
    };

    return (

        <MyContext.Provider
            value={{
                properties,
                getCards,

                createCard,
                deleteCard,
                changeCard,

                getCardId,
                cardId,
                setCardId,

                isAdmin,
                handleIsAdmin,
                logoutAdmin,
                isDark,
                handleDark,
                isBurger, handleBurger,
                uploadImage,
            }}
        >

            {children}

        </MyContext.Provider>
    );
};