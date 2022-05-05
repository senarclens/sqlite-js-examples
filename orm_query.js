const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'northwind.sqlite',
});

// Define the model
const Shipper = sequelize.define('Shipper', {
  ShipperId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CompanyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
  tableName: 'Shippers',
});
Shipper.removeAttribute('createdAt');
Shipper.removeAttribute('updatedAt');

(async () => {
  const shippers = await Shipper.findAll();
  console.log(shippers.every(shipper => shipper instanceof Shipper));
  console.log("All shippers:", JSON.stringify(shippers, null, 2));
})();
