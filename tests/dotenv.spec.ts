
// Steps to work with .env files

// 1. We have to install dotenv package - npm install dotenv
// dotenv package is used to load environment variables from a .env file into process.env(Global object in Node.js)
// 2. create a .env file in your project
// 3. inside the config file we can call the dotenv.config({path: "path of the .env"}) method to load the environment variables from the .env file into process.env
// 4. (Optional step)  create a ENV object to access the environment variables in a structured way
// 5. Import the ENV object in the test files where you want to use the environment variables
// 6. We can access the environment variables using ENV object like ENV.baseUrl, ENV.username, etc.



// Steps to work with excel file
// 1. We have to install xlsx package - npm install xlsx
// 2. create and store the excel file in the project directory
// 3. import the xlsx package in the file where you want to read/write the excel file
// 4. Create a function to read the excel file using xlsx package
// 5. Read the file and convert it to JSON format using xlsx.utils.sheet_to_json method
// 6. Return the JSON data from the function
// 7. Call or import the function in the test file and store the data in a variable