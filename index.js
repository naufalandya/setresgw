const fs = require("fs");
const path = require("path");
const axios = require("axios");

const FormData = require("form-data");
const formData = new FormData();

formData.append(
  "projects",
  JSON.stringify([
    {
      title: "New Project Milestone",
      date: "2024-11-22",
      notes: ["wefefwef", "aaa", "fewefefwwf", "etntnnt"],
    },
    {
      title: "Second Project Milestone",
      date: "2024-12-01",
      notes: ["example note 1", "example note 2", "example note 3"],
    },
  ])
);

formData.append("pdf", fs.createReadStream("./pdfs/ChatGPT (1).pdf"));
formData.append("pdf", fs.createReadStream("./pdfs/Model Prisma Enum Finansial (1).pdf"));

axios
  .post("http://103.196.155.16/api/v1/milestone/pltu-jawa-7", formData, {
    headers: formData.getHeaders(),
  })
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response?.data || error.message);
  });
