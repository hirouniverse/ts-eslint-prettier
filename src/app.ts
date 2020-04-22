export default class Sample {
  toJson(): void {
    console.log('this is samaple method!');
  }

  fromJson(): object {
    console.log('this is sample method!!');
    return {
      value: `console`,
    };
  }
}

export interface User {
  value: string;
}
