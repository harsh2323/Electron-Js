"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filename = 'contacts';
var btn = document.getElementById("add-to-list");
var sno = 0;
btn.addEventListener("click", function (e) {
    var email = (document.getElementById("Email").value);
    var name = (document.getElementById("Name").value);
    fs.appendFileSync('contacts', +name + ',' + email + '\n');
    addEntry(name, email);
});
function addEntry(name, email) {
    var table = document.getElementById("contact-table");
    var index = 0;
    if (name && email) {
        sno++;
        index++;
        var row = table.insertRow();
        var x = row.insertCell(0);
        row.append(x.innerHTML = sno.toString(), x.innerHTML = name, x.innerHTML = email);
    }
}
function loadAndDisplay() {
    if (fs.existsSync(filename)) {
        var data = fs.readFileSync(filename, 'utf8').split('\n');
        data.forEach(function (contact) {
            var _a = contact.split(','), name = _a[0], email = _a[1];
            addEntry(name, email);
        });
    }
    else {
        console.log("File doesnt exist, creating a new file");
        fs.writeFileSync(filename, '', 'utf8');
    }
}
loadAndDisplay();
