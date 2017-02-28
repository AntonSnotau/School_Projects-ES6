
# ES6 - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

#### 1. Konfiguracja Webpack
```JavaScript```
module.exports = {
	entry: "./app.js",
	output: { filename: "out.js" },
	watch: true,
	module: {
        loaders: [
            {
                test: /\.js$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            },
            {
            	test: /\.css$/,
            	loader: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

#### 2. Klasa abstrakcyjna i klasa dziedziczaca.

```JavaScript```
class Animal {
	constructor(type){
		this.type = type;
	}

	breath(){
		console.log("I breathe");
	}
}

class Dog extends Animal {
	constructor(type){
		super(type);
	}

	bark(){
		console.log("Now I am barking")
	}
}
 let dog = new Dog("Mammal");
 dog.breath();
 dog.bark();
```
