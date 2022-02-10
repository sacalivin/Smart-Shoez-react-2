import React from "react";
import SHOE_DATA from "../../pages/shoe.data";
import MenuItem from "../../components/menu-item/menu-item.component";
import Heading from "../../components/heading/heading.component";

const Products = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [SHOE_DATA, setSHOE_DATA] = useState([]);
  
  useEffect(() => {
    fetch("https://localhost:44343/api/ShoeDetails/get-all-shoes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSHOE_DATA(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="container-fluid my-5 pt-3">
          <Heading trendingShoes />
          <br />

          <div className="row ml-5 mr-5">
            {SHOE_DATA.map((item) => {
              // map through all shoe collections
              return <MenuItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Products;
