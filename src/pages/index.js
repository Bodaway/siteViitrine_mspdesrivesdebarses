import React from "react"
import { Container, Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Container>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          Site under construction.
        </p>
        <p>
          <Button variant="primary">Sample Button</Button>
        </p>
      </Jumbotron>
    </Container>
  </Layout>
)
