
const asyncInfoUser=async function(){

    return 'Hola Mundo';
    
}

asyncInfoUser()
    .then(msg=>console.log(msg));



 

const getInfoUser=function(){

    return 'Hola Mundo';

}

const  info=getInfoUser();

console.log(info);

