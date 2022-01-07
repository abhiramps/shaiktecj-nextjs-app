/** @format */

import db from "../../lib/db";

const TABLE = "sheikteck";

// ID IS EMAIL!!!

export default async function (req, res) {
  const id = req.query.id;
  // filter API requests by method
  if (req.method === "GET") {
    // Allow a blog post to get its number of likes and views
    const params = {
      TableName: TABLE,
      Key: {
        id: id,
      },
    };

    db.get(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        // send the json response from the callback
        res.json(data.Item);
      }
    });
  } else if (req.method === "PUT") {
    const body = req.body;
    const fleet = body.fleet || [];
    /**
     * Fleet = {
            location: "delhi"
            name: "first"
            speed: 100
            status: "online"
            tank: "diesel"
     * }
     */
    const params = {
      TableName: TABLE,
      Item: {
        id: id,
        fleet: [...fleet],
      },
    };
    console.log("Creating", params);
    // Allow a blog post to update its likes (via a button) or views (on rendering)
    db.put(params, (err, data) => {
      if (err) console.log(err);
      else console.log(data);

      res.send(data || err);
    });
  }
}
