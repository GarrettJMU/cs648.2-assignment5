const { getDb, getNextSequence } = require('./db.js')

async function productList() {
  const db = getDb()
  const products = await db.collection('products').find({}).toArray()
  return products
}

async function productAdd(_, { product }) {
  const db = getDb()
  const newProduct = { ...product }
  newProduct.id = await getNextSequence('products')
  const result = await db.collection('products').insertOne(newProduct)
  const savedProduct = await db.collection('products').findOne({ _id: result.insertedId })
  return savedProduct
}

async function productGet(_, { id }) {
  const db = getDb()
  const product = await db.collection('products').findOne({ id })
  return product
}

async function productUpdate(_, { id, modify }) {
  const db = getDb()
  await db.collection('products').updateOne({ id }, { $set: modify })
  const savedProduct = await db.collection('products').findOne({ id })
  return savedProduct
}

async function productDelete(_, { id }) {
  console.log('  Delete product ID: ', id)
  const db = getDb()
  const product = await db.collection('products').findOne({ id })
  if (!product) return false
  await db.collection('products').removeOne({ id })
  return true
}

module.exports = { productList, productAdd, productGet, productUpdate, productDelete }