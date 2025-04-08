import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import TestimonialSection from '../components/home/TestimonialSection';
import Newsletter from '../components/ui/Newsletter';

export const metadata = {
  title: 'Premium Flower Delivery in Dallas-Fort Worth',
  description: 'Fresh, beautiful flower arrangements delivered same-day throughout the Dallas-Fort Worth metroplex. Order online for any occasion.'
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialSection />
      <Newsletter />
    </>
  );
}
