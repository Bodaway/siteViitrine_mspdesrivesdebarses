import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "./link"

export function Footer(props) {
  return (
    <Container class="text-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <p style={{textAlign:"center"}}>Deploy by Bodaway with ♥</p> */}
      Icons made by{" "}
      <a href="http://www.freepik.com/" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/free-icon/nurse_1165528"
          title="mavadee"
        >
          mavadee
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Container>
  )
}
