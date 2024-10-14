import Header from "../component/header/Header";
import Footer  from "../component/Footer/Footer";
import Herosection from '../component/Herosection/Herosection';

const Homepage = () => {
  return (
    <div>
      <center>
      <Header></Header>
      <Herosection></Herosection>
      <h3>This is My Home Page</h3>
      <Footer></Footer>
      </center>
    </div>
  )
}

export default Homepage;
