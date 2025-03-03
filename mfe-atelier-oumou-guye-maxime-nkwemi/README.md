# mfe-atelier-prenom-nom

## Project Overview
This project demonstrates a simple Micro Frontend (MFE) architecture using Module Federation. It consists of a shell application that loads a micro frontend for the header.

## Project Structure
```
mfe-atelier-prenom-nom
├── shell
│   ├── src
│   │   ├── index.js
│   │   ├── App.js
│   │   └── components
│   │       └── Header.js
│   ├── webpack.config.js
│   └── package.json
├── header
│   ├── src
│   │   ├── index.js
│   │   └── Header.js
│   ├── webpack.config.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/oguey/mfe-atelier-oumou-gueye-maxime-nkwemi/tree/main/mfe-atelier-oumou-guye-maxime-nkwemi
   ```
2. Navigate to the shell directory and install dependencies:
   ```
   cd mfe-atelier-prenom-nom/shell
   npm install
   ```
3. Navigate to the header directory and install dependencies:
   ```
   cd ../header
   npm install
   ```

### Running the Applications
1. Start the header micro frontend:
   ```
   cd header
   npm start
   ```
   This will run the header application on a specified port (default is 3001).

2. Start the shell application:
   ```
   cd ../shell
   npm start
   ```
   This will run the shell application on a specified port (default is 3000).

### Accessing the Application
- Open your browser and navigate to `http://localhost:3000` to view the shell application with the header micro frontend loaded.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License.