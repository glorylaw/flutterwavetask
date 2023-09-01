## For the hosted app the link is https://goorbank.onrender.com/

For the first endpoint add /create to the above link this is a post request so you will not see any data i.e https://goorbank.onrender.com/create

for the second enpoint add  /resolve/accountnumber  to the above link please do not add : an example is https://goorbank.onrender.com/resolve/3007224277

for the third endpoint which returns all account add  /retrieve to the above link just like this https://goorbank.onrender.com/retrieve

## FOR LOCAL HOST SEE BELOW

## Run npm install in your terminal to download all node modules after successful clone of git repository

## Run npm start to start the Server 

## Run npm run compile to watch for errors in a seperate terminal


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
