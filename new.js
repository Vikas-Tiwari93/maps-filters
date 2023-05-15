const students = [
  {
    id: 1,
    name: 'John',
    age: 20,
  },
  {
    id: 2,
    name: 'Jane',
    age: 22,
  },
  {
    id: 3,
    name: 'Alex',
    age: 21,
  },
];

const subjects = [
  {
    subjectId: 101,
    studentId: 1,
    subjectName: 'Math',
  },
  {
    subjectId: 102,
    studentId: 1,
    subjectName: 'Science',
  },
  {
    subjectId: 103,
    studentId: 1,
    subjectName: 'History',
  },
  {
    subjectId: 104,
    studentId: 2,
    subjectName: 'English',
  },
];

const result = [
  {
    studentId: 1,
    name: 'John',
    subjects: [
      {
        subjectId: 101,
        subjectName: 'Math',
      },
      {
        subjectId: 102,
        subjectName: 'Science',
      },
      {
        subjectId: 103,
        subjectName: 'History',
      },
    ],
  },
  {
    studentId: 2,
    name: 'Jane',
    subjects: [
      {
        subjectId: 104,
        subjectName: 'English',
      },
    ],
  },
  {
    studentId: 3,
    name: 'Alex',
    subjects: [],
  },
];

// Write a program to form a result array using map & filter or anything, but map is a must
// Use the above students & subjects array
const reqresult = students.map((eachStu) => {
  const filtersub = subjects.filter((eachSub) => {
    if (eachSub.studentId === eachStu.id) {
      return eachSub;
    }
    return false;
  });
  filtersub.map((filElm) => {
    const filSubId = filElm.subjectId;
    const filSubName = filElm.subjectName;
    return { filSubId, filSubName };
  });
  console.log(filtersub);

  const newobj = {};
  newobj['name'] = eachStu.name;
  newobj['studentId'] = eachStu.id;
  newobj['subjects'] = filtersub;
  return newobj;
});

console.log(reqresult);
