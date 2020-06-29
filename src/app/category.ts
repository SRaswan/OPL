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
  sub_categories: SubCategory[];

	constructor(id:number, name:string) {
		this.id = id;
    this.name = name;
		this.sub_categories = []
	}

	addSubCategory(id:number, name:string) {
		this.sub_categories.push(new SubCategory(id, name));
	}
}
