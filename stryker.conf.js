module.exports = function(config) {
  config.set({
    testRunner: "jest",
    mutator: "javascript",
    transpilers: [],
    reporter: ["clear-text", "progress"],
    coverageAnalysis: "all",
    files: ["cartas/**", "matriz-escada/**"],
    mutate: ["matriz-escada/src/*.js"]
  });
};
