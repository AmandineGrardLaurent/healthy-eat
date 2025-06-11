import { useState } from "react";
import { useForm } from "react-hook-form";
import banner from "../assets/images/banner.jpg";

export default function RegisterForm() {
  const inputStyle = "border-1 border-emerald-800 rounded-sm bg-green-50 p-1";
  const labelStyle = "flex flex-col text-sm mt-3";
  const errorStyle = "text-red-600 text-xs";

  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    // console.log(data);
  };

  return (
    <>
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
      <section className="border-emerald-700 border-2 w-7/8 my-9 md:my-7  md:w-4xl m-auto rounded-2xl ">
        <h2 className="text-center mt-5 mb-5">Formulaire d'inscription</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-7/8 md:w-2xl m-auto"
        >
          <label htmlFor="firstname" className={labelStyle}>
            Prénom
            <input
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
              className={inputStyle}
              {...register("email", { required: "champ obligatoire" })}
            />
          </label>
          <span className={errorStyle}>{errors.email?.message}</span>
          <div className="flex flex-col">
            <label htmlFor="password" className={labelStyle}>
              Mot de passe
              <input
                type={visible ? "text" : "password"}
                className={inputStyle}
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
            </label>
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              className="text-end"
            >
              {visible ? "Cacher" : "Afficher"}
            </button>

            <span className={errorStyle}>{errors.hash_password?.message}</span>
          </div>
          <button
            type="submit"
            className="bg-emerald-700 w-2/3 m-auto rounded-xl my-4 text-white"
          >
            S'inscrire
          </button>
        </form>
      </section>
    </>
  );
}
