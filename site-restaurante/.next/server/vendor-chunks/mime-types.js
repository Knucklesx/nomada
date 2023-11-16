"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mime-types";
exports.ids = ["vendor-chunks/mime-types"];
exports.modules = {

/***/ "(rsc)/./node_modules/mime-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-types/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*!\n * mime-types\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */ \n/**\n * Module dependencies.\n * @private\n */ var db = __webpack_require__(/*! mime-db */ \"(rsc)/./node_modules/mime-db/index.js\");\nvar extname = (__webpack_require__(/*! path */ \"path\").extname);\n/**\n * Module variables.\n * @private\n */ var EXTRACT_TYPE_REGEXP = /^\\s*([^;\\s]*)(?:;|\\s|$)/;\nvar TEXT_TYPE_REGEXP = /^text\\//i;\n/**\n * Module exports.\n * @public\n */ exports.charset = charset;\nexports.charsets = {\n    lookup: charset\n};\nexports.contentType = contentType;\nexports.extension = extension;\nexports.extensions = Object.create(null);\nexports.lookup = lookup;\nexports.types = Object.create(null);\n// Populate the extensions/types maps\npopulateMaps(exports.extensions, exports.types);\n/**\n * Get the default charset for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */ function charset(type) {\n    if (!type || typeof type !== \"string\") {\n        return false;\n    }\n    // TODO: use media-typer\n    var match = EXTRACT_TYPE_REGEXP.exec(type);\n    var mime = match && db[match[1].toLowerCase()];\n    if (mime && mime.charset) {\n        return mime.charset;\n    }\n    // default text/* to utf-8\n    if (match && TEXT_TYPE_REGEXP.test(match[1])) {\n        return \"UTF-8\";\n    }\n    return false;\n}\n/**\n * Create a full Content-Type header given a MIME type or extension.\n *\n * @param {string} str\n * @return {boolean|string}\n */ function contentType(str) {\n    // TODO: should this even be in this module?\n    if (!str || typeof str !== \"string\") {\n        return false;\n    }\n    var mime = str.indexOf(\"/\") === -1 ? exports.lookup(str) : str;\n    if (!mime) {\n        return false;\n    }\n    // TODO: use content-type or other module\n    if (mime.indexOf(\"charset\") === -1) {\n        var charset = exports.charset(mime);\n        if (charset) mime += \"; charset=\" + charset.toLowerCase();\n    }\n    return mime;\n}\n/**\n * Get the default extension for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */ function extension(type) {\n    if (!type || typeof type !== \"string\") {\n        return false;\n    }\n    // TODO: use media-typer\n    var match = EXTRACT_TYPE_REGEXP.exec(type);\n    // get extensions\n    var exts = match && exports.extensions[match[1].toLowerCase()];\n    if (!exts || !exts.length) {\n        return false;\n    }\n    return exts[0];\n}\n/**\n * Lookup the MIME type for a file path/extension.\n *\n * @param {string} path\n * @return {boolean|string}\n */ function lookup(path) {\n    if (!path || typeof path !== \"string\") {\n        return false;\n    }\n    // get the extension (\"ext\" or \".ext\" or full path)\n    var extension = extname(\"x.\" + path).toLowerCase().substr(1);\n    if (!extension) {\n        return false;\n    }\n    return exports.types[extension] || false;\n}\n/**\n * Populate the extensions and types maps.\n * @private\n */ function populateMaps(extensions, types) {\n    // source preference (least -> most)\n    var preference = [\n        \"nginx\",\n        \"apache\",\n        undefined,\n        \"iana\"\n    ];\n    Object.keys(db).forEach(function forEachMimeType(type) {\n        var mime = db[type];\n        var exts = mime.extensions;\n        if (!exts || !exts.length) {\n            return;\n        }\n        // mime -> extensions\n        extensions[type] = exts;\n        // extension -> mime\n        for(var i = 0; i < exts.length; i++){\n            var extension = exts[i];\n            if (types[extension]) {\n                var from = preference.indexOf(db[types[extension]].source);\n                var to = preference.indexOf(mime.source);\n                if (types[extension] !== \"application/octet-stream\" && (from > to || from === to && types[extension].substr(0, 12) === \"application/\")) {\n                    continue;\n                }\n            }\n            // set the extension -> mime\n            types[extension] = type;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWltZS10eXBlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVEO0FBRUE7OztDQUdDLEdBRUQsSUFBSUEsS0FBS0MsbUJBQU9BLENBQUM7QUFDakIsSUFBSUMsVUFBVUQsaURBQXVCO0FBRXJDOzs7Q0FHQyxHQUVELElBQUlFLHNCQUFzQjtBQUMxQixJQUFJQyxtQkFBbUI7QUFFdkI7OztDQUdDLEdBRURDLGVBQWUsR0FBR0M7QUFDbEJELGdCQUFnQixHQUFHO0lBQUVHLFFBQVFGO0FBQVE7QUFDckNELG1CQUFtQixHQUFHSTtBQUN0QkosaUJBQWlCLEdBQUdLO0FBQ3BCTCxrQkFBa0IsR0FBR08sT0FBT0MsTUFBTSxDQUFDO0FBQ25DUixjQUFjLEdBQUdHO0FBQ2pCSCxhQUFhLEdBQUdPLE9BQU9DLE1BQU0sQ0FBQztBQUU5QixxQ0FBcUM7QUFDckNFLGFBQWFWLFFBQVFNLFVBQVUsRUFBRU4sUUFBUVMsS0FBSztBQUU5Qzs7Ozs7Q0FLQyxHQUVELFNBQVNSLFFBQVNVLElBQUk7SUFDcEIsSUFBSSxDQUFDQSxRQUFRLE9BQU9BLFNBQVMsVUFBVTtRQUNyQyxPQUFPO0lBQ1Q7SUFFQSx3QkFBd0I7SUFDeEIsSUFBSUMsUUFBUWQsb0JBQW9CZSxJQUFJLENBQUNGO0lBQ3JDLElBQUlHLE9BQU9GLFNBQVNqQixFQUFFLENBQUNpQixLQUFLLENBQUMsRUFBRSxDQUFDRyxXQUFXLEdBQUc7SUFFOUMsSUFBSUQsUUFBUUEsS0FBS2IsT0FBTyxFQUFFO1FBQ3hCLE9BQU9hLEtBQUtiLE9BQU87SUFDckI7SUFFQSwwQkFBMEI7SUFDMUIsSUFBSVcsU0FBU2IsaUJBQWlCaUIsSUFBSSxDQUFDSixLQUFLLENBQUMsRUFBRSxHQUFHO1FBQzVDLE9BQU87SUFDVDtJQUVBLE9BQU87QUFDVDtBQUVBOzs7OztDQUtDLEdBRUQsU0FBU1IsWUFBYWEsR0FBRztJQUN2Qiw0Q0FBNEM7SUFDNUMsSUFBSSxDQUFDQSxPQUFPLE9BQU9BLFFBQVEsVUFBVTtRQUNuQyxPQUFPO0lBQ1Q7SUFFQSxJQUFJSCxPQUFPRyxJQUFJQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQzdCbEIsUUFBUUcsTUFBTSxDQUFDYyxPQUNmQTtJQUVKLElBQUksQ0FBQ0gsTUFBTTtRQUNULE9BQU87SUFDVDtJQUVBLHlDQUF5QztJQUN6QyxJQUFJQSxLQUFLSSxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUc7UUFDbEMsSUFBSWpCLFVBQVVELFFBQVFDLE9BQU8sQ0FBQ2E7UUFDOUIsSUFBSWIsU0FBU2EsUUFBUSxlQUFlYixRQUFRYyxXQUFXO0lBQ3pEO0lBRUEsT0FBT0Q7QUFDVDtBQUVBOzs7OztDQUtDLEdBRUQsU0FBU1QsVUFBV00sSUFBSTtJQUN0QixJQUFJLENBQUNBLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ3JDLE9BQU87SUFDVDtJQUVBLHdCQUF3QjtJQUN4QixJQUFJQyxRQUFRZCxvQkFBb0JlLElBQUksQ0FBQ0Y7SUFFckMsaUJBQWlCO0lBQ2pCLElBQUlRLE9BQU9QLFNBQVNaLFFBQVFNLFVBQVUsQ0FBQ00sS0FBSyxDQUFDLEVBQUUsQ0FBQ0csV0FBVyxHQUFHO0lBRTlELElBQUksQ0FBQ0ksUUFBUSxDQUFDQSxLQUFLQyxNQUFNLEVBQUU7UUFDekIsT0FBTztJQUNUO0lBRUEsT0FBT0QsSUFBSSxDQUFDLEVBQUU7QUFDaEI7QUFFQTs7Ozs7Q0FLQyxHQUVELFNBQVNoQixPQUFRa0IsSUFBSTtJQUNuQixJQUFJLENBQUNBLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ3JDLE9BQU87SUFDVDtJQUVBLG1EQUFtRDtJQUNuRCxJQUFJaEIsWUFBWVIsUUFBUSxPQUFPd0IsTUFDNUJOLFdBQVcsR0FDWE8sTUFBTSxDQUFDO0lBRVYsSUFBSSxDQUFDakIsV0FBVztRQUNkLE9BQU87SUFDVDtJQUVBLE9BQU9MLFFBQVFTLEtBQUssQ0FBQ0osVUFBVSxJQUFJO0FBQ3JDO0FBRUE7OztDQUdDLEdBRUQsU0FBU0ssYUFBY0osVUFBVSxFQUFFRyxLQUFLO0lBQ3RDLG9DQUFvQztJQUNwQyxJQUFJYyxhQUFhO1FBQUM7UUFBUztRQUFVQztRQUFXO0tBQU87SUFFdkRqQixPQUFPa0IsSUFBSSxDQUFDOUIsSUFBSStCLE9BQU8sQ0FBQyxTQUFTQyxnQkFBaUJoQixJQUFJO1FBQ3BELElBQUlHLE9BQU9uQixFQUFFLENBQUNnQixLQUFLO1FBQ25CLElBQUlRLE9BQU9MLEtBQUtSLFVBQVU7UUFFMUIsSUFBSSxDQUFDYSxRQUFRLENBQUNBLEtBQUtDLE1BQU0sRUFBRTtZQUN6QjtRQUNGO1FBRUEscUJBQXFCO1FBQ3JCZCxVQUFVLENBQUNLLEtBQUssR0FBR1E7UUFFbkIsb0JBQW9CO1FBQ3BCLElBQUssSUFBSVMsSUFBSSxHQUFHQSxJQUFJVCxLQUFLQyxNQUFNLEVBQUVRLElBQUs7WUFDcEMsSUFBSXZCLFlBQVljLElBQUksQ0FBQ1MsRUFBRTtZQUV2QixJQUFJbkIsS0FBSyxDQUFDSixVQUFVLEVBQUU7Z0JBQ3BCLElBQUl3QixPQUFPTixXQUFXTCxPQUFPLENBQUN2QixFQUFFLENBQUNjLEtBQUssQ0FBQ0osVUFBVSxDQUFDLENBQUN5QixNQUFNO2dCQUN6RCxJQUFJQyxLQUFLUixXQUFXTCxPQUFPLENBQUNKLEtBQUtnQixNQUFNO2dCQUV2QyxJQUFJckIsS0FBSyxDQUFDSixVQUFVLEtBQUssOEJBQ3RCd0IsQ0FBQUEsT0FBT0UsTUFBT0YsU0FBU0UsTUFBTXRCLEtBQUssQ0FBQ0osVUFBVSxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsUUFBUSxjQUFjLEdBQUk7b0JBRW5GO2dCQUNGO1lBQ0Y7WUFFQSw0QkFBNEI7WUFDNUJiLEtBQUssQ0FBQ0osVUFBVSxHQUFHTTtRQUNyQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL21pbWUtdHlwZXMvaW5kZXguanM/YzZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIG1pbWUtdHlwZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkYiA9IHJlcXVpcmUoJ21pbWUtZGInKVxudmFyIGV4dG5hbWUgPSByZXF1aXJlKCdwYXRoJykuZXh0bmFtZVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBFWFRSQUNUX1RZUEVfUkVHRVhQID0gL15cXHMqKFteO1xcc10qKSg/Ojt8XFxzfCQpL1xudmFyIFRFWFRfVFlQRV9SRUdFWFAgPSAvXnRleHRcXC8vaVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY2hhcnNldCA9IGNoYXJzZXRcbmV4cG9ydHMuY2hhcnNldHMgPSB7IGxvb2t1cDogY2hhcnNldCB9XG5leHBvcnRzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbmV4cG9ydHMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uXG5leHBvcnRzLmV4dGVuc2lvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5leHBvcnRzLmxvb2t1cCA9IGxvb2t1cFxuZXhwb3J0cy50eXBlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLy8gUG9wdWxhdGUgdGhlIGV4dGVuc2lvbnMvdHlwZXMgbWFwc1xucG9wdWxhdGVNYXBzKGV4cG9ydHMuZXh0ZW5zaW9ucywgZXhwb3J0cy50eXBlcylcblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgY2hhcnNldCBmb3IgYSBNSU1FIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGNoYXJzZXQgKHR5cGUpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVE9ETzogdXNlIG1lZGlhLXR5cGVyXG4gIHZhciBtYXRjaCA9IEVYVFJBQ1RfVFlQRV9SRUdFWFAuZXhlYyh0eXBlKVxuICB2YXIgbWltZSA9IG1hdGNoICYmIGRiW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldXG5cbiAgaWYgKG1pbWUgJiYgbWltZS5jaGFyc2V0KSB7XG4gICAgcmV0dXJuIG1pbWUuY2hhcnNldFxuICB9XG5cbiAgLy8gZGVmYXVsdCB0ZXh0LyogdG8gdXRmLThcbiAgaWYgKG1hdGNoICYmIFRFWFRfVFlQRV9SRUdFWFAudGVzdChtYXRjaFsxXSkpIHtcbiAgICByZXR1cm4gJ1VURi04J1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVsbCBDb250ZW50LVR5cGUgaGVhZGVyIGdpdmVuIGEgTUlNRSB0eXBlIG9yIGV4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBjb250ZW50VHlwZSAoc3RyKSB7XG4gIC8vIFRPRE86IHNob3VsZCB0aGlzIGV2ZW4gYmUgaW4gdGhpcyBtb2R1bGU/XG4gIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgbWltZSA9IHN0ci5pbmRleE9mKCcvJykgPT09IC0xXG4gICAgPyBleHBvcnRzLmxvb2t1cChzdHIpXG4gICAgOiBzdHJcblxuICBpZiAoIW1pbWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBjb250ZW50LXR5cGUgb3Igb3RoZXIgbW9kdWxlXG4gIGlmIChtaW1lLmluZGV4T2YoJ2NoYXJzZXQnKSA9PT0gLTEpIHtcbiAgICB2YXIgY2hhcnNldCA9IGV4cG9ydHMuY2hhcnNldChtaW1lKVxuICAgIGlmIChjaGFyc2V0KSBtaW1lICs9ICc7IGNoYXJzZXQ9JyArIGNoYXJzZXQudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgcmV0dXJuIG1pbWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgZXh0ZW5zaW9uIGZvciBhIE1JTUUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZXh0ZW5zaW9uICh0eXBlKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBtZWRpYS10eXBlclxuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcblxuICAvLyBnZXQgZXh0ZW5zaW9uc1xuICB2YXIgZXh0cyA9IG1hdGNoICYmIGV4cG9ydHMuZXh0ZW5zaW9uc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXVxuXG4gIGlmICghZXh0cyB8fCAhZXh0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHRzWzBdXG59XG5cbi8qKlxuICogTG9va3VwIHRoZSBNSU1FIHR5cGUgZm9yIGEgZmlsZSBwYXRoL2V4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbG9va3VwIChwYXRoKSB7XG4gIGlmICghcGF0aCB8fCB0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGdldCB0aGUgZXh0ZW5zaW9uIChcImV4dFwiIG9yIFwiLmV4dFwiIG9yIGZ1bGwgcGF0aClcbiAgdmFyIGV4dGVuc2lvbiA9IGV4dG5hbWUoJ3guJyArIHBhdGgpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3Vic3RyKDEpXG5cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLnR5cGVzW2V4dGVuc2lvbl0gfHwgZmFsc2Vcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZXh0ZW5zaW9ucyBhbmQgdHlwZXMgbWFwcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVNYXBzIChleHRlbnNpb25zLCB0eXBlcykge1xuICAvLyBzb3VyY2UgcHJlZmVyZW5jZSAobGVhc3QgLT4gbW9zdClcbiAgdmFyIHByZWZlcmVuY2UgPSBbJ25naW54JywgJ2FwYWNoZScsIHVuZGVmaW5lZCwgJ2lhbmEnXVxuXG4gIE9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hNaW1lVHlwZSAodHlwZSkge1xuICAgIHZhciBtaW1lID0gZGJbdHlwZV1cbiAgICB2YXIgZXh0cyA9IG1pbWUuZXh0ZW5zaW9uc1xuXG4gICAgaWYgKCFleHRzIHx8ICFleHRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gbWltZSAtPiBleHRlbnNpb25zXG4gICAgZXh0ZW5zaW9uc1t0eXBlXSA9IGV4dHNcblxuICAgIC8vIGV4dGVuc2lvbiAtPiBtaW1lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0c1tpXVxuXG4gICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSkge1xuICAgICAgICB2YXIgZnJvbSA9IHByZWZlcmVuY2UuaW5kZXhPZihkYlt0eXBlc1tleHRlbnNpb25dXS5zb3VyY2UpXG4gICAgICAgIHZhciB0byA9IHByZWZlcmVuY2UuaW5kZXhPZihtaW1lLnNvdXJjZSlcblxuICAgICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSAhPT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgJiZcbiAgICAgICAgICAoZnJvbSA+IHRvIHx8IChmcm9tID09PSB0byAmJiB0eXBlc1tleHRlbnNpb25dLnN1YnN0cigwLCAxMikgPT09ICdhcHBsaWNhdGlvbi8nKSkpIHtcbiAgICAgICAgICAvLyBza2lwIHRoZSByZW1hcHBpbmdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZXh0ZW5zaW9uIC0+IG1pbWVcbiAgICAgIHR5cGVzW2V4dGVuc2lvbl0gPSB0eXBlXG4gICAgfVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImRiIiwicmVxdWlyZSIsImV4dG5hbWUiLCJFWFRSQUNUX1RZUEVfUkVHRVhQIiwiVEVYVF9UWVBFX1JFR0VYUCIsImV4cG9ydHMiLCJjaGFyc2V0IiwiY2hhcnNldHMiLCJsb29rdXAiLCJjb250ZW50VHlwZSIsImV4dGVuc2lvbiIsImV4dGVuc2lvbnMiLCJPYmplY3QiLCJjcmVhdGUiLCJ0eXBlcyIsInBvcHVsYXRlTWFwcyIsInR5cGUiLCJtYXRjaCIsImV4ZWMiLCJtaW1lIiwidG9Mb3dlckNhc2UiLCJ0ZXN0Iiwic3RyIiwiaW5kZXhPZiIsImV4dHMiLCJsZW5ndGgiLCJwYXRoIiwic3Vic3RyIiwicHJlZmVyZW5jZSIsInVuZGVmaW5lZCIsImtleXMiLCJmb3JFYWNoIiwiZm9yRWFjaE1pbWVUeXBlIiwiaSIsImZyb20iLCJzb3VyY2UiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mime-types/index.js\n");

/***/ })

};
;