# Helg [hel:j] [![Build Status](https://api.travis-ci.org/wibron/helg.svg)](https://travis-ci.org/wibron/helg)

Determine if the current date is on weekend (helg) or not. Made for you [@benjick](https://github.com/benjick).

## Installation

```
$ npm install --save helg
```

or globally:

```
$ npm install -g helg
```

## Usage:

```
var helg = require('helg');
helg.ere();
```

```
$ helg
```

## API

### ere(Date)

#### Date (optional)

`Date` object to match against. Must be a new instance of `Date`, e.g: `new Date()`. If no date is passed, the module will use the current time.

---
