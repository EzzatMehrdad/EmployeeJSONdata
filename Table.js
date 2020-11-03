
                $(document).ready(function () { 
  
                    $.getJSON("employee.json",  
                            function (data) { 
                        var student = ''; 
  
                        $.each(data, function (key, value) { 
  
                            student += '<tr>'; 
                            student += '<td>' +  
                                value.firstName + '</td>'; 
  
                            student += '<td>' +  
                                value.lastName + '</td>'; 
  
                            student += '<td>' +  
                                value.photo + '</td>'; 
  
                            student += '<td>' +  
                                value.title + '</td>'; 
                            
                            student += '<td>' +  
                                value.unit + '</td>'; 
                            
                            
                            student += '<td>' +  
                                value.email + '</td>'; 
                            
                            student += '<td>' +  
                                value.bio + '</td>'; 
                            
                            

  
                            student += '</tr>'; 
                        }); 
                
                        $('#table').append(student); 
                    }); 
                }); 


