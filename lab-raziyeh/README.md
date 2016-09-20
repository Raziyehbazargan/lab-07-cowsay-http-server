# Cowsay HTTP-Server
=============

> 

## Getting Started


### Prerequisities

- dependencies: 
    cowsay: ^1.1.8  --> npm install --save cowsay
  
```
npm install  -D gulp-eslint gulp-mocha mocha

```


## Running

In your root server, type in the command **"node server.js"** in your terminal.
In another Terminal :

- For Get Request:
    - http localhost:3000/ : will respond with a simple hello world text
    - http localhost:3000/cowsay text=='some text' : will respond with cowsay 
    
- For POST Request:
    - we need a json file in root directory like : daya.json with a simple json string
    - cat data.json | http post localhost:3000/cowsay : will show the json data using cowsay
        


## Built With:

* Nodejs
* JavaScript
* Visual studio code 3 

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Raziyeh Bazargan** - [Github](https://github.com/RaziyehBazargan)

## License

This project is licensed under the ISC License.

