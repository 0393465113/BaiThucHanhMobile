class Book{
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number){
        this.title= title;
        this.author= author;
        this.year= year;
    }
    getSummary(){
        return `Truyện tranh ${this.title} của tác giả ${this.author} xuất bản vào năm ${this.year}.`;
    }
}
const book1 = new Book('Conan', 'Aoyama Gōshō', 1984);
console.log(book1.getSummary());