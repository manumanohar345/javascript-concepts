// soring in DataTransfer
function soringInDataTransfer() {
    const dataTransfer = new DataTransfer();
    const files = [
        new File(["content1"], "file1.txt", { type: "text/plain" }),
        new File(["content2"], "file2.txt", { type: "text/plain" }),
        new File(["content3"], "file3.txt", { type: "text/plain" })
    ];

    // Add files to DataTransfer
    files.forEach(file => dataTransfer.items.add(file));

    // Sort files by name
    const sortedFiles = Array.from(dataTransfer.files).sort((a, b) => a.name.localeCompare(b.name));

    // Clear DataTransfer and add sorted files
    dataTransfer.items.clear();
    sortedFiles.forEach(file => dataTransfer.items.add(file));

    // Log sorted file names
    console.log("Sorted Files:", sortedFiles.map(file => file.name));
}