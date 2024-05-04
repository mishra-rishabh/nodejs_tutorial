ExpressJS is a popular Node.js framework that makes it easy to build web applications.<br/>

Here are some of its key features:
* Fast: ExpressJS is very fast, thanks to its efficient use of Node.js's asynchronous programming model.
* Routing: ExpressJS provides a simple and powerful routing system that makes it easy to map HTTP requests to specific handlers.
* Middleware: ExpressJS supports middleware, which is a powerful way to intercept and process HTTP requests before they reach their final destination.
* Database integration: ExpressJS makes it easy to integrate with popular databases, such as MySQL, MongoDB, and PostgreSQL.
* Error handling: ExpressJS provides built-in error handling functionality, making it easy to handle errors gracefully and return informative responses to users.

Overall, ExpressJS is a powerful and versatile framework that can be used to build a wide variety of web applications. It is a popular choice for developers of all skill levels, and it offers a number of features that make it easy to build secure, scalable, and maintainable web applications.

<b>middleware:</b> middleware is some function that gets executed before all the routes, i.e., saare routes me se koi ek bhi route chale to uske pehle middleware chalega and usme likha code pehle execute hoga. We can make any number of middlewares in our code as per the requirement.

<b>request (req):</b> request me saara data hota hai aane wale user ki request ki taraf ka, jaise ki uski location, device info, and other things.

<b>response (res):</b> response me controls hote hain jinke basis pe hum server se response bhej paate hain.

<b>next():</b> next() is just a push so that our request moves to other thing which should be executed.
