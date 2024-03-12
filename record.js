

let input1 = document.getElementById("name")
let input2 = document.getElementById("employeeID")
let input3 = document.getElementById("department")
let input4 = document.getElementById("exp")
let input5 = document.getElementById("email")
let input6 = document.getElementById("mbl")
let myform = document.querySelector('form')
let tbody = document.querySelector('tbody')

let Alldata = [];

myform.addEventListener("submit",function(e){

    e.preventDefault();

    let Data = {};

    Data.name =   input1.value;
    Data.empid =  input2.value;
    Data.depart = input3.value;
    Data.exp   =  input4.value;
    Data.email =  input5.value;
    Data.mob   =  input6.value;

    Alldata.push(Data)
    console.log(Alldata)
    tbody.innerHTML = null;

 Alldata.filter((e)=>{

   let row = document.createElement("tr");

   let tdname = document.createElement("td");
    tdname.textContent = e.name
    row.appendChild(tdname)

  let tdmpid = document.createElement("td")
    tdmpid.textContent = e.empid
    row.appendChild(tdmpid)

   let tddepart = document.createElement("td")
    tddepart.textContent = e.depart
    row.appendChild(tddepart)

   let tdexp = document.createElement("td")
    tdexp.textContent = e.exp
    row.appendChild(tdexp)


   let tdemail = document.createElement("td")
    tdemail.textContent = e.email
    row.appendChild(tdemail)

   let tdmob = document.createElement("td")
    tdmob.textContent = e.mob
    row.append(tdmob)


   let tdrole = document.createElement("td")
    if(e.exp > 5){

        tdrole.innerText = "Senior"
    }
    else if (e.exp >= 2 && e.exp <= 5){

        tdrole.innerText = "Junior"
    }
    else if (e.exp <= 1){

        tdrole.innerText = "Fresher"
    }
    row.appendChild(tdrole)



   let tddelete = document.createElement("td")
   tddelete.style.backgroundColor = "red"

   
   let deletebtn = document.createElement("button")
   deletebtn.innerText = "Delete"
   deletebtn.style.backgroundColor = "red";
   deletebtn.style.border = 0;

    


    deletebtn.addEventListener("click",function(){

        row.remove()
     

    })
    tddelete.appendChild(deletebtn)
    row.appendChild(tddelete)
    tbody.appendChild(row)


   })
})


