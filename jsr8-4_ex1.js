let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
}

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // here __proto__ -- is simple key

// just apple and __proto__ returned
for(let key in dictionary) {
  alert(key); // "apple", and "__proto__"
}

alert(dictionary); // "apple,__proto__"