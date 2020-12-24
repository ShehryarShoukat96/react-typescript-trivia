export class Index {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

const index = new Index('check');
console.log(index);
