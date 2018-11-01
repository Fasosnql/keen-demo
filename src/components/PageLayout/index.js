import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import {
  MenuWrapper,
  MenuItem
} from './styles';

const PageLayout = ({ children }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <MenuWrapper>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/page1">Page1</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/page2">Page2</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/page3">Page3</Link>
          </MenuItem>
          <MenuItem toRight>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
        </MenuWrapper>
      </Col>
    </Row>
    <Row>
      {children}
    </Row>
  </Grid>
);

export default PageLayout;
