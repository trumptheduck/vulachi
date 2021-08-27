export interface Course {
    _id?: string,
    name: string,
    code: string,
    school?: string,
    data: [
      {
        year: number,
        requirements: [
          {
            group: string,
            grade: number
          }
        ],
        amount: number
      }
    ],
    desc?: string
}