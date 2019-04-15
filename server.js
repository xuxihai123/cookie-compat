#!/usr/bin/env node

const path = require("path");
const express = require("express");

const app = express();

const index = path.resolve(__dirname, "index.html");
console.log(`index:${index}`);
// handle fallback for HTML5 history API
app.get("/", (req, res) => {
  res.sendFile(index);
});
app.get("/login", (req, res, next) => {
  // console.log(req.get('cookie'));
  // console.log(req.get('Cookie'));
  // console.log(req.query.setCookie);

  // res.cookie('SNC_ACCESS_TOKEN', '1b5c155998e27661cc00b586d37346f3');
  // const cookie = 'SNC_ACCESS_TOKEN=e7e24b7d39eb0abaa3820ce3b574cc1a;Version=1;Comment=;Path=/';
  // const cookie = 'GATEWAY_ACCESS_TOKEN=d1c5d14a73e5b1d995cfe5e5d7fe5012;Version=1;Comment=;Domain=*;Path=/';
  // const cookie = 'GATEWAY_ACCESS_TOKEN=d1c5d14a73e5b1d995cfe5e5d7fe5012;Version=1;Comment=;Path=/';
  // console.log(cookie);
  res.set("set-cookie", req.query.setCookie);
  res.send("okok");
});
app.listen(9000, () => console.log("test server listening on port 9000!"));
