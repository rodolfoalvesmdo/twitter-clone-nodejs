const Pru = require('../models/Pru');

module.exports = {
  async store(req, res) {
    const pru = await Pru.findById(req.params.id);
    
    pru.set({ likes: pru.likes + 1 });
    await pru.save();

    req.io.emit('like', pru);

    return res.json(pru);
  }
}