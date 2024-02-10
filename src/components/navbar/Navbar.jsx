import  style from './navbar.module.css'
import { useOpen} from "../contex/ThemContex"
import { FaShoppingCart, FaSearch} from "react-icons/fa";
export function Navbar() {

  const { onOpenBar, onOpenSearch, openBar, openSearch} = useOpen();

  const toggleSearchBar = () => {
         if(openBar){
            onOpenBar()
         }
         onOpenSearch()
  }

  const toggleBar = () => {
      if(openSearch){
        onOpenSearch()
      }
      onOpenBar()
  }

  return (
   <div className={style.navbar}>
     <nav className={style.nav}>
      <img src="../../../public/logo.png" />
      <div className={style.link}>
        <a href='/'>Hom</a>
        <a href='#about'>About</a>
        <a href='#menu'>Menu</a>
        <a href='#products'>Products</a>
        <a href='#examen'>Review</a>
        <a href='#contact'>Contact</a>
        <a href='#blogues'>Blogs</a>
      </div>
      <div className={style.Fa}>
        <FaSearch onClick={toggleSearchBar} className={style.search}/>
        <FaShoppingCart onClick={toggleBar} className={style.search}/>
      </div>
    </nav>
   </div>
  )
}
