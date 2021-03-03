const employees = [
  { id: 1, name: "Andre" },
  { id: 2, name: "Cesar" },
  { id: 3, name: "Miguel" },
];

const salaries = [
  { id: 1, salary: 1000 },
  { id: 2, salary: 2000 },
];

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

const id = 5;

getEmployee(id)
    .then((employ) => {
        getSalary(id)
            .then((sal) => {
                console.log(`El salario para ${emp} es de US$ ${sal}`);
            })
            .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))


/* getEmployee(id)
.then(employ=>console.log(employ))
.catch(err=>console.log(err));

getSalary(id)
.then(salar=>console.log(salar))
.catch(err=>console.log(err)) */
