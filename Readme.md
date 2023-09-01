## Run npm install in your terminal to download all node modules after successful clone of git repository

## Run npm start to start the Server 

## Run npm run complie to watch for errors in a seperate terminal


## Once you see "db connected successful" on your terminal as well as Server is running on port 7000 you can start testing

## To test on postman for endpoints use the route below

## Endpoint 1 http://localhost:7000/create the parameters to be in your body is below.click on body,then raw then json then input the json object below and fill the parameters to create an account

{
    
    "accountType": "",
    "holderName": "",
    "dateOfBirth": "yyyy-mm-dd",
    "initialBalance": ""

}

## Endpoint 2 http://localhost:7000/resolve/:accountNumber , the accountNumber should be the accountNumber you are looking for  in the database

## Endpoint 3 http://localhost:7000/retrieve this will retrieve all accounts