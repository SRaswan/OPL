import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category, SubCategory } from './category';

export class InMemoryDataService implements InMemoryDbService {

    // https://medium.com/@coderonfleek/faking-the-backend-in-angular-apps-a10c1b8823c
    // The InMemoryDbService implementation requires our service to implement a createDb method.
    // This method creates a “database” hash whose keys are collection names and whose
    // values are arrays of collection objects to return or update
    // accessible through /api/jobs end point
    createDb() {
      const categories = [
                  {
                    "id": "1",
                    "name": "Computer Science",
                    "sub_categories": [
                      {
                        "id": "1",
                        "name": "C++"
                      },
                      {
                        "id": "2",
                        "name": "Java"
                      },
                      {
                        "id": "3",
                        "name": "Python"
                      },
                      {
                        "id": "4",
                        "name": "Node"
                      },
                      {
                        "id": "5",
                        "name": "Angular"
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "name": "Science",
                    "sub_categories": [
                      {
                        "id": "6",
                        "name": "Biology"
                      },
                      {
                        "id": "8",
                        "name": "Chemistry"
                      },
                      {
                        "id": "9",
                        "name": "Environmental Science"
                      }
                    ]
                  },
                  {
                    "id": "3",
                    "name": "Math",
                    "sub_categories": [
                      {
                        "id": "10",
                        "name": "Algebra"
                      },
                      {
                        "id": "11",
                        "name": "Geometry"
                      },
                      {
                        "id": "12",
                        "name": "Trigonometry"
                      },
                      {
                        "id": "13",
                        "name": "Pre-Calculus"
                      },
                      {
                        "id": "14",
                        "name": "Calculus"
                      }
                    ]
                  }
                ];
      return categories;
    }

  }
