import { Navbar } from "./components/navbar/Navbar";
import {HomPage} from "./components/homPage/HomPage"
import {About} from "./components/about/About"
import { Menu} from "./components/menu/Menu"
import { Product } from "./components/product/Product";
import { Contact } from "./components/contact/Contact";
import { Blogues } from "./components/blogues/Blogues";
import { Footer } from "./components/footer/Footer";
import { Customers } from "./components/customers/Customers";


export default function App() {
  return (
    <div>
      <Navbar />
      <HomPage />
      <About />
      <Menu />
      <Product />
      <Customers />
      <Contact />
      <Blogues />
      <Footer />
    </div>

  );
}
