let employees=[{id:101,name:"divya",salary:45000},
{id:102,name:"ranju",salary:55000},
{id:103,name:"mallik",salary:65000}]
function displaydata(){
   let rows=""
    for(employee of empolyees){
rows=rows+ `<tr>
              <td>${employee.id}</td>
              <td>${employee.name}</tr>
              <td>${employee.salary}</td>
             </tr>`
}
document.getElementById("abc").innerHTML=rows
}