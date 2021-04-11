export interface ISearch {
        nameSearch(name: string): ISearch;
        citySearch(city: string): ISearch;
        fullNameAssert(fullName: string): ISearch;
  }