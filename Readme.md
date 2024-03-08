Steps to Run Backend Server -----

1. Run 'npm i' command to install all packages.
2. Create a .env file in the main directory of backend and insert following details there:{
        PORT=8000
        MONGODB_URI=mongodb+srv://your_mongoDB_username:<password>@cluster0.majljwd.mongodb.net/
        CORS_ORIGIN=*
    }
3. Run Server with 'npm run dev'