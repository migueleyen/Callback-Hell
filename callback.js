const employees=[

{id:1,name:'Andre'},
{id:2,name:'Cesar'},
{id:3,name:'Miguel'},
    
];

const salaries=[

    {id:1,salary:1000},
    {id:2,salary:2000},
    
]

const getEmployee=function(id,callback){

    const employe=employees.find(emp=>emp.id===id);

    if(employe){
        callback(employe) ;
    }
    else{

        callback( `Empleado con id : ${id}, no existe`);

        // console.log(`Empleado con id : ${id}, no existe`);
    }
};

getEmployee(5,function(employee){

    console.log(employee);
})



/* const getEmployee=function(id){

    const employe=employees.find(emp=>emp.id===id);
    return employe;
}

console.log(getEmployee(3)); */
