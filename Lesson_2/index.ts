// khai bao kieu du lieu trong typescript voi keyword "type"
// Biet khai bao voi string, boolen, number, array, object..
// Biet tham chieu cac type, mixin type, generic type

const message: string = 'Hello everyone'
const myAge: number = 20
const isMarried: boolean = false
const mySkills: string[] = ['HTML-CSS', 'Javascript', 'PHP']

// array type
const mySkills2: Array<string> = ['HTML-CSS', 'JS', 'PHP']

mySkills.push('React')

type educationType = {
  university: string
  major: string
  GPA: number
}

type portfolioType = {
  fullName: string
  address: string
  age: number
  job: string
  birthDay: string
  skills: string[]
  education: educationType
  projects?: Array<projectType> //Tham chieu 1 type vao 1 type khac
}

type projectType = {
  id: number
  name: string
  description: string
}
const myPortfoli: portfolioType = {
  fullName: 'Quyen',
  address: 'Yen Bai',
  age: 20,
  job: 'Student',
  birthDay: '30-04-2004',
  skills: ['HTML-CSS', 'Javascript', ' PHP'],
  education: {
    university: 'FPT Polytechnic Ha Noi',
    major: '    Infomation Technology',
    GPA: 7.6
  },
  projects: [
    {
      id: 1,
      name: 'Project A',
      description: 'This is Project A'
    },
    {
      id: 2,
      name: 'Project B',
      description: 'This is Project B'
    }
  ]
}

console.log(myPortfoli)
