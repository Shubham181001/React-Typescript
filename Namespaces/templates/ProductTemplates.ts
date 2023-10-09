///<reference path = "../contracts/ProductContracts.ts"/>

import contracts = Project.Contracts;

export namespace Project{
    export namespace Templates {
        export abstract class ProductTemplate implements contracts.ProductContract{
            public Name: string = "";
            public Price: number = 0;
            public Qty: number = 0;
            public abstract Total():number;
            public abstract Print(): void;
        }
    }
}