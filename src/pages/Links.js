import React from "react";
import { SubmitLinkButton, LinksList, Divider } from "./../components";

export default function Links() {
  return (
    <React.Fragment>
      <SubmitLinkButton />
      <Divider />
      <LinksList />
    </React.Fragment>
  );
}
