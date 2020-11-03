var employeePromise=d3.json("employee.json");

var getName=function(employee){
    
    return employee.firstName + employee.lastName;   
}

var getPics= function(employee)
{
    return employee.photo;
    
}
var getTitle= function(employee)
{
    return employee.title;
    
}

var getUnit= function(employee)
{
    return employee.unit;
}

var getEmail= function(employee)
{
    return employee.email;
}

var getBio= function(employee)
{
    return employee.bio;
}

var successFCN= function(employee)

{
    
    var employeeDiv=d3.select("body")
    .selectAll("div")
    .data(employee)
    .enter()
    .append("div")
    .classed("employee", true)
    
    var generalDiv=employeeDiv.append("div")
    .classed("general", true); 
    
    generalDiv.append("span")
    .classed("eName", true)
    .text(getName); 
    
    generalDiv.append("img")
    .attr("src", getPics);
    
    var detailDiv=employeeDiv.append("div")
    .classed("detail", true);
    
    detailDiv.append("span")
    .classed("title", true)
    .text(getTitle);
    
    detailDiv.append("span")
    .classed("department", true)
    .text(getUnit);
    
    detailDiv.append("span")
    .classed("email", true)
    .text(getEmail);
    
    detailDiv.append("span")
    .classed("bio", true)
    .text(getBio);
    
}

  var failFCN = function(errorMsg)
  {
    console.log("You Got it wrong",errorMSG);
  }
    
     employeePromise.then(successFCN,failFCN);

