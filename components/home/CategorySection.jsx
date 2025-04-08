export default function CategorySection() {
    const categories = [
      { name: "Birthday", image: "/images/category-birthday.jpg", link: "/occasions/birthday" },
      { name: "Wedding", image: "/images/category-wedding.jpg", link: "/occasions/wedding" },
      { name: "Sympathy", image: "/images/category-sympathy.jpg", link: "/occasions/sympathy" },
      { name: "Romance", image: "/images/category-romance.jpg", link: "/occasions/romance" }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-custom-blue">Shop by Occasion</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={category.link}
                className="group relative rounded-lg overflow-hidden h-48 bg-gray-200 shadow-md flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  