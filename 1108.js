// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".



// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"



var defangIPaddr = function (address) {

    let sp = address.split('')
    for (let i = 0; i < sp.length; i++) {

        if (sp[i] == ".") {
            sp[i] = "[.]"
            var add = sp.join('')
            console.log(add)
        }
    }
    return add
};