import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Swiper from "react-id-swiper";
const HeroSlider = ({ sliderData, spaceBottomClass }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav"></button>
    )
  };
  return (
    <div
      className={`hero-slider-three ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="hero-slider-three__wrapper">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, i) => {
              return (
                <div
                  className="hero-slider-three__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                  <Container className="h-100">
                    <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                      <Col lg={12} className="order-2 order-lg-1">
                        <div className="hero-slider-three__content">
                          <div className="slider-link" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '75vh' }}>
                            <Link
                              href={single.url}
                              as={process.env.PUBLIC_URL + single.url}
                            >
                              <a className="lezada-loadmore-button" style={{ color: 'black' }}>Shop Now {`>`}</a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                </div>

              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
