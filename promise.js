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
const id =1;
let nombre;
let salar;
getEmployee(id)
    .then(employ=>{

          nombre=employ;
          
          return getSalary(id)

    })
    .then(sal=>{
          salar=sal;
          
          return getProfile(id)
      
    })
    .then(prof=>{
          console.log(`El Empleado ${nombre} con el id ${id} tiene un salario de $/. ${salar} US$ Y desempeña labores como : ${prof} `);
    })
    .catch(err=>console.log(err));


/* getEmployee(id)
.then(employ=>console.log(employ))
.catch(err=>console.log(err));

getSalary(id)
.then(salar=>console.log(salar))
.catch(err=>console.log(err)) */
