class Account {
    min_Bal=500;
     Amount;
     open_Account(){
        console.log("Account opened sucessfully")
     }
     deposite_Amount(money){
       this.Amount=money
     }
}
let v=new Account();
v.open_Account();
v.deposite_Amount(500);
console.log(v)
let j=new Account();
j.open_Account();
j.deposite_Amount(10000);
console.log(j)