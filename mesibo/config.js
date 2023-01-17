// config.js

/** Copyright (c) 2021 Mesibo
 * https://mesibo.com
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the terms and condition mentioned
 * on https://mesibo.com as well as following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions, the following disclaimer and links to documentation and
 * source code repository.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of Mesibo nor the names of its contributors may be used to
 * endorse or promote products derived from this software without specific prior
 * written permission.
 *
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * Documentation
 * https://mesibo.com/documentation/
 *
 * Source Code Repository
 * https://github.com/mesibo/messenger-javascript
 *
 *
 */

/* Refer following tutorial and API documentation to know how to create a user token
 * https://mesibo.com/documentation/tutorials/first-app/
 *
 * Note, that if you are using logging in with your phone, Mesibo will generate the token.
 * In that case, there is no need to configure token here
 * 
 */
var MESIBO_ACCESS_TOKEN = ""; 

/* App ID used to create a user token. */
//var MESIBO_APP_ID = "com.mesibo.jsdemo";
var MESIBO_APP_ID = "com.cafdev.messengerapp";
const MESSENGER_API_URL = "https://backend.egaze.in/index.php";
const API_URL = "https://messanger.egaze.in/MessengerAPI/";

/* If you are hosting Mesibo backend on your own server, change this accordingly.
 * Refer https://github.com/mesibo/messenger-app-backend
 */
//const MESSENGER_API_URL = "https://messenger.mesibo.com";

/* Default images */
const MESIBO_DEFAULT_PROFILE_IMAGE = "images/profile/default-profile-icon.jpg";
const MESIBO_DEFAULT_GROUP_IMAGE = "images/profile/default-group-icon.jpg";

/************************ Messenger Config Start *****************************/

/* Toggle for synchronizing messages
*  See https://mesibo.com/documentation/tutorials/get-started/synchronization/
*/
var isMessageSync = true;

/*Optional link preview*/
const isLinkPreview = false; //Set to false if link preview not required

/************************ Messenger Config End *****************************/

/************************ Popup Config Start *****************************/

/* A destination where the popup demo app will send message or make calls */
const POPUP_DESTINATION_USER = "<dest user>" 

/************************ Popup Config End *****************************/

var users = [
{'name':'Sample User 1','token':'ba34ccbd7a01d369a4c8745e331610359e15415b2999ee88466894ma14147203ef','address':'CDC0A25E6481FDEEBF686C275D111B0C'},
{'name':'Sample User 2','token':'9ca48ac5cf71e45618d128fe457f9b3c9ef4a73bc87fee77466896rad1edfe5c77','address':'A410DA31966B962AF0B221B5CBD888D0'},
{'name':'Sample User 3','token':'39466f109905d5893fa86cfd6c5880d5209758dca26405ae5546689bpa9e411aa6b9','address':'F27D0D29AB184894966A62BDABF6671A'},
{'name':'Sample User 4','token':'a3c8b2fe8ec0846c5efe7ee6b11bf8d09bc65fdefa86fe2246689doa11b63259cb','address':'854A3E0DF05FECE6A76016744537407D'}
];
/* Debug Mode Configuration */
isDebug = true ;// toggle this to turn on / off for global control
if (isDebug) var MesiboLog = console.log.bind(window.console);
else var MesiboLog = function() {}

var ErrorLog = console.log.bind(window.console);

function saveLoginToken(token,maskAdrs,user){
	localStorage.setItem("MESIBO_MESSENGER_TOKEN", token);
	localStorage.setItem("MESIBO_MESSENGER_ADDRESS", maskAdrs);
	localStorage.setItem("MESIBO_MESSENGER_USER", user);
	return 0;
}

function deleteTokenInStorage(){
	localStorage.removeItem("MESIBO_MESSENGER_TOKEN");
}

function getLoginToken(){
	if(MESIBO_ACCESS_TOKEN && MESIBO_ACCESS_TOKEN.length > 16)
		return MESIBO_ACCESS_TOKEN;

	var token = localStorage.getItem("MESIBO_MESSENGER_TOKEN");
	if(token && token.length > 16) return token;

	return null;
}

