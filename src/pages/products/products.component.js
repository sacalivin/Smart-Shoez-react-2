import React, { useEffect } from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import Heading from "../../components/heading/heading.component";
import { connect } from "react-redux";
import { fetchShoes, fetchShoes2 } from "../../Rudex/index";

function Products({ shoeData, fetchShoeData }) {

  useEffect(() => {
    console.log(shoeData);
    fetchShoeData();
    
  });
 
  return( shoeData.loading ? (
    <h1>Loading....</h1>
  ) : shoeData.error ? (
    <div>There is {shoeData.error} {shoeData.shoes}</div>
  ) : (
    <div>
      
      <div className="container-fluid my-5 pt-3">
        <Heading trendingShoes />
        <br />

        <div className="row ml-5 mr-5">
          {shoeData.shoes.map((item) => {
            // map through all shoe collections
            return <MenuItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  ));
  
}

const mapStateToProps = state => {
  return {
    shoeData: state.shoes,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchShoeData: () => dispatch(fetchShoes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
