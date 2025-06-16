import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import banner from "../assets/images/banner.jpg";

export default function RegisterForm() {
  const inputStyle = "border-1 border-emerald-800 rounded-sm bg-green-50 p-1";
  const labelStyle = "flex flex-col text-sm mt-3";
  const errorStyle = "text-red-600 text-xs";
  const minPassword = 8;
  const maxPassword = 255;
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FieldValues) => {
    try {
      const transformedData = {
        lastname: data.lastname.toLowerCase(),
        firstname: data.firstname.toLowerCase(),
        email: data.email.toLowerCase(),
        hash_password: data.hash_password,
        pseudo: data.pseudo.toLowerCase(),
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });
      if (response.status === 422) {
        return;
      }

      await response.json();
      // insertion d'un toast succès
      reset();
      navigate("/register");
    } catch (error) {
      // insertion d'un toast erreur
    }
  };

  return (
    <main>
      <section className="relative w-full h-screen">
        <img
          src={banner}
          alt="banner vegetables"
          className="object-cover w-full h-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-emerald-800 md:text-9xl">
          Healthy Eat
        </h1>
      </section>
      <section className="border-emerald-700 border-2 w-7/8 my-9 md:my-50 md:w-4xl m-auto  rounded-2xl ">
        <h2 className="text-center mt-5 mb-5">Formulaire d'inscription</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-7/8 md:w-2xl m-auto"
        >
          <label htmlFor="firstname" className={labelStyle}>
            Prénom
            <input
              type="text"
              aria-label="Saisissez votre prénom"
              placeholder="Votre prénom"
              className={inputStyle}
              {...register("firstname", {
                required: "champ obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s-]+$/,
                  message:
                    "Le prénom peut seulement contenir des lettres, des espaces et des tirets.",
                },
              })}
            />
          </label>
          <span className={errorStyle}>{errors.firstname?.message}</span>
          <label htmlFor="lastname" className={labelStyle}>
            Nom
            <input
              type="text"
              aria-label="Saisissez votre nom"
              placeholder="Votre nom"
              className={inputStyle}
              {...register("lastname", {
                required: "champ obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s-]+$/,
                  message:
                    "Le nom peut seulement contenir des lettres, des espaces et des tirets.",
                },
              })}
            />
          </label>
          <span className={errorStyle}>{errors.lastname?.message}</span>
          <label htmlFor="pseudo" className={labelStyle}>
            Pseudo
            <input
              type="text"
              aria-label="Saisissez votre pseudo"
              placeholder="Votre pseudo"
              {...register("pseudo", {
                required: "champ obligatoire",
                pattern: {
                  value: /^[A-Za-z0-9-]+$/,
                  message: "Caractères spéciaux et accents non autorisés",
                },
              })}
              className={inputStyle}
            />
          </label>
          <span className={errorStyle}>{errors.pseudo?.message}</span>
          <label htmlFor="email" className={labelStyle}>
            Email
            <input
              type="email"
              aria-label="Saisissez votre email"
              placeholder="Votre email"
              className={inputStyle}
              {...register("email", { required: "champ obligatoire" })}
            />
          </label>
          <span className={errorStyle}>{errors.email?.message}</span>
          <label htmlFor="password" className={labelStyle}>
            Mot de passe
          </label>
          <div className="border-1 border-emerald-800 rounded-sm bg-green-50 p-1 flex flex-row justify-between">
            <input
              type={visible ? "text" : "password"}
              aria-label="Saisissez votre mot de passe"
              placeholder="Votre mot de passe"
              minLength={minPassword}
              maxLength={maxPassword}
              autoComplete="current-password"
              {...register("hash_password", {
                required: "champ obligatoire",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                  message:
                    "Le mot de passe doit contenir au minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              className="text-end"
            >
              {visible ? "Cacher" : "Afficher"}
            </button>
          </div>
          <span className={errorStyle}>{errors.hash_password?.message}</span>
          <button
            type="submit"
            className="bg-emerald-700 w-2/3 md:w-1/3 m-auto rounded-xl my-4 text-white"
          >
            S'inscrire
          </button>
        </form>
      </section>
    </main>
  );
}
