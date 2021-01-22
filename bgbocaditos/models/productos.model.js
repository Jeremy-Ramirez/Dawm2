module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define("productos", {
      
      nombre: {
        type: DataTypes.STRING
      },
      descripcion: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.FLOAT
      },
      imagen:{
        type: DataTypes.STRING
      }
    });
  
    return Productos;
  };