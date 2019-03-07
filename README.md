# Wepback SVG Spritesheet Hash
This project includes a webpack loader to combine your SVGs into hashed spritesheets that you can use with a simple use attribute.

## Approach
It's using [svg-spritemap-webpack-plugin](https://github.com/cascornelissen/svg-spritemap-webpack-plugin/) to bundle each svg directory into its own chunk.   
Then it uses [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to inject a SVG lookup map which gets used at runtime by the app.   

## Improvements
Create a `html-webpack-plugin` plugin to include the SVG lookup map without the current 'hacky' approach.

## Installation

* npm install
* npm start
* visit [http://localhost:8080/](http://localhost:8080/)
