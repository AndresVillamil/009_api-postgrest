

// Archivo sujerido para que funcione

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Api-Videojuegos</title>
<style>
body { font-family: Arial; background: black; color: white; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid white; padding: 8px; }
</style>
</head>
<body>

<h1>Api-Videojuegos</h1>
<p>Servidor Activo</p>

<table>
<thead>
<tr>
<th>Nombre</th>
<th>Genero</th>
<th>Plataforma</th>
<th>Precio</th>
</tr>
</thead>
<tbody id="tabla"></tbody>
</table>

<script>
fetch('/api/videojuegos')
.then(res => res.json())
.then(data => {
    const tabla = document.getElementById('tabla');

    data.data.forEach(juego => {
        tabla.innerHTML += \`
            <tr>
                <td>\${juego.nombre}</td>
                <td>\${juego.genero}</td>
                <td>\${juego.plataforma}</td>
                <td>\${juego.precio}</td>
            </tr>
        \`;
    });
});
</script>

</body>
</html>
`);
});