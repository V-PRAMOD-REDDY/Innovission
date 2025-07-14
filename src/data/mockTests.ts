interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface MockTest {
  id: string;
  title: string;
  description: string;
  duration: number;
  questions: Question[];
}

export const mockTests: Record<string, MockTest> = {
  aptitude: {
    id: 'aptitude',
    title: 'Quantitative Aptitude Test',
    description: 'Test your mathematical and logical reasoning skills with this comprehensive aptitude test.',
    duration: 30,
    questions: [
      {
        id: 1,
        question: 'If a train travels 360 kilometers in 4 hours, what is its speed in kilometers per hour?',
        options: ['80 km/h', '90 km/h', '85 km/h', '95 km/h'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'What is 15% of 200?',
        options: ['25', '30', '35', '40'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'If 6 workers can complete a job in 12 days, how many days will it take for 9 workers to complete the same job?',
        options: ['8 days', '10 days', '6 days', '15 days'],
        correctAnswer: 0
      }
    ]
  },
  webdev: {
    id: 'webdev',
    title: 'Web Development Test',
    description: 'Test your knowledge of web development concepts, including HTML, CSS, and JavaScript.',
    duration: 20,
    questions: [
      {
        id: 1,
        question: 'Which of the following is NOT a valid CSS selector?',
        options: ['.class', '#id', '*element', '@name'],
        correctAnswer: 3
      },
      {
        id: 2,
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: ['variable x = 5;', 'var x = 5;', 'x = 5;', 'int x = 5;'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        correctAnswer: 1
      }
    ]
  },
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Test your understanding of fundamental data structures and algorithms concepts.',
    duration: 25,
    questions: [
      {
        id: 1,
        question: 'What is the time complexity of binary search?',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Which data structure follows the LIFO principle?',
        options: ['Queue', 'Stack', 'Array', 'Linked List'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is the space complexity of bubble sort?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correctAnswer: 0
      }
    ]
  },
  interview: {
    id: 'interview',
    title: 'Technical Interview Practice',
    description: 'Practice common technical interview questions to prepare for your next interview.',
    duration: 15,
    questions: [
      {
        id: 1,
        question: 'What is the difference between let and var in JavaScript?',
        options: [
          'let is block-scoped, var is function-scoped',
          'var is block-scoped, let is function-scoped',
          'There is no difference',
          'let is deprecated'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'What is a closure in programming?',
        options: [
          'A way to close a program',
          'A function that has access to variables in its outer scope',
          'A type of loop',
          'A way to close a file'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is the purpose of the useEffect hook in React?',
        options: [
          'To create side effects in components',
          'To style components',
          'To create new components',
          'To handle routing'
        ],
        correctAnswer: 0
      }
    ]
  }
};