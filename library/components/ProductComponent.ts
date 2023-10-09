import ProductTemplate  from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate{
    Name = "Samsung TV";
    Price = 56000.55;
    Qty = 2;
    CategoryName = "Electronics";
    Total(){
        return this.Qty * this.Price;
    }
    Print(){
        console.log(`Name = ${this.Name}\nPrice = ${this.Price}\nQuantity = ${this.Qty}\nCategory Name = ${this.CategoryName}\nTotal = ${this.Total()}\n`)
    }
}