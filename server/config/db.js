module.exports = {
  urls:
    process.env.DATABASE_URL ||
    'mongodb+srv://admin:123@cluster0.ybyop.mongodb.net/test',
  port: 27017,
};
