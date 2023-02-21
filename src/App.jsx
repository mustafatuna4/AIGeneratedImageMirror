import { useState } from "react";
import "./App.css";
import Image from "react-bootstrap/Image";
import index from "./assets/index.jpg";

import out from "./assets/out.png";
import "./arrow.css";
import React from "react";
import "./animatedArrow.css";
import Button from "react-bootstrap/Button";
import FormData from "form-data";
import imageService from "./services/imageService";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { CustomDropDown } from "./components/CustomDropDown";
import PlaceHolder from "./components/PlaceHolder";
import PromptList from "./components/PromptList";
function App() {
  const [imageSearch, setImageSearch] = React.useState(false);
  const [promptSearch, setPromptSearch] = React.useState(false);
  const [prompt, setPrompt] = React.useState({
    Context: "a painting of a starry night over a city",
    Author: "by Vincent Van Gogh",
    Source: "featured on deviantart",
    Inspiration: "post-impressionism",
    Style: "detailed painting",
    Background: "impressionism",
    Label: "masterpiece",
    Extra: "",
  });
  const [image, setImage] = React.useState("");
  const [generatedImage, setGeneratedImage] = React.useState("");
  const [searchMode, setSearchMode] = React.useState("#/action-1");
  const searchImage = async () => {
    try {
      setImageSearch(true);
      if (image) {
        const uid = v4();
        const imageRef = ref(storage, `/${image.name}${uid}`);
        await uploadBytes(imageRef, image);
        const imageLink = await getDownloadURL(imageRef);
        let response = await imageService.postImage(imageLink, searchMode);
        let temp = prompt;
        let index = 0;

        let count = (response.match(/,/g) || []).length;
        if (count === 5) {
          index = response.indexOf("by");
          response =
            response.substring(1, index) + "," + response.substring(index - 1);
        }
        index = 0;
        for (let i = 0; index !== -1; i++) {
          index = response.indexOf(",");
          if (index !== -1) {
            temp = {
              ...temp,
              [Object.keys(temp)[i]]: response.substring(1, index),
            };
            response = response.substring(index + 1);
          } else {
            temp = {
              ...temp,
              [Object.keys(temp)[i]]: response.substring(1),
            };
          }
        }
        setPrompt(temp);
        setImageSearch(false);
      } else {
        const imageLink =
          "https://firebasestorage.googleapis.com/v0/b/aigeneratedimagemirror.appspot.com/o/index.jpg44113d41-676e-47ca-bccd-05887e3e9256?alt=media&token=5c680e43-10f4-4559-bf6c-ea6793670517";
        let response = await imageService.postImage(imageLink, searchMode);
        let temp = prompt;
        let index = 0;

        let count = (response.match(/,/g) || []).length;
        if (count === 5) {
          index = response.indexOf("by");
          response =
            response.substring(1, index) + "," + response.substring(index - 1);
        }
        index = 0;
        for (let i = 0; index !== -1; i++) {
          index = response.indexOf(",");
          if (index !== -1) {
            temp = {
              ...temp,
              [Object.keys(temp)[i]]: response.substring(1, index),
            };
            response = response.substring(index + 1);
          } else {
            temp = {
              ...temp,
              [Object.keys(temp)[i]]: response.substring(1),
            };
          }
        }
        setPrompt(temp);
        setImageSearch(false);
      }
    } catch (error) {
      setImageSearch(false);
    }
  };

  const searchPrompt = async () => {
    let str = Object.keys(prompt).reduce(function (previous, key) {
      return previous + prompt[key] + ", ";
    }, "");
    str = str.substring(0, str.length - 3);
    try {
      setPromptSearch(true);
      const imageUrl = await imageService.getImage(str);
      setGeneratedImage(imageUrl);
    } catch {
      setPromptSearch(false);
    }
  };
  const selectMode = (mode) => {
    setSearchMode(mode);
  };
  return (
    <div className="App">
      <header className="App-header"> AI Generated Image Mirror </header>
      <div className="App-body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <Image
            style={{
              border: "2px solid black",
              marginTop: "3vh",
              marginBottom: "2vh",
              width: "20rem",
              height: "20rem",
            }}
            src={image ? URL.createObjectURL(image) : index}
            rounded={true}
          ></Image>
          <input
            style={{ maxWidth: "50vh", color: "white" }}
            type="file"
            name="myImage"
            onChange={(event) => {
              setImage(event.target.files[0]);
              let url = URL.createObjectURL(event.target.files[0]);
            }}
          />
        </div>
        <div>
          {imageSearch ? (
            <div style={{ width: "9rem" }}>
              <div
                style={{
                  width: "8rem",
                  marginBottom: "0vh",
                  marginTop: "0px",
                  marginLeft: "2px",
                }}
                className="animatedArrow"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                style={{
                  marginBottom: "1vh",
                }}
              >
                {searchMode === "#/action-1" ? "(0~20secs) " : "(0~5secs)"}
                <i>loading...</i>
              </div>
            </div>
          ) : (
            <div width={"350vh"} height={"350vh"}>
              <div
                style={{ width: "8rem", marginBottom: "0vh", marginTop: "0px" }}
                className="arrow"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          {imageSearch ? (
            ""
          ) : (
            <div>
              <Button
                type="submit"
                variant="secondary"
                style={{
                  whiteSpace: "nowrap",
                  marginTop: "-14vh",
                  width: "9rem",
                }}
                onClick={() => {
                  searchImage();
                }}
              >
                Search Image
              </Button>
            </div>
          )}
        </div>

        <div>
          <PromptList prompt={prompt} setPrompt={setPrompt}></PromptList>
        </div>

        <div>
          {promptSearch ? (
            <div
              style={{
                width: "9rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                className="animatedArrow"
                style={{
                  width: "8rem",
                  marginBottom: "0vh",
                  marginTop: "0px",
                  marginLeft: "2px",
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                style={{
                  marginBottom: "1vh",
                }}
              >
                <i>loading...</i>
              </div>
            </div>
          ) : (
            <div style={{ width: "8rem" }}>
              <div
                className="arrow"
                style={{ width: "8rem", marginBottom: "0vh", marginTop: "0px" }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          {promptSearch ? (
            ""
          ) : (
            <Button
              variant="secondary"
              type="submit"
              style={{
                whiteSpace: "nowrap",
                marginTop: "-14vh",
                width: "9rem",
              }}
              onClick={searchPrompt}
            >
              Search Prompt
            </Button>
          )}
        </div>
        <div>
          <Image
            style={{
              border: "2px solid black",
              width: "20rem",
              height: "20rem",
            }}
            rounded={true}
            onLoad={(e) => {
              setPromptSearch(false);
            }}
            src={generatedImage ? generatedImage : out}
          ></Image>
        </div>
      </div>
      <footer className="App-footer">Contact: acarmustafatuna@gmail.com</footer>
    </div>
  );
}
//display: "none"
/* 
<CustomDropDown
selectMode={selectMode}
mode={searchMode}
></CustomDropDown> */
export default App;
