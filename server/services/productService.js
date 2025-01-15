const Product = require('../models/Product');

exports.getProducts = async (page, limit, sort, category) => {
  const query = category ? { category } : {};
  const total = await Product.countDocuments(query);
  const products = await Product.find(query)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    products,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
  };
};

exports.createProduct = async (productData) => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};

exports.updateProduct = async (productId, updateData) => {
  return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};

exports.deleteProduct = async (productId) => {
  return await Product.findByIdAndDelete(productId);
};
