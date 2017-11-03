#!/usr/bin/env node

var sourceMap = require('source-map');
var fs = require('fs');

fs.readFile('./sourcemap.js', 'utf8', function (err, data) {
  var smc = new sourceMap.SourceMapConsumer(data);

  const stacktrace = 'f@479:2641\n' +
    'm@479:6377\n' +
    '<unknown>@312:1740\n' +
    '<unknown>@1197:202\n' +
    'c@298:695\n' +
    '<unknown>@951:1468\n' +
    '<unknown>@1209:14664\n' +
    '<unknown>@1208:174\n' +
    'dispatch@315:316\n' +
    '<unknown>@476:5140\n' +
    '<unknown>@1208:165\n' +
    'voteDvel@1036:6762';

  var lines = stacktrace.split('\n');
  lines.forEach(function (line) {
    var data = line.split('@');
    data = data[1].split(':');
    var line = data[0];
    var column = data[1];
    console.log(line + ':' + column);

    console.log(smc.originalPositionFor({
      line: line,
      column: column,
    }));
  });

});