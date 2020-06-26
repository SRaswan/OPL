export class SubCategory {
	id: number;
	name: string;

	constructor(id:number, name:string) {
		this.id = id;
    this.name = name;
	}
}

export class Category {
	id: number;
	name: string;
  subCategories: SubCategory[];

	constructor(id:number, name:string) {
		this.id = id;
    this.name = name;
		this.subCategories = []
	}

	addSubCategory(id:number, name:string) {
		this.subCategories.push(new SubCategory(id, name));
	}
}
