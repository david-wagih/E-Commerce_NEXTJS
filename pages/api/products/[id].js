import nc from "next-connect";
import Product from "../../../models/Product";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id); // get all products not anyone specific
  await db.disconnect();
  res.send(product); // send it to the front end
});

export default handler;
