export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === "/" || url.pathname === "/yourfile.bin") {
      // Your base64 encoded binary data from the file you converted earlier
      const base64BinData = "YOUR_BASE64_ENCODED_BIN_FILE"; // Paste your base64 string here
      
      // Convert base64 to ArrayBuffer
      const binData = Uint8Array.from(atob(base64BinData), c => c.charCodeAt(0)).buffer;
      
      return new Response(binData, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": "attachment; filename=yourfile.bin" // Change filename as needed
        }
      });
    }
    
    return new Response("Not found", { status: 404 });
  }
}
