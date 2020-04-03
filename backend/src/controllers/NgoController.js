const generateUniqueId = require ('../utils/generateUniqueId'); 
const connection = require('../database');

module.exports = {
  async index(req, res) {
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);    
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();
  
    await connection('ngos').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
  
    return res.json({ id });    
  }
}