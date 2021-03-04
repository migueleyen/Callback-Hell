
  const employees = [
    { id: 1, name: "Andre" },
    { id: 2, name: "Cesar" },
    { id: 3, name: "Miguel" },
  ];
  
  const salaries = [
    { id: 1, salary: 1000 },
    { id: 2, salary: 2000 },
  ];
  
  const profiles=[
  
    {id:1,profile:'Soporte Tecnico'}
  ]
  const getEmployee = function (id) {
    return new Promise((resolve, reject) => {
      const employe = employees.find((emp) => emp.id === id)?.name;
  
      if (employe) {
        resolve(employe);
      } else {
        reject(`No existe el empleado con el id : ${id}`);
      }
    });
  };
  
  const getSalary = function (id) {
    return new Promise((resolve, reject) => {
      const salari = salaries.find((sal) => sal.id === id)?.salary;
  
      salari ? resolve(salari) : reject(`No Existe Salario con id : ${id}`);
    });
  };
  
  const getProfile=function(id){
    return new Promise((resolve,reject)=>{
  
      const prof=profiles.find((pf)=>pf.id===id)?.profile;
  
      prof ? resolve(prof):reject
      (`No registra Profesion el id : ${id}` );
  
    })
  }

  const getInfoEmploye=async function(id){

    const employ=getEmployee(id);

    return employ;               
  }
  
  const id=1;
  
  getInfoEmploye(id)
    .then(msg=>console.log(msg));


















/* 
const asyncInfoUser=async function(){

    return 'Hola Mundo';

}

asyncInfoUser()
    .then(msg=>console.log(msg));



 

const getInfoUser=function(){

    return 'Hola Mundo';

}

const  info=getInfoUser();

console.log(info); */

