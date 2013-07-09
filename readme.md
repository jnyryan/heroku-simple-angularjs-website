# heroku-simple-angularjs-site

An angularjs application that runs on Heroku that uses ng-view to navigate around the application

Features
- Multiple Pages
- Navigation
- Twitter Bootstrap theme

## Local Installation

	1. Install Ruby and Bundler
	2. Clone this Repo
	3. To get the dependencies run:
		bundle install
	4. To run the web server run
		rackup
	5. To view the site open a browser on 
		http://127.0.0.1:9393
	
		
## Installation on Heroku
	
	Prerequisites
	- Heroku account
	- Heroku toolbelt installed
	- Ruby and Bundler Gem installed
	
	1. Clone this Repo
	2. Login into Heroku
		heroku login
	3. Initialise the heroku site
		heroku create
	4. Push to Heroku.
		git push heroku master
		
	That's it!!!!

## The important bits

	Gemfile
		Tells the ruby interpreter whats needed and what to install
	
	config.ru
		configures RACK, the web server that will host the application
	
	site.js
		This is where the angularjs magic happens
	
## The HTML

	All the html code and graphics are freely available from Twitter Bootstrap.

##References

	https://devcenter.heroku.com/articles/static-sites-ruby
	http://twitter.github.io/bootstrap/getting-started.html
	

	

