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

export class Lesson {
	id: number;
	name: string;
	description: string;
	youtube_url: string;
	git_url: string;
	published_timestamp: number;
	author_name: string;
	categories: Category[];
	sub_categories: SubCategory[];
	published_dttm: new Date(this.published_timestamp * 1000).toLocaleString();

	// get_published_dttm(): string {
	// 	return new Date(this.published_timestamp * 1000).toLocaleString();
	// }
}
