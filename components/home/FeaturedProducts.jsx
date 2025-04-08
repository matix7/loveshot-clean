import CardProduct from '../shared/CardProduct';
import ButtonPrimary from '../shared/ButtonPrimary';

export default function FeaturedProducts() {
  // In a real implementation, this would fetch from a database or API
  const featuredProducts = [
    {
      id: 1,
      name: "Spring Sunrise",
      price: 59.99,
      image: "https://via.placeholder.com/300x300?text=Spring+Flowers",
      description: "Vibrant mix of seasonal spring flowers",
      category: "seasonal"
    },
    {
      id: 2,
      name: "Romantic Red Roses",
      price: 69.99,
      image: "https://via.placeholder.com/300x300?text=Red+Roses",
      description: "Classic arrangement of premium red roses",
      category: "roses"
    },
    {
      id: 3,
      name: "Texas Wildflower",
      price: 54.99,
      image: "https://via.placeholder.com/300x300?text=Texas+Wildflowers",
      description: "Beautiful arrangement featuring Texas bluebonnets",
      category: "local"
    },
    {
      id: 4,
      name: "Purple Elegance",
      price: 64.99,
      image: "https://via.placeholder.com/300x300?text=Purple+Flowers",
      description: "Sophisticated arrangement with purple tones",
      category: "premium"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-custom-blue">Featured Arrangements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <ButtonPrimary href="/shop" text="View All Arrangements" />
        </div>
      </div>
    </section>
  );
}
