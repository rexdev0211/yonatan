import { Fragment } from "react";
import { FooterHome } from "../Footer";
import { HeaderHome } from "../Header";

const LayoutHome = ({ children, page }) => {
  return (
    <Fragment>
      <HeaderHome page={page} />
      {children}
      <FooterHome />
    </Fragment>
  );
};

export default LayoutHome;
