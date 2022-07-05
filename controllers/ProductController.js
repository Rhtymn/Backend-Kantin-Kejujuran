import Product from "../models/productModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveProduct = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  // product name
  const name = req.body.name;

  // product price
  const price = req.body.price;

  // product description
  const description = req.body.description;

  // file name
  const file = req.files.file;

  // file size
  const fileSize = file.data.length;

  //file extension
  const ext = path.extname(file.name);

  // convert file name to md5
  const fileName = file.md5 + ext;

  // image url
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  // allowed image type
  const allowedType = [".png", ".jpg", ".jpeg"];

  // extension validation
  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });

  // filesize validation
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be lest than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        name: name,
        price: price,
        description: description,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Product Created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = (req, res) => {};
export const deleteProduct = async (req, res) => {
  // get product
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });

  // product validation
  if (!product) return res.status(404).json({ msg: "No Data Found" });

  try {
    // delete files in images folder
    const filepath = `./public/images/${product.image}`;
    fs.unlinkSync(filepath);

    // delete data from database
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Product Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     res.json(products);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findAll({ where: { id: req.params.id } });
//     res.json(product[0]);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const createProduct = async (req, res) => {
//   try {
//     await Product.create(req.body);
//     res.json({ message: "Product Created" });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const updateProduct = async (req, res) => {
//   try {
//     await Product.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json({ message: "Product Updated" });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const deleteProduct = async (req, res) => {
//   try {
//     await Product.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json({ message: "Product Deleted" });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };
