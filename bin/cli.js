#!/usr/bin/env node

'use strict';

var logSymbols  = require('log-symbols');
var helg        = require('./');

console.log(helg ? logSymbols.success + ' Ja!' : logSymbols.error + ' Nej…');
