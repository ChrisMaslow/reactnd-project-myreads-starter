import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.

 books: [
  {
  "title": ""
  "authors": [""]
  "imageLinks": {
    "smallThumbnail": "",
    "thumbnail": ""
    }
  "id": "",
  "shelf": ""
  }
]


{"title":"Learning Web Development with React and Bootstrap",
"authors":["Harmeet Singh","Mehul Bhatt"],
"publishedDate":"2016-12-30",
"description":"Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
"industryIdentifiers":[{"type":"ISBN_10","identifier":"1786462494"},{"type":"ISBN_13","identifier":"9781786462497"}],
"readingModes":{"text":false,"image":false},
"pageCount":278,
"printType":"BOOK",
"maturityRating":"NOT_MATURE",
"allowAnonLogging":false,
"contentVersion":"preview-1.0.0",
"panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},
"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
"language":"en",
"previewLink":"http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
"infoLink":"http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
"canonicalVolumeLink":"https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
"id":"sJf1vQAACAAJ",
"shelf":"currentlyReading"}

Search results:

{"title":"Best Android Apps",
"subtitle":"The Guide for Discriminating Downloaders",
"authors":["Mike Hendrickson","Brian Sawyer"],
"publisher":"\"O'Reilly Media, Inc.\"",
"publishedDate":"2010-04-27",
"description":"Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
"industryIdentifiers":[{"type":"ISBN_13","identifier":"9781449382551"},{"type":"ISBN_10","identifier":"144938255X"}],
"readingModes":{"text":false,"image":false},
"pageCount":240,
"printType":"BOOK",
"categories":["Computers"],
"averageRating":4,
"ratingsCount":3,
"maturityRating":"NOT_MATURE",
"allowAnonLogging":false,
"contentVersion":"preview-1.0.0",
"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api","infoLink":"http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
"id":"bUybAgAAQBAJ"}

**/

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
