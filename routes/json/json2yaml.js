
var jsonlint = require("jsonlint");
var YAML = require('yamljs');

// convert a json text to a yaml text
// return yaml string
function convertJSONtoYAML(jsonText) {
    try {
        jsonlint.parse(jsonText);
    } catch (e) {
        return e.toString();
    }
    var jsonObj = JSON.parse(jsonText);
    return YAML.stringify(jsonObj, 100, 2);
}

module.exports = convertJSONtoYAML;
