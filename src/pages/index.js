import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ImageTextContent } from "../components/About";
import { BrandLogo } from "../components/BrandLogo";
import { ImageCtaFirst, ImageCtaSecond, ImageCtaThird } from "../components/Cta";
import { HeroSlider } from "../components/HeroSlider";
import { LayoutHome } from "../components/Layout";
import { ProductSlider } from "../components/ProductSlider";
import brandLogoData from "../data/brand-logos/brand-logo-one.json";
import heroSliderData from "../data/hero-sliders/hero-slider-three.json";
import teamData from "../data/team-members/team-one.json";
import { getProducts } from "../lib/product";
import API from '../api';

const productsLimit = 9;

const Home = () => {
  const { t, lang } = useTranslation('home');

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    console.log('aaa');
    try {
      const response = await API.get('/products/popular/list', { params: { limit: productsLimit } });
      console.log('popular', response);
      setProducts(response.data);
    } catch (e) {
      console.log('error', e);
    }
  }, []);

  return (
    <LayoutHome>

      <HeroSlider
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r100"
      />

      <ImageCtaFirst t={t} spaceBottomClass="space-mb--r100" />
      <ImageCtaSecond spaceBottomClass="space-mb--r100" />

      <ImageTextContent />

      <BrandLogo brandLogoData={brandLogoData} />

      {products.length > 0 && <ProductSlider products={products} />}

      <ImageCtaThird />

      <div className="team-member-area space-mb--r100">
        <Container className="wide">
          <Row className="space-mb--m30 justify-content-center">
            {teamData &&
              teamData.map((single, i) => {
                return (
                  <Col lg={3} md={4} className="space-mb--30" key={i}>
                    <div className="single-team-member single-team-member--style-square">
                      <div className="member-image">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="member-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2 className="name fontStyleMain">{single.name}</h2>
                        <span className="subtext fontStyleDetail">{single.designation}</span>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>

      <div className="about-content space-mb--r100">
        <Container className="wide">
          <Row>
            <Col xl={6} lg={6} className="mr-auto" style={{ paddingLeft: "70px", paddingRight: "70px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="about-widget space-mb--35">
                <h2 className="widget-title space-mb--25 fontStyleMain">{t('best-time')}</h2>
                <p className="widget-content fontStyleDetail">
                  I invite you to contact me and start the exciting journey, together.
                </p>
              </div>
              <div className="mc-form d-none d-lg-flex">
                <button className="lezada-button lezada-button--medium">
                  Sign Up
                </button>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  required
                  style={{ height: 45, textAlign: 'center' }}
                />
              </div>
              <div className="mc-form d-flex d-lg-none">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  required
                  style={{ height: 45, textAlign: 'center' }}
                />
                <button className="lezada-button lezada-button--medium">
                  Sign Up
                </button>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="about-page-2-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/yonatan-images/home_9.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </LayoutHome>
  );
};

export default Home;
