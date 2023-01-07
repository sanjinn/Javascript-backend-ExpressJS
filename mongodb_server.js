const mongoose = require('mongoose')

const MongoDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI)
  console.log(`MongoDB is running at ${conn.connection.host}`)
}

module.exports = MongoDB