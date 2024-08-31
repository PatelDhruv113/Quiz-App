
const questions = [
    {
        'que': "Which of the following is not an operating system?",
        'a': 'Windows',
        'b': 'Linux',
        'c': 'Oracle',
        'd': 'DOS',
        'correct': 'c'
    },
    {
        'que': "What is the maximum length of the filename in DOS?",
        'a': '4',
        'b': '5',
        'c': '8',
        'd': '12',
        'correct': 'c'
    },
    {
        'que': "When was the first operating system developed?",
        'a': '1948',
        'b': '1949',
        'c': '1950',
        'd': '1951',
        'correct': 'd'
    },
    {
        'que': "When were MS windows operating systems proposed?",
        'a': '1994',
        'b': '1990',
        'c': '1992',
        'd': '1985',
        'correct': 'd'
    },
    {
        'que': "Which of the following is the extension of Notepad?",
        'a': '.txt',
        'b': '.xls',
        'c': '.ppt',
        'd': '.bmp',
        'correct': 'a'
    },
    {
        'que': "What else is a command interpreter called?",
        'a': 'prompt',
        'b': 'kernel',
        'c': 'shell',
        'd': 'command',
        'correct': 'c'
    },
    {
        'que': "What is the full name of FAT?",
        'a': 'File attribute table',
        'b': 'File allocation table',
        'c': 'Font attribute table',
        'd': 'Format allocation table',
        'correct': 'b'
    },
    {
        'que': "BIOS is used?",
        'a': 'By operating system',
        'b': 'By compiler',
        'c': 'By interpreter',
        'd': 'By application software',
        'correct': 'a'
    },
    {
        'que': "What is the mean of Booting in the operating system?",
        'a': 'Restarting computer',
        'b': 'Install the program',
        'c': 'To scan',
        'd': 'To turn off',
        'correct': 'a'
    },
    {
        'que': "When does a page fault occur?",
        'a': 'The page is present in memory.',
        'b': 'The deadlock occurs.',
        'c': 'The page does not present in memory.',
        'd': 'The buffering occurs.',
        'correct': 'c'
    },
    {
        'que': "Banker's algorithm is used?",
        'a': 'To prevent deadlock',
        'b': 'To deadlock recovery',
        'c': 'To solve the deadlock',
        'd': 'None of these',
        'correct': 'a'
    },
    {
        'que': "When you delete a file in your computer, where does it go?",
        'a': 'Recycle bin',
        'b': 'Hard disk',
        'c': 'Taskbar',
        'd': 'None of these',
        'correct': 'a'
    },
    {
        'que': "Which is the Linux operating system?",
        'a': 'Private operating system',
        'b': 'Windows operating system',
        'c': 'Open-source operating system',
        'd': 'None of these',
        'correct': 'c'
    },
    {
        'que': "What is the full name of the DSM?",
        'a': 'Direct system module',
        'b': 'Direct system memory',
        'c': 'Demoralized system memory',
        'd': 'Distributed shared memory',
        'correct': 'd'
    },
    {
        'que': "What is the full name of the IDL?",
        'a': 'Interface definition language',
        'b': 'Interface direct language',
        'c': 'Interface data library',
        'd': 'None of these',
        'correct': 'a'
    },
    {
        'que': "What is bootstrapping called?",
        'a': 'Cold boot',
        'b': 'Cold hot boot',
        'c': 'Cold hot strap',
        'd': 'Hot boot',
        'correct': 'a'
    },
    {
        'que': "What is the fence register used for?",
        'a': 'To disk protection',
        'b': 'To CPU protection',
        'c': 'To memory protection',
        'd': 'None of these',
        'correct': 'c'
    },
    {
        'que': "If the page size increases, the internal fragmentation also?",
        'a': 'Decreases',
        'b': 'Increases',
        'c': 'Remains constant',
        'd': 'None of these',
        'correct': 'b'
    },
    {
        'que': "Which of the following is a single-user operating system?",
        'a': 'Windows',
        'b': 'MAC',
        'c': 'Ms-Dos',
        'd': 'None of these',
        'correct': 'c'
    },
    {
        'que': "The size of virtual memory is based on which of the following?",
        'a': 'CPU',
        'b': 'RAM',
        'c': 'Address bus',
        'd': 'Data bus',
        'correct': 'c'
    },
    {
        'que': "If a page number is not found in the translation lookaside buffer, then it is known as a?",
        'a': 'Translation Lookaside Buffer miss',
        'b': 'Buffer miss',
        'c': 'Translation Lookaside Buffer hit',
        'd': 'All of the mentioned',
        'correct': 'a'
    },
    {
        'que': "Which of the following is not application software?",
        'a': 'Windows 7',
        'b': 'WordPad',
        'c': 'Photoshop',
        'd': 'MS-excel',
        'correct': 'a'
    },
    {
        'que': "Which of the following supports Windows 64 bit?",
        'a': 'Window XP',
        'b': 'Window 2000',
        'c': 'Window 1998',
        'd': 'None of these',
        'correct': 'a'
    },
    {
        'que': "Which of the following windows does not have a start button?",
        'a': 'Windows 7',
        'b': 'Windows 8',
        'c': 'Windows XP',
        'd': 'None of these',
        'correct': 'b'
    },
    {
        'que': "Which of the following operating systems does not support more than one program at a time?",
        'a': 'Linux',
        'b': 'Windows',
        'c': 'MAC',
        'd': 'DOS',
        'correct': 'd'
    },
    {
        'que': "Which of the following is a condition that causes deadlock?",
        'a': 'Mutual exclusion',
        'b': 'Hold and wait',
        'c': 'Circular wait',
        'd': 'No preemption',
        'correct': 'e'
    },
    {
        'que': "Who provides the interface to access the services of the operating system?",
        'a': 'API',
        'b': 'System call',
        'c': 'Library',
        'd': 'Assembly instruction',
        'correct': 'b'
    },
    {
        'que': "Where are placed the list of processes that are prepared to be executed and waiting?",
        'a': 'Job queue',
        'b': 'Ready queue',
        'c': 'Execution queue',
        'd': 'Process queue',
        'correct': 'b'
    },
    {
        'que': "Who among the following can block the running process?",
        'a': 'Fork',
        'b': 'Read',
        'c': 'Down',
        'd': 'All of these',
        'correct': 'd'
    },
    {
        'que': "Which of the following does not interrupt the running process?",
        'a': 'Timer interrupt',
        'b': 'Device',
        'c': 'Power failure',
        'd': 'Scheduler process',
        'correct': 'd'
    },
    {
        'que': "What is Microsoft window?",
        'a': 'Operating system',
        'b': 'Graphics program',
        'c': 'Word Processing',
        'd': 'Database program',
        'correct': 'a'
    },
    {
        'que': "Which of the following is a group of programs?",
        'a': 'Accessories',
        'b': 'Paint',
        'c': 'Word',
        'd': 'All of above',
        'correct': 'd'
    },
    {
        'que': "Which of the following is an example of a Real Time Operating System?",
        'a': 'MAC',
        'b': 'MS-DOS',
        'c': 'Windows 10',
        'd': 'Process Control',
        'correct': 'd'
    },
    {
        'que': "Which of the following operating systems do you use for a client-server network?",
        'a': 'MAC',
        'b': 'Linux',
        'c': 'Windows XP',
        'd': 'Windows 2000',
    },
    
    {
        'que': "What is the main function of an operating system?",
        'a': 'To manage hardware resources',
        'b': 'To process data',
        'c': 'To create documents',
        'd': 'To design graphics',
        'correct': 'a'
    },
    {
        'que': "Which command is used to display the directory contents in Linux?",
        'a': 'dir',
        'b': 'ls',
        'c': 'show',
        'd': 'list',
        'correct': 'b'
    },
    {
        'que': "What does GUI stand for?",
        'a': 'General User Interface',
        'b': 'Graphical User Interface',
        'c': 'Global User Interface',
        'd': 'Graphics User Interface',
        'correct': 'b'
    },
    {
        'que': "Which type of memory is directly accessible by the CPU?",
        'a': 'Secondary memory',
        'b': 'Tertiary memory',
        'c': 'Cache memory',
        'd': 'Virtual memory',
        'correct': 'c'
    },
    {
        'que': "What is a kernel in an operating system?",
        'a': 'The user interface',
        'b': 'The core component managing system resources',
        'c': 'The application software',
        'd': 'The file management system',
        'correct': 'b'
    },
    {
        'que': "What does GUI stand for?",
        'a': 'General User Interface',
        'b': 'Graphical User Interface',
        'c': 'Global User Interface',
        'd': 'Graphics User Interface',
        'correct': 'b'
    },
    {
        'que': "Which of the following is a process management function?",
        'a': 'File system management',
        'b': 'Memory allocation',
        'c': 'Task scheduling',
        'd': 'Input/output handling',
        'correct': 'c'
    },
    {
        'que': "What is the primary purpose of a file system?",
        'a': 'To store and retrieve files',
        'b': 'To manage hardware resources',
        'c': 'To execute applications',
        'd': 'To provide network services',
        'correct': 'a'
    },
    {
        'que': "Which of the following is a batch processing system?",
        'a': 'Real-time operating system',
        'b': 'Multiprogramming operating system',
        'c': 'Time-sharing operating system',
        'd': 'None of these',
        'correct': 'b'
    },
    {
        'que': "In which operating system environment is a command line interface most commonly used?",
        'a': 'Windows',
        'b': 'macOS',
        'c': 'Linux',
        'd': 'iOS',
        'correct': 'c'
    },
    {
        'que': "What is a 'daemon' in Unix-based systems?",
        'a': 'A system file',
        'b': 'A background process',
        'c': 'A user application',
        'd': 'A type of virus',
        'correct': 'b'
    },
    {
        'que': "Which of the following is not a file system type?",
        'a': 'NTFS',
        'b': 'FAT32',
        'c': 'EXT4',
        'd': 'MIR',
        'correct': 'd'
    },
    {
        'que': "What is a 'service' in an operating system?",
        'a': 'A user application',
        'b': 'A system-level process that performs tasks',
        'c': 'A command-line tool',
        'd': 'A file management tool',
        'correct': 'b'
    },
    {
        'que': "What is the role of a device driver?",
        'a': 'To manage hardware devices',
        'b': 'To manage software applications',
        'c': 'To manage system memory',
        'd': 'To manage network connections',
        'correct': 'a'
    },
    {
        'que': "Which of the following operating systems is known for its security features and is often used in servers?",
        'a': 'Windows',
        'b': 'macOS',
        'c': 'Linux',
        'd': 'iOS',
        'correct': 'c'
    },
    {
        'que': "What is virtual memory primarily used for?",
        'a': 'To increase system storage',
        'b': 'To extend physical memory',
        'c': 'To manage file systems',
        'd': 'To improve hardware performance',
        'correct': 'b'
    }
];   

const shuffleArray = (array)=>{
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * i);
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
    optionInputs[3].nextElementSibling.innerText = data.d
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
      <h1>Operating System</h1>
      <h3> Thank you Playing the  Quiz</h3>
      <h2>${right} / ${total} are correct  </h2>
   </div>
    `
}
// //initial call
loadQuestion()






