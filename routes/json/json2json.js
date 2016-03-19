
var jsonlint = require("jsonlint");
var CSON = require('cson');

// pretty print json
function convertJSONtoJSON(jsonText) {
    try {
        jsonlint.parse(jsonText);
    } catch (e) {
        return e.toString();
    }
    var jsonObj = JSON.parse(jsonText);
    return JSON.stringify(jsonObj, null, "\t");
}

module.exports = convertJSONtoJSON;
