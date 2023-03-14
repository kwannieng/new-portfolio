import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = ({name, title}) =>{
    return  <div>
    <Header/>
    <Hero backgroundImage="https://images.unsplash.com/photo-1615202991324-fa31937b3f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80">
      <h1>Let's Dive into the World of Front-End!</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h2>Welcome to my portfolio stie!</h2>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
            <p>
            My name is Kwannie NG - a passionate Front-End Engineer (and a cat-lover). 
            <br/>
            In this site, you will find out who I am, what projects I have done. 
            <br/>
            Hope you enjoy it.
            </p>
        </Col>
      </Row>
    </Container>
  </div>
}

export default Home;