# QA Application Frontend README

# QA Application Frontend

This is the frontend part of the QA Application built with Angular. It allows users to ask questions and provide answers.

## Project Structure

The project is structured as follows:

```
frontend
├── src
│   ├── app
│   │   ├── app.component.ts        # Main application component
│   │   ├── app.component.html      # HTML template for the main component
│   │   ├── app.routing.module.ts    # Routing configuration
│   │   ├── components               # Contains various components
│   │   │   ├── question-list        # Component for listing questions
│   │   │   ├── question-detail      # Component for displaying question details
│   │   │   ├── ask-question         # Component for asking a new question
│   │   │   └── answer-list          # Component for listing answers
│   │   ├── services                 # Contains services for API calls
│   │   │   ├── question.service.ts  # Service for managing questions
│   │   │   └── answer.service.ts    # Service for managing answers
│   │   └── models                   # Contains data models
│   │       ├── question.model.ts    # Model for question data
│   │       └── answer.model.ts      # Model for answer data
│   ├── main.ts                      # Entry point for the Angular application
│   ├── styles.css                   # Global styles
│   └── index.html                   # Main HTML file
├── angular.json                     # Angular project configuration
├── package.json                     # Lists dependencies and scripts
├── tsconfig.json                   # TypeScript compiler options
└── README.md                       # Documentation for the frontend application
```

## Getting Started

To set up the frontend application, follow these steps:

1. Navigate to the frontend directory:
   ```
   cd qa-application/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the Angular application:
   ```
   ng serve
   ```

The application will be available at `http://localhost:4200`.

## Features

- Users can view a list of questions.
- Users can ask new questions.
- Users can view answers to questions.

## Technologies Used

- Angular
- TypeScript
- HTML/CSS

## Contributing

Feel free to submit issues or pull requests for any enhancements or bug fixes.