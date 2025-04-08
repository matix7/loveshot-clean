import ButtonPrimary from '../shared/ButtonPrimary';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-800 h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Beautiful Blooms for Every Occasion</h1>
          <p className="text-xl mb-8">Premium flower arrangements delivered same-day throughout Dallas-Fort Worth.</p>
          <div className="flex space-x-4">
            <ButtonPrimary href="/shop" text="Shop Now" />
            <a href="/occasions/birthday" className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-custom-blue transition">Birthday Flowers</a>
          </div>
        </div>
      </div>
    </section>
  );
}
