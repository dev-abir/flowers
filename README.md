# Flowers

A simple flowers gallery application.

## Steps to run:

(assuming the user has some previous experience with django and reactjss)

-   Enter into the `flowers_server` directory (`cd flowers_server`)
-   Setup a virtual environment (virtualenv, venv etc)
-   Install the dependencies using `pip install -r requirements.txt`
-   Run `python manage.py migrate`
-   Copy the contents of `demo_media` folder into `media` folder.
-   Run `python manage.py loaddata flowers.json` (to load some sample data)
-   Then `python manage.py runserver`

-   Get back to the source code root folder `cd ..`

-   Enter into the `flowers_client` directory (`cd flowers_client`)
-   Run `npm i`, then run `npm run start`
-   Go to http://localhost:3000/ in your browser.

**If you have any queries, please do ask me.**

This is just a simple prototype application.
