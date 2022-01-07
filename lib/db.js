

import AWS from "aws-sdk";

// Update AWS config
AWS.config.update({
  accessKeyId: "AKIA3HGGNHFICWMLNQPX", // Do NOT HARD-CODE your secret credentials here
  secretAccessKey: "8BbS77klFDh7P80zpAgPhcuv4+5cuo0Rzj3Usmjl", // Do NOT HARD-CODE your secret credentials here
  region: "us-east-1",
});

// Create DynamoDB service object
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

export default db;
