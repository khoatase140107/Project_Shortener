import React, { useState } from "react";
import axios from "axios";
import "./style/style.css";
import { Link } from 'react-router-dom';
export default function LinkShortenerComponent() {
  const [domain, setDomain] = useState("shrtco");
  const apiGetLink = "https://api.shrtco.de/v2/shorten?url=";
  const [url,setUrl] = useState(null);
  const [data,setData] = useState(null);
  const onChangHandler = (e) => {
    setUrl(e.target.value);
  }
  const onChangeDomain = (value) => {
    setDomain(value);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const response = axios.get(apiGetLink + url);
    response.then(res => {
        console.log(res)
        if(res.status === 201){
            setUrl(null);
            if(domain === "shrtco"){
                setData(res.data.result.short_link);
                
            }else if (domain === "9qr"){
                setData(res.data.result.short_link2);
            }else{
                setData(res.data.result.short_link3);
            }
        }
    }).catch(err => {
        console.error(err);
    })
  }
  return (
    <div className="linkShoter">
      <h1 className="headerTittle">
        The <p className="title">privacy-friendly</p> URL Shortener
      </h1>
      4
      <div className="contain">
        <h1>Link Shortener</h1>
        <div>
          <form onSubmit={onSubmitHandler}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <p style={{ marginRight: 20 }}>Enter a Link: </p>
              <input
                style={{
                  width: 200,
                  padding: "10px 0",
                }}
                className="input"
                placeholder="example.com"
                onChange={onChangHandler}
                value={url === null ? "" : url}
              />
              <input
                type="submit"
                style={{
                  padding: "10px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 20,
                alignItems: "baseline",
              }}
            >
              <p style={{ marginRight: 20 }}>Short domain: </p>
              <button
                className={
                  domain === "shrtco" ? "choiceBtn active" : "choiceBtn"
                }
                onClick={() => {
                    onChangeDomain("shrtco");
                }}
              >
                shrtco.de
              </button>
              <button
                style={{
                  margin: "0 10px",
                }}
                className={domain === "9qr" ? "choiceBtn active" : "choiceBtn"}
                onClick={() => {
                    onChangeDomain("9qr");
                }}
              >
                9qr.de
              </button>
              <button
                className={
                  domain === "shiny" ? "choiceBtn active" : "choiceBtn"
                }
                onClick={() => {
                    onChangeDomain("shiny");
                }}
              >
                shiny.link
              </button>
            </div>
          </form>
        </div>
        <p>
          With this free Link Shortener you can make Links shorter and easier to
          remember. Just enter a Link into the form and click on the above
          Button to generate a short Link.When visiting the short-Link, the
          short-Link will immediately redirect you to the long Link
        </p>
      </div>
      {
        data !== null ?<div className="linkGenerate">
        <h1>Link generated!</h1>
        <p className="link"><a href={"https://" +data} target="_blank">{data}</a></p>
      </div> : null
      }
      
    </div>
  );
}
