import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
export function CustomDropDown({ selectMode, mode }) {
  return (
    <div>
      <Dropdown
        style={{
          width: "14rem",

          marginTop: "1vh",
        }}
        onSelect={(e) => {
          selectMode(e);
        }}
      >
        <Dropdown.Toggle variant="secondary">
          {mode === "#/action-1"
            ? "Detailed Search ~(0-40secs)"
            : "Fast Search ~(0-5secs)"}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Detailed Search ~(0-40secs)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Fast Search ~(0-5secs)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
