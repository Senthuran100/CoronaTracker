# CoronaTrackerApp
This is a Corona Tracking Application. Implemented a module where the Admin user update the newcases in each Area. Front End component is implemented in the React. Spring boot is used in the backend to expose the service as an API. WSO2 API Manager is used to expose the API and it is used in securing the backend Exposed API. Mysql is used as the database.

In order to deploy this Application first run the spring boot application. Then download the API Manager and create an API in the publisher with the swagger.json that is attached in the github repo. Then in the production endpoint mention the backend url(http://localhost:8080/api). Finally run the react application using npm start. Refer the below image for your reference.  


<img src="https://github.com/Senthuran100/CoronaTracker/blob/master/images/image1.png" />
<img src="https://github.com/Senthuran100/CoronaTracker/blob/master/images/image2.png" />
<img src="https://github.com/Senthuran100/CoronaTracker/blob/master/images/IS_SignIN.png" />
<img src="https://github.com/Senthuran100/CoronaTracker/blob/master/images/AddRecord.png" />
<img src="https://github.com/Senthuran100/CoronaTracker/blob/master/images/mysql.png" />
