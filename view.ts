import fs = require('fs')
import { file } from 'babel-types';
let filename = 'contacts'
let btn = document.getElementById("add-to-list");
let sno = 0;
btn.addEventListener("click", (e: Event) => {
    let email: string = ((document.getElementById("Email") as HTMLInputElement).value);
    let name: string = ((document.getElementById("Name") as HTMLInputElement).value);
    fs.appendFileSync('contacts', + name + ',' + email + '\n')

    addEntry(name, email)
})

function addEntry(name: string, email: string): void{
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById("contact-table")
    if(name && email){
        console.log(email)
        sno++
        var row = table.insertRow()
        var x = row.insertCell()
        var y = row.insertCell(0)
        row.append(y.innerHTML = `${sno}`, x.innerHTML = name, x.innerHTML = email );
    }
}

function loadAndDisplay(): void{
    if(fs.existsSync(filename)){
        let data = fs.readFileSync(filename, 'utf8').split('\n');
        data.forEach((contact) => {
            let [ name, email ] = contact.split(',')
            addEntry(name, email)
        })
    }
    else{
        console.log("File doesnt exist, creating a new file")
        fs.writeFileSync(filename,'', 'utf8' )
    }
}

loadAndDisplay()