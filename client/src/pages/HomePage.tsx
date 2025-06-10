import banner from "../assets/images/banner.jpg";

export default function HomePage() {
  return (
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
  );
}
