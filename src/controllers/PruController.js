const Pru = require('../models/Pru');

module.exports = {
  async index(req, res) {
    const prus = await Pru.find({}).sort('-createdAt');
    return res.json(prus);
  },
  async store(req, res) {
    const pru = await Pru.create(req.body);

    req.io.emit('pru', pru);

    return res.json(pru);
  },

}