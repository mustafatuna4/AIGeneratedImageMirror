import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useCallback } from "react";
import "../App.css";
function PromptList({ prompt, setPrompt }) {
  const [promptObj, setPromptObj] = React.useState(prompt);
  const handlePrompts = async (event) => {
    event.preventDefault();
    const ref = event.target.id;
    const val = event.target.value;

    setPromptObj((prevPrompt) => {
      return { ...prevPrompt, [ref]: val };
    });
    //setTimeout(setPrompt(promptObj), 1000);
    //setPrompt(promptObj);
  };
  React.useEffect(() => {
    setPrompt(promptObj);
  }, [promptObj]);
  React.useEffect(() => {
    setPromptObj(prompt);
  }, [prompt]);
  return (
    <>
      <InputGroup
        style={{ display: "flex", flexDirection: "column" }}
        className="mb-3"
      >
        <div className="Prompt-box">
          <InputGroup.Text
            style={{ backgroundImage: "linear-gradient(#044187, #25292e)" }}
            id="context"
            className="Prompt-title"
          >
            Context:
          </InputGroup.Text>
          <Form.Control
            style={{
              webkitTextStroke: "0.5px #044187",
              border: "#044187 solid 3px",
            }}
            className="Prompt-text"
            value={promptObj.Context}
            onChange={handlePrompts}
            id="Context"
            aria-describedby="context"
          />
        </div>
        <div className="Prompt-box">
          <InputGroup.Text
            className="Prompt-title"
            style={{ backgroundImage: "linear-gradient(#1a8704, #25292e)" }}
            id="author"
          >
            Author:
          </InputGroup.Text>
          <Form.Control
            style={{
              webkitTextStroke: "0.5px #1a8704",
              border: "#1a8704 solid 3px",
            }}
            className="Prompt-text"
            value={promptObj.Author}
            onChange={handlePrompts}
            id="Author"
            aria-describedby="author"
          />
        </div>
        <div className="Prompt-box">
          <InputGroup.Text
            className="Prompt-title"
            style={{ backgroundImage: "linear-gradient(#875d04, #25292e)" }}
            id="source"
          >
            Source:
          </InputGroup.Text>
          <Form.Control
            style={{
              webkitTextStroke: "0.5px #875d04",
              border: "#875d04 solid 3px",
            }}
            className="Prompt-text"
            value={promptObj.Source}
            onChange={handlePrompts}
            id="Source"
            aria-describedby="source"
          />
        </div>

        <div className="Prompt-box">
          <InputGroup.Text
            style={{
              backgroundImage: "linear-gradient(#870485, #25292e)",
            }}
            className="Prompt-title"
            id="inspiration"
          >
            Inspiration:
          </InputGroup.Text>
          <Form.Control
            style={{
              webkitTextStroke: "0.5px #870485",
              border: "#870485 solid 3px",
            }}
            className="Prompt-text"
            value={promptObj.Inspiration}
            onChange={handlePrompts}
            id="Inspiration"
            aria-describedby="inspiration"
          />
        </div>
        <div className="Prompt-box">
          <InputGroup.Text
            className="Prompt-title"
            id="Style"
            style={{ backgroundImage: "linear-gradient(#870413, #25292e)" }}
          >
            Style:
          </InputGroup.Text>
          <Form.Control
            style={{
              webkitTextStroke: "0.5px #870413",
              border: "#870413 solid 3px",
            }}
            className="Prompt-text"
            value={promptObj.Style}
            onChange={handlePrompts}
            id="Style"
            aria-describedby="style"
          />
        </div>
        <div className="Prompt-box">
          <InputGroup.Text
            className="Prompt-title"
            id="background"
            style={{ backgroundImage: "linear-gradient(#048773, #25292e)" }}
          >
            Background:
          </InputGroup.Text>
          <Form.Control
            style={{
              webkitTextStroke: "0.5px #048773",
              border: "#048773 solid 3px",
            }}
            className="Prompt-text"
            value={promptObj.Background}
            onChange={handlePrompts}
            id="Background"
            aria-describedby="background"
          />
        </div>
        <div className="Prompt-box">
          <InputGroup.Text
            className="Prompt-title"
            style={{ backgroundImage: "linear-gradient(#de14b3, #25292e)" }}
            id="label"
          >
            Label:
          </InputGroup.Text>
          <Form.Control
            style={{
              border: "#de14b3 solid 3px",
              webkitTextStroke: "0.5px #de14b3",
            }}
            className="Prompt-text"
            onChange={handlePrompts}
            value={promptObj.Label}
            id="Label"
            aria-describedby="label"
          />
        </div>
        <div className="Prompt-box">
          <InputGroup.Text
            className="Prompt-title"
            style={{
              backgroundImage: "linear-gradient(#464d55, #25292e)",
            }}
            id="label"
          >
            Extra:
          </InputGroup.Text>
          <Form.Control
            style={{
              border: "#464d55 solid 3px",
              webkitTextStroke: "0.5px #464d55",
            }}
            className="Prompt-text"
            onChange={handlePrompts}
            value={promptObj.Extra}
            placeholder="Add extra prompts"
            id="Extra"
            aria-describedby="label"
          />
        </div>
      </InputGroup>
    </>
  );

  //<Form.Control as="textarea" type="text" placeholder={"prompt"} />
}

export default PromptList;
{
  /* <ListGroup>
          <ListGroup.Item>No style</ListGroup.Item>
          <ListGroup.Item variant="primary">Primary</ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            Secondary
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            Success
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            Danger
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            Warning
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Info
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Light
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dark
          </ListGroup.Item>
        </ListGroup> */
}
