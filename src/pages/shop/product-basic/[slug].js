import { useEffect } from "react";
import ThreeSixty from "react-360-view";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { ImageCtaShopItem } from "../../../components/Cta";
import { LayoutHome } from "../../../components/Layout";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab
} from "../../../components/ProductDetails";
import { ProductSlider } from "../../../components/ProductSlider";
import products from "../../../data/products.json";
import { getDiscountPrice } from "../../../lib/product";
import { addToCart } from "../../../redux/actions/cartActions";
import {
  addToCompare,
  deleteFromCompare
} from "../../../redux/actions/compareActions";
import {
  addToWishlist,
  deleteFromWishlist
} from "../../../redux/actions/wishlistActions";

const ProductBasic = ({
  product,
  cartItems,
  wishlistItems,
  compareItems,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare
}) => {
  useEffect(() => {
    console.log('product', product)
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  const { addToast } = useToasts();
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.filter(
    (cartItem) => cartItem.id === product.id
  )[0];
  const wishlistItem = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id === product.id
  )[0];
  const compareItem = compareItems.filter(
    (compareItem) => compareItem.id === product.id
  )[0];

  return (
    <LayoutHome>
      <ImageCtaShopItem />

      {/* product details */}
      <div className="product-details space-mt--r100 space-mb--r100">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              {/* image gallery bottom thumb */}
              <ImageGalleryBottomThumb
                product={product}
                wishlistItem={wishlistItem}
                addToast={addToast}
                addToWishlist={addToWishlist}
                deleteFromWishlist={deleteFromWishlist}
              />
            </Col>

            <ThreeSixty
              amount={8}
              imagePath={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/products"
              }
              fileName="h_ring_{index}.jpg"
              spinReverse
            />

            <Col lg={6}>
              {/* product description */}
              <ProductDescription
                product={product}
                productPrice={productPrice}
                discountedPrice={discountedPrice}
                cartItems={cartItems}
                cartItem={cartItem}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
                addToast={addToast}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                deleteFromWishlist={deleteFromWishlist}
                addToCompare={addToCompare}
                deleteFromCompare={deleteFromCompare}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>
          <h2 className="widget-title space-mb--25" style={{ fontFamily: "cargenregular", textAlign: "center", padding: "60px", fontSize: "35px", lineHeight: "inherit" }}>YOU MAY ALSO LIKE</h2>
          <ProductSlider products={products} />
        </Container>
      </div>
    </LayoutHome>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBasic);

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: product.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter((single) => single.slug === params.slug)[0];

  return { props: { product } };
}
