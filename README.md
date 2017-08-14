# angularjsclient-webapi
The solution consists of 3 projects: an ASP .NET Web API 2, an Angularjs client and a test project.

I've implemented the best practices for client-based applications in Angularjs by implementing services that are called from the Angularjs controller.

The client application uses bootstrap for rendering the style of the html and the asynchronous calls to the web API are done by using Angularjs $resource.

Both client and Web Api are in the same solution, so to run it you can simply click run and it will run both, the Web API and the Angularjs client app together.

The only 2 things to modify is the port numbers that you will be using. This is because I configured the Web API application to only accept calls from the Angularjs client app. 

So in the Web API project, in the NumbersController.cs, make sure that you update the EnableCors attribute with the right port number for where the Angularjs app will be running in your machine: [EnableCors("http://localhost:54078", "*", "*")]

In order to know the port number of the Angularjs client app, simply right click on the AKQA.AngularjsClient site project and select "Properties Window". This will show the properties of the site. Find the URL property and use the port number you see there in the NumbersController.cs file and replace the port number that is currently in the EnableCors attribute.

The other place where the port number needs to be replaced is in the AKQA\AKQA.AngularjsClient\common\common.services.js file. You need to change that port number with the one the Web API project is using in your machine once you download the code from github.

In order to get the port from where the Web API will be running, simply expand the AKQA.WebAPI project and double click on the Properties file at the top. Then go to the Web tab and then scroll down and find the property called Project URL. Use the port that you see there and paste it instead of the port that you see in AKQA\AKQA.AngularjsClient\common\common.services.js


