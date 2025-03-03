import SearchBar from "../../components/searchBar/SearchBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="heading">Find Real Estate & Get Your Dream Place</h1>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            repellendus sunt consequuntur rerum ad dicta earum non minima,
            tempora deleniti. Odio iusto cum consectetur quasi dicta impedit ab
            magnam laudantium.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt=""/>
      </div>
    </div>
  );
};

export default Home;
