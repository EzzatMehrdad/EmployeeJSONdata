 var employeePromise=d3.json("employee.json"); 
  var successFCN = function(employee)
  {
    console.log("Data of Employee", employee);
  }
    var failFCN = function(errorMsg)
  {
    console.log("You Got it wrong",errorMSG);
  }
    
     employeePromise.then(successFCN,failFCN);

