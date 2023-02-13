# Flowers

A simple flowers gallery application.

## Steps to run:

(assuming the user has some previous experience with django and reactjs)

-   Enter into the `flowers_server` directory (`cd flowers_server`)
-   Setup a virtual environment (virtualenv, venv etc)
-   Create a `.env` file to put the `SECRET_KEY`, or else just declare a `SECRET_KEY` environment variable.
-   Install the dependencies using `pip install -r requirements.txt`
-   Run `python manage.py migrate`
-   Create a `media` folder, and copy the contents of `demo_media` folder into `media` folder.
-   Run `python manage.py loaddata flowers.json` (to load some sample data)
-   Then `python manage.py runserver`

-   Get back to the source code root folder `cd ..`

-   Enter into the `flowers_client` directory (`cd flowers_client`)
-   In production, set `REACT_APP_URL_BASE` environment variable to store the django REST API base URL.
-   Run `npm i`, then run `npm run start`
-   Go to http://localhost:3000/ in your browser.

This is just a simple prototype application.
