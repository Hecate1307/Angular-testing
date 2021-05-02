
export class Book {
    public id: number;
    public seqNo: string;
    public title: string;
    public author: string;
    public rating: number;
    public description: string;
    public coverUrl: string;
    public category: string;
    public price: number;

    constructor(id: number, seqNo: string, title: string, author: string, rating: number, description: string, coverUrl: string,
        category: string, price: number) {
        this.id = id;
        this.seqNo = seqNo;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.description = description;
        this.coverUrl = coverUrl;
        this.category = category;
        this.price = price;
    }
}