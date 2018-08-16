var request = require('request');
const queryStringUtil = require('querystring');

const SEND_EMAIL_URL = "https://api.elasticemail.com/v2/email/send";
const API_KEY = "apikey";
const API_KEY_VALUE = '************************';
const SUBJECT_KEY = "subject";
const BODY_KEY = "bodyHtml";
const FROM_KEY = "from";
const FROM_VALUE = "noreply@sarthakj178.com";
const FROM_NAME_KEY = "fromName";
const FROM_NAME_VALUE = "Sarthak Jain";
const MSG_TO_KEY = "msgTo";
const MSG_CC_KEY = "msgCC";
const IS_TRANSACTIONAL_KEY = "isTransactional";
const IS_TRANSACTIONAL_VALUE = "true";

exports.handler = (event, context, callback) => {
    var toEmailAddresses = event.toEmailAddresses;
    var ccEmailAddresses = event.ccEmailAddresses ? event.ccEmailAddresses : '';
    var subject = event.subject;
    var htmlBody = event.htmlBody;
    
    let queryString = queryStringUtil.stringify({
        [SUBJECT_KEY]: subject,
        [BODY_KEY]: htmlBody,
        [FROM_KEY]: FROM_VALUE,
        [FROM_NAME_KEY]: FROM_NAME_VALUE,
        [MSG_TO_KEY]: toEmailAddresses,
        [MSG_CC_KEY]: ccEmailAddresses,
        [IS_TRANSACTIONAL_KEY]: IS_TRANSACTIONAL_VALUE,
        [API_KEY]: API_KEY_VALUE,
    })
    var url = SEND_EMAIL_URL + "?" + queryString;
    console.log(url);

    request.post(url, {}, (err, response, body) => {
        console.log(err, body);
        if (err) {
            callback(err);
        } else {
            var out = JSON.parse(body);
            if (out.success === false) {
                callback(out.error);
            } else {
                event.message_SendEmailViaElasticEmail = "Successfully sent email";
                callback(null, event);
            }
        }
    });
};

