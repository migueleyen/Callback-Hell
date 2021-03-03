const employees=[

    {id:1,name:'Andre'},
    {id:2,name:'Cesar'},
    {id:3,name:'Miguel'},
        
    ];
    
    const salaries=[
    
        {id:1,salary:1000},
        {id:2,salary:2000},
        
    ];

    const getEmployee=function(id,callback){
    
        //Match find and store employe.name 
    
        const employe=employees.find(emp=>emp.id===id)?.name;
    
        if(employe){
            callback(null,employe) ;
        }
        else{
    
            callback( `Empleado con id : ${id}, no existe`);
    
            // console.log(`Empleado con id : ${id}, no existe`);
        }
    };

    const getSalary=function(id,callback){
    
        //Match find and store employe.name 
    
        const salari=salaries.find(sal=>sal.id===id)?.salary;
    
        if(salari){
            callback(null,salari) ;
        }
        else{
    
            callback( `El Salario con el id : ${id} no existe`);
    
            // console.log(`Empleado con id : ${id}, no existe`);
        }
    };
    const id=1;
    getEmployee(id,function(err,employee){
    
        if(err){
    
            console.log('ERROR !');
            return console.log(err);
    
            
        }
        else{
    
            console.log('Empleado Existe :',employee);
        
            getSalary(id,function(err,salary){
    
                if(err){
            
                
                    return console.log(err);
            
                    
                }
                else{
            
                    
                    console.log(`El salario de ${employee} es de US$:`,salary);
                 
                } 
            })
        }
        
    })
    
   
    
    

    
    /* const getEmployee=function(id){
    
        const employe=employees.find(emp=>emp.id===id);
        return employe;
    }
    
    console.log(getEmployee(3)); */
    