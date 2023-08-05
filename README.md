# Readers Review - Book Catalog System

![License](https://img.shields.io/badge/license-MIT-blue.svg)

Readers Review is a web application built using React and Redux that serves as a book catalog system. It allows users to explore a curated list of top 10 recently added books, add new books, leave reviews, manage wishlists, and access detailed information about each book. The project also incorporates authentication using Firebase to provide a personalized experience.

Visit the live app: [Readers Review](https://readers-review.web.app/)

## Table of Contents

- [Readers Review - Book Catalog System](#readers-review---book-catalog-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Authentication](#authentication)
  - [All Books Section](#all-books-section)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- Landing Page with a header, a list of the top 10 recently added books, and a footer.
- Open routes: "All Books", "Login", and "Register".
- Firebase authentication for secure user login and registration.
- Authenticated users can add books, provide reviews, and manage wishlists.
- Visitors can view detailed book information by clicking the "See More Details" button.
- All Books section includes search by author name or book name, genre filtering, and year-based filtering.


## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js and npm should be installed.
- You need a Firebase account and configuration for authentication.

### Installation

1. Clone the repository: `[git clone https://github.com/YourUsername/YourRepository.git](https://github.com/TanvirHasanPrince/reader-review.git)`
2. Navigate to the project directory: `cd readers-review`
3. Install dependencies: `npm install`

### Usage

1. Create a Firebase project and configure authentication.
2. Update the Firebase configuration in `src/firebase.js` with your own credentials.
3. Run the development server: `npm start`
4. Open your browser and go to: `http://localhost:3000`

## Authentication

This project utilizes Firebase for user authentication. Authenticated users have access to additional features such as adding books, leaving reviews, and managing wishlists.

## All Books Section

- Search: Users can search for books by author name or book name.
- Filter by Genre: Users can filter books by genre.
- Filter by Year: Users can filter books by publication year.

## Contributing

We welcome contributions from the community! To contribute to the project, follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Built with HTML, CSS, JavaScript, React.js, TypeScript, Node.js, MongoDB, Tailwind CSS, and DaisyUI.
- Thanks to [Firebase](https://firebase.google.com/) for authentication.
- Server-side code: [Readers Review Server](https://github.com/TanvirHasanPrince/readers_review_server.git)
- Server deployment on Vercel: [Reader Review Server - Vercel](https://reader-review-server.vercel.app/)

