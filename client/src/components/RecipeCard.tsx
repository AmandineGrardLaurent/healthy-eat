export default function RecipeCard({ recipe }: { recipe: RecipeType }) {
  return (
    <article className="bg-white shadow-md rounded-xl">
      <img src={recipe.picture} alt={recipe.title} className="rounded-t-xl" />
      <div className="p-3 text-center">
        <h3 className="text-sm">{recipe.title}</h3>
        <h4 className="text-xs">{recipe.calories} Cal/100gr</h4>
      </div>
    </article>
  );
}
