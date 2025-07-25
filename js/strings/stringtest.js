String  
function stringTest() {
    // Test string concatenation
    let str1 = "Hello";
    let str2 = "World";
    let result = str1 + " " + str2;
    console.log(result); // Expected output: "Hello World"

    // Test string length
    let length = result.length;
    console.log(length); // Expected output: 11

    // Test string indexing
    let firstChar = result[0];
    console.log(firstChar); // Expected output: "H"

    // Test string slicing
    let sliced = result.slice(0, 5);
    console.log(sliced); // Expected output: "Hello"
}

// Test string replacement
    let replaced = result.replace("World", "JavaScript");
    console.log(replaced); // Expected output: "Hello JavaScript"

    // Test string splitting
    let splitResult = result.split(" ");
    console.log(splitResult); // Expected output: ["Hello", "World"]

    // Test string trimming
    let strWithSpaces = "   Hello World   ";
    let trimmed = strWithSpaces.trim();
    console.log(trimmed); // Expected output: "Hello World"
    // Test string toUpperCase and toLowerCase
    let upperCase = result.toUpperCase();
    console.log(upperCase); // Expected output: "HELLO WORLD"
    let lowerCase = result.toLowerCase();

    console.log(lowerCase); // Expected output: "hello world"
    // Test string includes
    let includesWorld = result.includes("World");
    console.log(includesWorld); // Expected output: true
    let includesJavaScript = result.includes("JavaScript");
    console.log(includesJavaScript); // Expected output: false
    // Test string startsWith and endsWith
    let startsWithHello = result.startsWith("Hello");
    console.log(startsWithHello); // Expected output: true
    let endsWithWorld = result.endsWith("World");
    console.log(endsWithWorld); // Expected output: true
    // Test string indexOf and lastIndexOf
    let indexOfWorld = result.indexOf("World");
    console.log(indexOfWorld); // Expected output: 6
    let lastIndexOfWorld = result.lastIndexOf("World");
    console.log(lastIndexOfWorld); // Expected output: 6
    // Test string charAt
    let charAtIndex = result.charAt(1);
    console.log(charAtIndex); // Expected output: "e"   
    // Test string repeat
    let repeated = result.repeat(2);
    console.log(repeated); // Expected output: "Hello WorldHello World"
    // Test string search
    let searchResult = result.search("World");
    console.log(searchResult); // Expected output: 6
    // Test string match
    let matchResult = result.match(/Hello/);
    console.log(matchResult); // Expected output: ["Hello"]
    // Test string localeCompare
    let compareResult = "Hello".localeCompare("World");
    console.log(compareResult); // Expected output: -1 (because "Hello" comes before
    // "World" in lexicographical order)
    // Test string padStart and padEnd
    let paddedStart = "5".padStart(3, "0");
    console.log(paddedStart); // Expected output: "005"
    let paddedEnd = "5".padEnd(3, "0");
    console.log(paddedEnd); // Expected output: "500"
    // Test string fromCharCode
    let charCode = String.fromCharCode(65); // ASCII code for 'A'
    console.log(charCode); // Expected output: "A"
    // Test string codePointAt
    let codePoint = result.codePointAt(0);
    console.log(codePoint); // Expected output: 72 (ASCII code for 'H')
    // Test string normalize
    let normalized = "é".normalize("NFC");
    console.log(normalized); // Expected output: "é" (normalized form of 'e' with acute accent)
    // Test string anchor
    let anchored = "<a name='anchor'>" + result + "</a>";
    console.log(anchored); // Expected output: "<a name='anchor'>Hello World</a>"
    // Test string big
    let bigText = result.big();
    console.log(bigText); // Expected output: "<big>Hello World</big>"
    // Test string blink
    let blinkText = result.blink();
    console.log(blinkText); // Expected output: "<blink>Hello World</blink>"
    // Test string bold
    let boldText = result.bold();
    console.log(boldText); // Expected output: "<b>Hello World</b>"
    // Test string fixed
    let fixedText = result.fixed();
    console.log(fixedText); // Expected output: "<tt>Hello World</tt>"
    // Test string italics
    let italicsText = result.italics();
    console.log(italicsText); // Expected output: "<i>Hello World</i>"  
    // Test string strike
    let strikeText = result.strike();
    console.log(strikeText); // Expected output: "<strike>Hello World</strike>"
    // Test string sub
    let subText = result.sub();
    console.log(subText); // Expected output: "<sub>Hello World</sub>"
    // Test string sup
    let supText = result.sup();
    console.log(supText); // Expected output: "<sup>Hello World</sup>"  
// Test string link
    let linkedText = "<a href='https://example.com'>" + result + "</a
    console.log(linkedText); // Expected output: "<a href='https://example.com'>Hello World</a>"
}   

// Call the stringTest function to execute the tests
stringTest();
// Expected output: "Hello World"
// Expected output: 11
// Expected output: "H" 
// Expected output: "Hello"
// Expected output: "Hello JavaScript"
// Expected output: ["Hello", "World"]
// Expected output: "   Hello World   "
// Expected output: "Hello World"
// Expected output: "HELLO WORLD"   
// Expected output: "hello world"
// Expected output: true
// Expected output: false
// Expected output: true
// Expected output: true
// Expected output: 6
// Expected output: 6
// Expected output: "e"
// Expected output: "Hello WorldHello World"
// Expected output: 6
// Expected output: ["Hello"]