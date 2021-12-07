import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import ProductsPage from "../components/Products/ProductsPage";
import SliderPage from "../components/Slider/SliderPage";

const Home = () => {
  return (
    <div>
      <SliderPage />
      <CategoryFilter />      
    </div>
  );
}

export default Home;