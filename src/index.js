// interface HdfcBank_Version1{
//     Personal:string;
//     NRI:string;
// }
// interface HdfcBank_Version2 extends HdfcBank_Version1{
//     Loans:string
// }
// let BankApp_Legacy:HdfcBank_Version1 = {
//     Personal: "Personal Banking",
//     NRI: "NRI Banking"
// }
// let BankApp_Modern:HdfcBank_Version2 = {
//     Personal:"Personal Banking",
//     NRI: "NRI Banking",
//     Loans: "Car, Bike, Home Loans"
// }
// class Demo{
//     static s = 0;
//     n = 0;
//     constructor(){
//         Demo.s = Demo.s + 1;
//         this.n = this.n + 1;
//     }
//     Print(){
//         console.log(`s=${Demo.s} n=${this.n}`);
//     }
// }
// let obj1 = new Demo();
// obj1.Print();
// let obj2 = new Demo();
// obj2.Print();
// let obj3 = new Demo();
// obj3.Print();
//Contract
// interface ProductContract{
//     Name:string|null;
//     Price:number;
//     Qty:number;
//     Total():number;
//     Print():void;
// }
// // class can support multiple inheritance for contracts i.e. interfaces
// //Template
// abstract class ProductTemplate implements ProductContract{
//     public Name:string|null = null;
//     public Price:number = 0;
//     public Qty: number = 0;
//     public abstract Total():number;
//     public abstract Print():void;
// }
// class ProductComponent extends ProductTemplate {
//     Name = "Samsung TV";
//     Price = 45000.44;
//     Qty = 2;
//     Total(){
//         return this.Qty * this.Price;
//     };
//     Print(){
//         console.log(`Name = ${this.Name}\nPrice = ${this.Price}\nQty = ${this.Qty}\nTotal = ${this.Total()}`);
//     };
// }
// let obj = new ProductComponent();
// obj.Print();
// class Employee {
//     public FirstName:string = "";
//     public LastName:string = "";
//     public Designation:string = "";
//     public Print():void{
//         document.write(`${this.FirstName} ${this.LastName} - ${this.Designation} <br>`);
//     }
// }
// class Developer extends Employee {
//     FirstName = "Shubham";
//     LastName = "Agarwal";
//     Designation = "Developer";
//     public DeveloperRole:string = "Build, Debug, Test, Deploy";
//     Print(){
//         super.Print();
//         document.write(this.DeveloperRole + "<br><br>");
//     }
// }
// class Admin extends Employee {
//     FirstName = "Kushagra";
//     LastName = "Verma";
//     Designation = "Admin";
//     public AdminRole:string = "Authorizations, Authentications";
//     Print(){
//         super.Print();
//         document.write(this.AdminRole + "<br><br>");
//     }
// }
// class Manager extends Employee {
//     FirstName = "Rahul";
//     LastName = "Yadav";
//     Designation = "Manager";
//     public ManagerRole:string = "Approvals";
//     Print(){
//         super.Print();
//         document.write(this.ManagerRole + "<br><br>");
//     }
// }
// let employees = [new Developer(), new Admin(), new Manager()];
// interface IOracle {
//   UserName: string;
//   Password: string;
//   Database: string;
// }
// interface IMySql {
//   host: string;
//   user: string;
//   password: string;
//   database: string;
// }
// interface IMongoDb {
//   url: string;
// }
// class Database<T> {
//   public ConnectionString: T | null = null;
//   public Conncect() {
//     for (var property in this.ConnectionString) {
//       console.log(`${property} : ${this.ConnectionString[property]}`);
//     }
//   }
// }
// console.log("-------------Connecting with Oracle------------");
// let oracle = new Database<IOracle>();
// oracle.ConnectionString = {
//   UserName: "scott",
//   Password: "tiger",
//   Database: "empdb",
// };
// oracle.Conncect();
// console.log("------------------Connecting with MySql--------------------");
// let mysql = new Database<IMySql>();
// mysql.ConnectionString = {
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "stubd",
// };
// mysql.Conncect();
// console.log("------------------Connecting with MongoDB--------------");
// let mongodb = new Database<IMongoDb>();
// mongodb.ConnectionString = {
//   url: "mongodb://127.0.0.1:27017",
// };
// mongodb.Conncect();
// interface IProduct {
//     Name:string;
//     Price:number;
//     Stock:boolean;
// }
// interface IEmployee {
//     FirstName : string;
//     LastName : string;
//     Designation : string;
// }
// class Service {
//     public GetData<T>(data:T){
//         console.log(data);
//     }
// }
// let obj = new Service();
// obj.GetData<IProduct>({Name:"TV", Price:35000, Stock:true});
// obj.GetData<IProduct[]>
// function Sum(a:any, b:any){
//     return a + b;
// }
// class Demo{
//      public Add<T>(a:T, b:T):T{
//         // return a + b; This is not valid.
//         return Sum(a,b);
//      }
// }
// let obj = new Demo();
// obj.Add<number>(10,20);
// obj.Add<string>("A", "B");
// enum Weekdays {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday
// }
// enum Months{
//     January,
//     February, 
//     March,
//     April,
//     May,
//     June, 
//     July,
//     August,
//     September,
//     October,
//     November,
//     December
// }
// let now:any = new Date();
// console.log(`Date : ${now.getDate()}\nMonth : ${Months[now.getMonth()]}\nWeekday : ${Weekdays[now.getDay()]}\n`);
// enum Values{
//     A,
//     B = "Hello !",
//     C = 8,
// }
var Values;
(function (Values) {
    Values[Values["a"] = 10] = "a";
    Values[Values["b"] = 20] = "b";
    Values[Values["c"] = 30] = "c";
})(Values || (Values = {}));
console.log("Addition=".concat(Values.c));
