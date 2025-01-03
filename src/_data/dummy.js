const fs = require('fs');
const path = require('path');
const eventData = require('./nextdata.json');

// Function to get jpg files from the directory path
function getJpgFilesFromDirectory(directoryPath) {
    // Resolve the directory path to an absolute path
    const fullPath = path.resolve(process.cwd(), 'src', directoryPath); // Add 'src/' back here

    // Check if the directory exists
    if (!fs.existsSync(fullPath)) {
        console.error(`Directory does not exist: ${fullPath}`);
        return [];
    }

    const files = fs.readdirSync(fullPath);
    const jpgFiles = files.filter(file => file.endsWith('.jpg'));

    return jpgFiles;  // Return all jpg files, not just the first one
}

// Function to process event data and return updated items
function getUpdatedEventItems() {
    // Ensure the original structure (title + items) is returned
    return {
        ...eventData,  // Include the title and items properties
        items: eventData.items.map(item => {
            // Add 'src/' back to item.images path during processing
            const jpgFiles = getJpgFilesFromDirectory(item.images);
            return {
                ...item,
                imageFiles: jpgFiles.length > 0 ? jpgFiles : null // Add only the jpg file names
            };
        })
    };
}

const updatedEventItems = getUpdatedEventItems();

// Export the JavaScript object (true JSON format)
module.exports = updatedEventItems;
