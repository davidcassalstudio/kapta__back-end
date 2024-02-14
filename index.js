const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

console.log("Funcionando");
