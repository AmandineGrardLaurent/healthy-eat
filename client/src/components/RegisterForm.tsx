import banner from "../assets/images/banner.jpg";

export default function RegisterForm() {
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
      <section className="border-b-emerald-700 border-2 m-4">
        <h2>Formulaire d'inscription</h2>
        <form className="flex flex-col">
          <label>
            Prénom
            <input />
          </label>
          <label>
            Nom
            <input />
          </label>
          <label>
            Pseudo
            <input />
          </label>
          <label>
            Email
            <input />
          </label>
          <label>
            Mot de passe
            <input />
          </label>
          <button type="submit">S'inscrire</button>
        </form>
      </section>
    </>
  );
}
