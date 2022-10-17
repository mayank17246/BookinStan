import useFetch from "../../hooks/useFetch.js";
import "./featured.css";

const Featured = () => {
//creating a custom hook - that we can make an api request and fetch data 
  const {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

  //console.log(data)

  return (
    <div className="featured">
      {loading ? ( "Loading please wait" ) : (
      <><div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/36118990.jpg?k=b1627ca668da705fe3e3b187d07c2baf6ef70cebf43cf3e61b4b130eefe026e3&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;
