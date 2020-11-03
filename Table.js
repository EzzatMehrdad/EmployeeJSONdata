var employeePromise=d3.json("employee.json");

var getFirstName=function(employee){
    
    return employee.firstName
}

var getLastName=function(employee)
{
    
    return employee.lastName;
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
    
    var rows=d3.select("tbody")
    .selectAll("tr")
    .data(employee)
    .enter()
    .append("tr")
    
    rows.append("td")
    .append("img")
    .attr("src", getPics);
    
    rows.append("td")
    .text(getFirstName);
    
    rows.append("td")
    .text(getLastName); 
    
      rows.append("td")
    .text(getTitle); 
    
    
      rows.append("td")
    .text(getUnit); 
    
    
      rows.append("td")
    .text(getEmail); 
    
      rows.append("td")
    .text(getBio); 
    
    
    

}

  var failFCN = function(errorMsg)
  {
    console.log("You Got it wrong",errorMSG);
  }
    
     employeePromise.then(successFCN,failFCN);

