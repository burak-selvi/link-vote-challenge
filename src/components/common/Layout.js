import React from "react";
import { Header, SuccessAlert } from "..";
import { Container } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <Container style={{ marginBottom: '3rem' }}>
      <Header />
      <Container maxWidth="xs">
        {children}
        <SuccessAlert />
      </Container>
    </Container>
  );
}
