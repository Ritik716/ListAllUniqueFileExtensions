const fs = require('fs');
const path = require('path');

function findUniqueExtensions(directory) {
    const uniqueExtensions = new Set();

    function traverseDir(currentDir) {
        fs.readdirSync(currentDir).forEach(file => {
            const fullPath = path.join(currentDir, file);
            const stats = fs.statSync(fullPath);

            if (stats.isFile()) {
                const extension = path.extname(file);
                if (extension) {
                    uniqueExtensions.add(extension);
                }
            } else if (stats.isDirectory()) {
                traverseDir(fullPath);
            }
        });
    }

    traverseDir(directory);
    return uniqueExtensions;
}

const projectDirectory = `/home/ritik/Desktop/parent-of-voyager/voyager-ritik`;
const extensions = findUniqueExtensions(projectDirectory);
console.log("Unique File Extensions:");
extensions.forEach(extension => console.log(extension));
