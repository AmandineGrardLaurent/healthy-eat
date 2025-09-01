import { useForm } from "react-hook-form";

export default function FoodForm() {
  const {
    register,
    // handleSubmit,
    // reset,
    // formState: { errors },
  } = useForm();

  const labelStyle = "flex flex-col text-sm mt-3";
  const inputStyle = "border-1 border-emerald-800 rounded-sm bg-green-50 p-1";
  return (
    <main>
      <section className="border-emerald-700 border-2 w-7/8 my-9 md:my-50 md:w-4xl m-auto  rounded-2xl ">
        <h2 className="text-center text-3xl text-emerald-800 mt-5 mb-5">
          Ajout d'un aliment
        </h2>
        <form className="flex flex-col w-7/8 md:w-2xl m-auto">
          <label htmlFor="foodname" className={labelStyle}>
            Nom de l'aliment
            <input
              type="text"
              aria-label="Saisissez l'aliment"
              placeholder="Salade, tomate, orange..."
              className={inputStyle}
              {...register("foodname", {
                required: "champ obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s-]+$/,
                  message:
                    "Le prénom peut seulement contenir des lettres, des espaces et des tirets.",
                },
              })}
            />
          </label>
          <fieldset>
            <legend>Fruit ou légume ?</legend>
            <input type="radio" value="fruit" name="food" />
            <label htmlFor="fruit">Fruit</label>
            <input type="radio" value="vegetable" name="food" />
            <label htmlFor="vegetable">Légume</label>
          </fieldset>
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
