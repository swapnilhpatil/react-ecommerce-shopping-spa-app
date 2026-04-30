import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ExploreCategories from "../components/ExploreCategories";
import TrendingProducts from "../components/TrendingProducts";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Header />
      <Hero />
      <ExploreCategories />
      <TrendingProducts />
      <Newsletter />
      <Footer />
    </main>
  );
}
