import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import Style from "./page.module.css";
import Herosection from "./component/Herosection/Herosection";
import Link from "next/link";

const page = () => {
  return (
    <html>
      <body>
        <center>
      <Header></Header>
       <Herosection></Herosection>
     
       <ul>
        <li className={Style.Li}> <Link href="about" target="blank">About</Link></li>
        <li className={Style.Li}> <Link href="home" target="blank">Home</Link></li>
        <li className={Style.Li}><Link href="contactas" target="blank">Contact As</Link></li>
       </ul>
       <Footer></Footer>
       
       </center>
       
       
      </body>
    </html>
  )
}

export default page
