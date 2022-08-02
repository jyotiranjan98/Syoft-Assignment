const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(
    'mongodb+srv://jyoti:jyotiranjan-123@cluster0.jvfq1ah.mongodb.net/test'
  );
};
