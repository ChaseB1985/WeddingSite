// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/registry", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/registry.html"));
  });

  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/events.html"));
  });

  app.get("/photos", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/photos.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
};
