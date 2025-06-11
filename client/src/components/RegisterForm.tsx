import banner from "../assets/images/banner.jpg";

export default function RegisterForm() {
  const inputStyle = "border-1 border-emerald-600 rounded-sm";
  const labelStyle = "flex flex-col";
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
      <section className="border-emerald-700 border-2 m-4">
        <h2>Formulaire d'inscription</h2>
        <form className="flex flex-col gap-2 p-7">
          <label className={labelStyle}>
            Prénom
            <input className={inputStyle} />
          </label>
          <label className={labelStyle}>
            Nom
            <input className={inputStyle} />
          </label>
          <label className={labelStyle}>
            Pseudo
            <input className={inputStyle} />
          </label>
          <label className={labelStyle}>
            Email
            <input className={inputStyle} />
          </label>
          <label className={labelStyle}>
            Mot de passe
            <input className={inputStyle} />
          </label>
          <button type="submit">S'inscrire</button>
        </form>
      </section>
    </>
  );
}
