export class Book {



    constructor(public bookId: number = 0, public bookName: string = "", public bookPrice: number = 0) {

    }

    // public get bookPrice(): number {
    //     return this._bookPrice;
    // }
    // public set bookPrice(value: number) {
    //     this._bookPrice = value;
    // }
    // public get bookName(): string {
    //     return this._bookName;
    // }
    // public set bookName(value: string) {
    //     this._bookName = value;
    // }
    // public get id(): number {
    //     return this._id;
    // }
    // public set id(value: number) {
    //     this._id = value;
    // }


    // Overriding
    public toString(): string {
        return `BookId : ${this.bookId}, 
                BookName : ${this.bookName}, 
                BookPrice : ${this.bookPrice}`
    }

}