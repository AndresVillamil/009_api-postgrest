
// Archivo no funciona

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Api-Videojuegos</title>
    <style>
        html{
            height: 100%;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: black;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        table {
            width: 100%;
            color: #666;
        }
        th, td {
            border: 1px solid #f8f6f6;
            padding: 8px;
        }
    </style>
</head>
<body>
    <div>
        <h1>Api-Videojuegos</h1>
        <p>Servidor Activo</p>
        <section>
            <table id="tabla-videojuegos">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Genero</th>
                        <th>Plataforma</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Los datos se llenarán dinámicamente -->
                </tbody>
            </table>
        </section>

    </div>
</body>
</html>
`);
});
