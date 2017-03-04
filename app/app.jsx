var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('Header');
var Footer = require('Footer');
var Map = require('Map');
var Detail = require('Detail');



var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

import { Grid, Row, Col  } from 'react-bootstrap';
// var Header = require('Header');
// var Map1 = require('Map1');
// var Detail = require('Detail');
// var Footer = require('Footer');
// var Map = require('Map');

// var Test = require('movieAPI');





ReactDOM.render(
		<Grid>
          <Row className="show-grid">
            <Col xs={18} md={12}><code>

                <Header/>
                <Detail/>
                <Map/> 
                <Footer/>


            </code></Col>
          </Row>
        </Grid>,

  document.getElementById('app')
);
