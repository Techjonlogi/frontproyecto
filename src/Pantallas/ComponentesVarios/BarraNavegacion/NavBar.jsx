import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

import { Formik } from "formik";
import { Navbar, Form, Row, Col } from "react-bootstrap";
import SearchInputSchema from "../Utilidades/ValidationSchemas/SearchInputSchema";
import BasicSearchBar from "../EntradaUsuario/BasicSearchBar";
import DynamicNavbarLinks from "./DynamicNavBarLinks";

const NavBar = () => {
    return (
      <Formik
        initialValues= { {
          search_query: ''
        }  }
        validationSchema= { SearchInputSchema }
      >
        { formik => (
          <>
            <Navbar className="NavigationBar">
            <Row id="row">
              <Col className="BrandColumn" >
                <Navbar.Brand className="SiteLogoLink" href="/Home">New Talent</Navbar.Brand>
              </Col>
              <Col className="SearchColumn" xs={ 5 }>
                <Form>
                  <BasicSearchBar name="search_query" />
                </Form>
              </Col>
              <Col className="LinkColumn" >
                <DynamicNavbarLinks token={ localStorage.getItem( "Token" ) }/>
              </Col>
            </Row>
            </Navbar>
          </>
        ) }
      </Formik>
    );
};

export default NavBar;