const fs = require('fs');
const path = require('path');

const assetsDir = './archivos';
const outputFile = './script.js';

console.log('Generando la lista de archivos multimedia...');

fs.readdir(assetsDir, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    const mediaFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mov', '.avi'].includes(ext);
    }).map(file => {
        const ext = path.extname(file).toLowerCase();
        const type = ['.jpg', '.jpeg', '.png', '.gif'].includes(ext) ? 'image' : 'video';
        return `        { type: '${type}', src: 'archivos/${file}' }`;
    });

    const fileContent = `    const mediaFiles = [\n${mediaFiles.join(',\n')}\n    ];`;

    // Lee el contenido del archivo script.js
    fs.readFile(outputFile, 'utf8', (readErr, scriptContent) => {
        if (readErr) {
            console.error('Error al leer el archivo script.js:', readErr);
            return;
        }

        // Reemplaza el marcador con la lista de archivos
        const updatedContent = scriptContent.replace(
            /\/\/ ESTA LISTA FUE GENERADA AUTOMATICAMENTE[\s\S]*?\/\/ FIN DE LA LISTA GENERADA AUTOMATICAMENTE/,
            `// ESTA LISTA FUE GENERADA AUTOMATICAMENTE\n${fileContent}\n    // FIN DE LA LISTA GENERADA AUTOMATICAMENTE`
        );

        // Escribe el contenido actualizado de vuelta al archivo
        fs.writeFile(outputFile, updatedContent, 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error al escribir en el archivo script.js:', writeErr);
                return;
            }
            console.log('¡Lista de archivos generada con éxito!');
            console.log('Ahora puedes ejecutar tu servidor local y ver la galería actualizada.');
        });
    });
});