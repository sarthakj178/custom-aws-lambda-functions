# SendMailViaElasticEmail

NodeJS based AWS Lambda function to send emails via [Elastic Email](https://elasticemail.com/)

## Build
* Checkout the code
```
git clone https://github.com/sarthakj178/custom-aws-lambda-functions.git
cd custom-aws-lambda-functions/SendMailViaElasticEmail
npm install
```
* Edit the values of constants API_KEY_VALUE, FROM_VALUE and FROM_NAME_VALUE as per your ElasticEmail setup.
* Zip the contents of the folder SendMailViaElasticEmail and upload to AWS Lambda

