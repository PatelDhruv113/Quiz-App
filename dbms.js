const questions = [
    {
      'que': "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
      'a': 'DML(Data Manipulation Language)',
      'b': 'Query',
      'c': 'Relational Schema',
      'd': 'DDL(Data Definition Language)',
      'correct': 'd',
    },
    {
      'que': "Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?",
      'a': 'DML(Data Manipulation Language)',
      'b': 'DDL(Data Definition Language)',
      'c': 'Query',
      'd': 'Relational Schema',
      'correct': 'a',
    },
    {
      'que': "The given Query can also be replaced with_______:\nSELECT name, course_id FROM instructor, teaches WHERE instructor_ID= teaches_ID;",
      'a': 'Select name, course_id from teaches,instructor where instructor_id=course_id;',
      'b': 'Select name, course_id from instructor natural join teaches;',
      'c': 'Select name, course_id from instructor;',
      'd': 'Select course_id from instructor join teaches;',
      'correct': 'b',
    },
    {
      'que': "Which one of the following given statements possibly contains the error?",
      'a': 'select * from emp where empid = 10003;',
      'b': 'select empid from emp where empid = 10006;',
      'c': 'select empid from emp;',
      'd': 'select empid where empid = 1009 and Lastname = \'GELLER\';',
      'correct': 'd',
    },
    {
      'que': "Ready the Query carefully:\nSELECT emp_name FROM department WHERE dept_name LIKE ' _____ Computer Science';\nIn the above-given Query, which of the following can be placed in the Query's blank portion to select the 'dept_name' that also contains Computer Science as its ending string?",
      'a': '&',
      'b': '_',
      'c': '%',
      'd': '$',
      'correct': 'c',
    },
    {
      'que': "What do you mean by one to many relationships?",
      'a': 'One class may have many teachers',
      'b': 'One teacher can have many classes',
      'c': 'Many classes may have many teachers',
      'd': 'Many teachers may have many classes',
      'correct': 'b',
    },
    {
      'que': "In the following Query, which of the following can be placed in the Query's blank portion to display the salary from highest to lowest amount, and sorting the employs name alphabetically?\nSELECT * FROM instructor ORDER BY salary ____, name ___;",
      'a': 'Ascending, Descending',
      'b': 'Asc, Desc',
      'c': 'Desc, Asc',
      'd': 'All of the above',
      'correct': 'c',
    },
    {
      'que': "The given Query can be replaced with ____________:\nSELECT name FROM instructor1 WHERE salary <= 100000 AND salary >= 90000;",
      'a': 'SELECT name FROM instructor1 WHERE salary BETWEEN 100000 AND 90000',
      'b': 'SELECT name FROM instructor1 WHERE salary BETWEEN 90000 AND 100000;',
      'c': 'SELECT name FROM instructor| WHERE salary BETWEEN 90000 AND 100000;',
      'd': 'SELECT name FROM instructor! WHERE salary <= 90000 AND salary>=100000;',
      'correct': 'b',
    },
    {
      'que': "A Database Management System is a type of _________software.",
      'a': 'It is a type of system software',
      'b': 'It is a kind of application software',
      'c': 'It is a kind of general software',
      'd': 'Both A and C',
      'correct': 'd',
    },
    {
      'que': "The term 'FAT' stands for_____.",
      'a': 'File Allocation Tree',
      'b': 'File Allocation Table',
      'c': 'File Allocation Graph',
      'd': 'All of the above',
      'correct': 'b',
    },
    {
      'que': "Which of the following can be considered as the maximum size that is supported by FAT?",
      'a': '8GB',
      'b': '4GB',
      'c': '4TB',
      'd': 'None of the above',
      'correct': 'b',
    },
    {
      'que': "The term 'NTFS' refers to which one of the following?",
      'a': 'New Technology File System',
      'b': 'New Tree File System',
      'c': 'New Table type File System',
      'd': 'Both A and C',
      'correct': 'a',
    },
    {
      'que': "Which of the following can be considered as the maximum size that is supported by NTFS?",
      'a': '4GB',
      'b': '16TB',
      'c': '64TB',
      'd': '8TB',
      'correct': 'c',
    },
    {
      'que': "A huge collection of the information or data accumulated from several different sources is known as ________:",
      'a': 'Data Management',
      'b': 'Data Mining',
      'c': 'Data Warehouse',
      'd': 'Both B and C',
      'correct': 'c',
    },
    {
      'que': "Which of the following can be used to extract or filter the data & information from the data warehouse?",
      'a': 'Data redundancy',
      'b': 'Data recovery tool',
      'c': 'Data mining',
      'd': 'Both B and C',
      'correct': 'c',
    },
    {
      'que': "Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.",
      'a': 'Data Repository',
      'b': 'Data Inconsistency',
      'c': 'Data Mining',
      'd': 'Data Redundancy',
      'correct': 'd',
    },
    {
      'que': "Which one of the following refers to the 'data about data'?",
      'a': 'Directory',
      'b': 'Sub Data',
      'c': 'Warehouse',
      'd': 'Meta Data',
      'correct': 'd',
    },
    {
      'que': "Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?",
      'a': 'Conceptual Level',
      'b': 'Physical Level',
      'c': 'File Level',
      'd': 'Logical Level',
      'correct': 'b',
    },
    {
      'que': "To which of the following the term 'DBA' referred?",
      'a': 'Data Bank Administrator',
      'b': 'Database Administrator',
      'c': 'Data Administrator',
      'd': 'None of the above',
      'correct': 'b',
    },
    {
      'que': "In general, a file is basically a collection of all related______.",
      'a': 'Rows & Columns',
      'b': 'Fields',
      'c': 'Database',
      'd': 'Records',
      'correct': 'd',
    },
    {
      'que': "The term 'Data' refers to:",
      'a': 'The electronic representation of the information( or data)',
      'b': 'Basic information',
      'c': 'Row Facts and figures',
      'd': 'Both A and C',
      'correct': 'd',
    },
    {
      'que': "Rows of a relation are known as the _______.",
      'a': 'Degree',
      'b': 'Tuples',
      'c': 'Entity',
      'd': 'All of the above',
      'correct': 'b',
    },
    {
      'que': "Which of the following refers to the number of tuples in a relation?",
      'a': 'Entity',
      'b': 'Column',
      'c': 'Cardinality',
      'd': 'None of the above',
      'correct': 'c',
    },
    {
      'que': "Which one of the following is a type of Data Manipulation Command?",
      'a': 'Create',
      'b': 'Alter',
      'c': 'Delete',
      'd': 'All of the above',
      'correct': 'c',
    },
    {
      'que': "Which of the following command is a type of Data Definition language command?",
      'a': 'Create',
      'b': 'Update',
      'c': 'Delete',
      'd': 'Merge',
      'correct': 'a',
    },
    {
      'que': "Which of the following is a top-down approach in which the entity's higher level can be divided into two lower sub-entities?",
      'a': 'Aggregation',
      'b': 'Generalization',
      'c': 'Specialization',
      'd': 'All of the above',
      'correct': 'b',
    },
    
    {
        'que': "In which one of the following, the multiple lower entities are grouped (or combined) together to form a single higher-level entity?",
        'a': 'Specialization',
        'b': 'Generalization',
        'c': 'Aggregation',
        'd': 'None of the above',
        'correct': 'c',
      },
      {
        'que': "In a relation database, every tuples divided into the fields are known as the______.",
        'a': 'Queries',
        'b': 'Domains',
        'c': 'Relations',
        'd': 'All of the above',
        'correct': 'b',
      },
      {
        'que': "The term 'TCL' stands for_____.",
        'a': 'Ternary Control Language',
        'b': 'Transmission Control Language',
        'c': 'Transaction Central Language',
        'd': 'Transaction Control Language',
        'correct': 'd',
      },
      {
        'que': "In the relational table, which of the following can also be represented by the term 'attribute'?",
        'a': 'Entity',
        'b': 'Row',
        'c': 'Column',
        'd': 'Both B & C',
        'correct': 'd',
      },
      {
        'que': "Which of the following refers to the number of attributes in a relation?",
        'a': 'Degree',
        'b': 'Row',
        'c': 'Column',
        'd': 'All of the above',
        'correct': 'a',
      },
      {
        'que': "Which of the following is used in the application programs to request data from the database management system?",
        'a': 'Data Manipulation language',
        'b': 'Data Definition Language',
        'c': 'Data Control Language',
        'd': 'All of the above',
        'correct': 'a',
      },
      {
        'que': "Which one of the following command is used to delete the existing row in a table?",
        'a': 'Delete',
        'b': 'Update',
        'c': 'Insert',
        'd': 'None of the above',
        'correct': 'a',
      },
      {
        'que': "Which of the following commands is used to save any transaction permanently into the database?",
        'a': 'Commit',
        'b': 'Rollback',
        'c': 'Savepoint',
        'd': 'None of the above',
        'correct': 'a',
      },
      {
        'que': "Which one of the following commands is used for removing (or deleting) a relation from the SQL database?",
        'a': 'Delete',
        'b': 'Drop',
        'c': 'Remove',
        'd': 'All of the above',
        'correct': 'b',
      },
      {
        'que': "Which one of the following commands is used to restore the database to the last committed state?",
        'a': 'Savepoint',
        'b': 'Rollback',
        'c': 'Commit',
        'd': 'Both A & B',
        'correct': 'b',
      },
      {
        'que': "The database management system can be considered as the collection of ______ that enables us to create and maintain the database.",
        'a': 'Translators',
        'b': 'Programs',
        'c': 'Keys',
        'd': 'Language activity',
        'correct': 'b',
      },
      {
        'que': "The term 'DFD' stands for?",
        'a': 'Data file diagram',
        'b': 'Data flow document',
        'c': 'Data flow diagram',
        'd': 'None of the above',
        'correct': 'c',
      },
      {
        'que': "Which of the following refers collection of the information stored in a database at a specific time?",
        'a': 'Independence',
        'b': 'Instance of the database',
        'c': 'Schema',
        'd': 'Data domain',
        'correct': 'b',
      },
      {
        'que': "The term 'SQL' stands for",
        'a': 'Standard query language',
        'b': 'Sequential query language',
        'c': 'Structured query language',
        'd': 'Server-side query language',
        'correct': 'c',
      },
      {
        'que': "The term 'Data independence' refers to____",
        'a': 'Data is defined separately and not included in the programs',
        'b': 'Programs are not dependent on the logical attributes of the data',
        'c': 'Programs are not dependent on the physical attributes of the data',
        'd': 'Both B & C',
        'correct': 'd',
      },
      {
        'que': "What is the relation calculus?",
        'a': 'It is a kind of procedural language',
        'b': 'It is a non-procedural language',
        'c': 'It is a high-level language',
        'd': 'It is Data Definition language',
        'correct': 'b',
      },
      {
        'que': "Which one of the following refers to the total view of the database content?",
        'a': 'Conceptual view',
        'b': 'Physical view',
        'c': 'Internal view',
        'd': 'External view',
        'correct': 'a',
      },
      {
        'que': "For what purpose the DML is provided?",
        'a': 'Addition of new structure in the database',
        'b': 'Manipulation & processing of the database',
        'c': 'Definition of the physical structure of the database system',
        'd': 'All of the above',
        'correct': 'b',
      },
      {
        'que': "The term 'ODBC' stands for_____",
        'a': 'Oral database connectivity',
        'b': 'Oracle database connectivity',
        'c': 'Open database connectivity',
        'd': 'Object database connectivity',
        'correct': 'c',
      },
      {
        'que': "The architecture of a database can be viewed as the ________",
        'a': 'One level',
        'b': 'Two-level',
        'c': 'Three-level',
        'd': 'Four level',
        'correct': 'c',
      },
      {
        'que': "In the relation model, the relation are generally termed as ________",
        'a': 'Tuples',
        'b': 'Attributes',
        'c': 'Rows',
        'd': 'Tables',
        'correct': 'd',
      },
      {
        'que': "The Database Management Query language is generally designed for the _____",
        'a': 'Support end-users who use English like commands',
        'b': 'Specifying the structure of the database',
        'c': 'Support in the development of the complex applications software',
        'd': 'All of the above',
        'correct': 'd',
      },
      {
        'que': "Which of the following keys is generally used to represent the relationships between the tables?",
        'a': 'Primary key',
        'b': 'Foreign key',
        'c': 'Secondary key',
        'd': 'None of the above',
        'correct': 'b',
      },
      {
        'que': "Which of the following levels is considered as the level closest to the end-users?",
        'a': 'Internal Level',
        'b': 'External Level',
        'c': 'Conceptual Level',
        'd': 'Physical Level',
        'correct': 'b',
      },
      {
        'que': "A computer security protocol for logging-in can be considered as the example of the ______ component of an information system.",
        'a': 'Data',
        'b': 'Software',
        'c': 'Procedure',
        'd': 'Hardware',
        'correct': 'c',
      },  
];  


