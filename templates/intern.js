function internHtml(employeeData){
   console.log(employeeData)
    let html = ""
    for (let index = 0; index < employeeData.length; index++) {
        
        if (employeeData[index].getRole()==="Intern"){
            html = html + `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employeeData[index].name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employeeData[index].getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employeeData[index].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employeeData[index].email}">${employeeData[index].email}</a></li>
                    <li class="list-group-item">School: ${employeeData[index].school}</li>
                </ul>
            </div>
        </div>`
        }
    }

    return html
}



module.exports=internHtml