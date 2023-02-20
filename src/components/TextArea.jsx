import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function TextArea({ changeText, prompt }) {
  return (
    <>
      <Form.Control
        as="textarea"
        type="text"
        placeholder={prompt}
        onChange={(e) => {
          changeText(e.target.value);
        }}
        style={{ height: "300px", width: "200px" }}
      />
    </>
  );
}
export default TextArea;
