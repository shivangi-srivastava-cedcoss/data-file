import React from "react";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
fetch(
  proxyUrl +
    "https://shivangi12959.github.io/data-file/taxonomy-with-ids.en-US.txt"
)
  .then(e => e.text())
  .then(req => {
    var a = req.split("\n");
    a.shift();
    a.pop();
    a.forEach(element => {
      var b = element.split(">");
      if (b.length == 1) {
        console.log({ ...b, child: 1 });
      }
    });
  });
export default function App() {
  return <div id="req" />;
