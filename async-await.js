
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
 
    try {

        const employ=await getEmployee(id);
    const salari=await getSalary(id);
    const prf=await getProfile(id);

    return `El salario del empleado ${employ}  es de $ / . ${salari} us$ , teniendo el perfil laboral en el area de : ${prf}`;  
        
    } catch (error) {

        throw error // Captura los rejects como errores intermedios.

        // return error : No filtra los rejects como errores intermedios
    }
        

    
             
  }
  
  const id=1;

  getInfoEmploye(id)
    .then(msg=>{

                    console.log('Todo Bien');
                    console.log(msg);

                }
                
                
            )
    .catch(err=>{

                    console.log(('Todo Mal'));
                    console.log(err);

                }
                     
                
            );




/* const awaitData=function(){

    return new Promise(
        
        resolve =>{

            setTimeout(() => {
                 resolve('get Data !');
            }, 2000);
        })
}

const getData=async function(){

    const data=await awaitData();

    // const data=awaitData();

    return data;
}

getData()
    .then(data=>console.log(data)); */













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

