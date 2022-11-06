const array = [];
const string1 = document.getElementById("string-1");
const string2 = document.getElementById("string-2");
const string3 = document.getElementById("string-3");
const string4 = document.getElementById("string-4");
const string5 = document.getElementById("string-5");
const string6 = document.getElementById("string-6");
array.push(string3.innerText, string5.innerText, string2.innerText, string6.innerText, string4.innerText,
    string1.innerText);
for (let i = 0; i < 6; i++) {
    console.log(`${array[i]} \n`);
}
