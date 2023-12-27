# docker-nodejs-mysql

Dokerized NodeJS app with MySQL Database

<h2>How to run</h2>
<ol>
	<li>Clone this repository</li>
	<li>
		Run this command <code>docker-compose up</code>
	</li>
	<li>
		Access <code>localhost:3000</code> in your browser and empty json will be shown
	</li>
	<li>
		For adding new users you can use Postman and add new user via <code>http://localhost:3000/add-user</code> endpoint. Example:
		```{
			"fullname": "Will Smith"
		}```
	</li>
</ol>
