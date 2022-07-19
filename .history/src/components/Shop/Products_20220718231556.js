import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "First Book",
    description: "My first book",
  },
  {
    id: "p2",
    price: 5,
    title: "Second Book",
    description: "My second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title="Test"
            price={6}
            description="This is a first product - amazing!"
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
