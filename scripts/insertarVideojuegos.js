const { pool } = require('../configuracion/baseDatos');

const insertarVideojuegos = async () => {
  try {
    console.log('🚀 Insertando videojuegos...');

    const consulta = `
      INSERT INTO videojuegos 
      (nombre, genero, plataforma, precio, fecha_lanzamiento, desarrollador, descripcion)
      VALUES
      ('Mario Kart 8 Deluxe', 'Carreras', 'Nintendo Switch', 49.99, '2017-11-18', 'Nintendo', 'Juego de carreras con personajes de Nintendo'),
      ('The Legend of Zelda: Breath of the Wild', 'Aventura', 'Nintendo Switch', 59.99, '2017-03-03', 'Nintendo', 'Exploración de mundo abierto en Hyrule'),
      ('God of War', 'Acción', 'PS4', 39.99, '2018-04-20', 'Santa Monica Studio', 'Historia de Kratos en la mitología nórdica'),
      ('Halo Infinite', 'Shooter', 'Xbox Series X', 59.99, '2021-12-08', '343 Industries', 'FPS de ciencia ficción'),
      ('FIFA 23', 'Deportes', 'Multiplataforma', 59.99, '2022-09-30', 'EA Sports', 'Simulador de fútbol'),
      ('Minecraft', 'Sandbox', 'Multiplataforma', 26.95, '2011-11-18', 'Mojang', 'Juego de construcción y exploración'),
      ('Cyberpunk 2077', 'RPG', 'PC', 49.99, '2020-12-10', 'CD Projekt Red', 'Mundo abierto futurista'),
      ('Call of Duty: Warzone', 'Battle Royale', 'Multiplataforma', 0.00, '2020-03-10', 'Infinity Ward', 'Battle royale gratuito'),
      ('Red Dead Redemption 2', 'Aventura', 'PS4', 59.99, '2018-10-26', 'Rockstar Games', 'Historia del viejo oeste'),
      ('The Witcher 3: Wild Hunt', 'RPG', 'PC', 39.99, '2015-05-19', 'CD Projekt Red', 'Historia de Geralt de Rivia')
    RETURNING *;
    `;

    const resultado = await pool.query(consulta);

    console.log(`✅ ${resultado.rowCount} videojuegos insertados correctamente`);
    console.table(resultado.rows);

  } catch (error) {
    console.error('❌ Error al insertar videojuegos:', error.message);
  } finally {
    await pool.end();
  }
};

insertarVideojuegos();