const shuffleArray = (array)=>{
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i+1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

shuffleArray(questions)
const selectedQuestions = questions.slice(0, 10)


let index = 0;
let total = selectedQuestions.length;
let right = 0,
  wrong  = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
  if(index == total){
      return endQuiz()
  }
    reset();  
    const data = selectedQuestions[index];
    quesBox.innerText = ` ${index+1}) ${data.que}`
    
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
  }    

const submitQuiz = () =>{
    let data = selectedQuestions[index];
    let ans = getAnswer()
    
    if(ans === data.correct){
       right++;
    }else{
       wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = (answer) =>{
  // let answer;
    optionInputs.forEach(
      (input)=>{
          if(input.checked){
              answer =  input.value
          }
      }
    )
    return answer;
}
const reset = () =>{
  optionInputs.forEach(
      (input) =>{
          input.checked = false
      }
  )
}

const endQuiz = () =>{
   document.getElementById("box").innerHTML = `
   <div style="text-align:center">
      <h1>DBMS</h1>
      <h3> Thank you Playing the  Quiz</h3>
      <h2>${right} / ${total} are correct  </h2>
   </div>
    `
}
// //initial call
loadQuestion()




// console.log(Math.random() *10)
// console.log(Math.floor(Math.random() * 50))
console.log(Math.floor(Math.random() *10)+1)

