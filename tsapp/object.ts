var emp={
id:10012,
showDetails:function(){
    console.log(emp.id);
    return this.id;
}


};

console.log(emp.id);
console.log(emp.showDetails())

emp.id=11111
console.log(emp.id);
console.log(emp.showDetails())
