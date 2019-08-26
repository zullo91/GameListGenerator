import React from "react";
import { Form, TextArea } from "semantic-ui-react";

const MyTextArea = props => (
  <Form>
    <TextArea
      style={{ minHeight: 150, minWidth: 450 }}
      value={props.value}
      placeholder={props.placeholder}
    />
  </Form>
);

export default MyTextArea;
