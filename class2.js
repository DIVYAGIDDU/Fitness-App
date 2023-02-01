class employee{
    eid;
    ename;
    salary;
    set_name(name){
        this.ename=name
    }
    set_id(id){
        this.set_eid=id
    }
}
let e1=new employee();
let e2=new employee();
console.log(e1)
console.log(e2)
e1.set_name("divya")
e2.set_name("arjun")
console.log(e1)
console.log(e2)
e1.set_id("101")
e2.set_id("102")
console.log(e1)
console.log(e2)