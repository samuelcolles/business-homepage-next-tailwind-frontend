# Business homepage builder

## Getting Started

First, you will need the backend avialable here:

<https://github.com/samuelcolles/business-homepage-next-tailwind-backend>

by default it will be running on port 3000

### Populate the backend

You Will want to start by adding stuff into the backend, make sure you remember to hit "publish" or it wont show up on the site. You also need to allow public access to the conent in the settings>Users & Permissions Plugin>Roles>Public. Under the "Permissions" heading select each item and check on "find and findOne" for every item. Then click "save" on the top right.

## Fitting your needs

The site is generated automatically based on what you choose to use. Content sections can all be left blank if you don't want to use them. The content you do use will be populated and laid out automatically.

### Some of the stuff you can add

- Static image site header: this large header takes up the entire width of the page and is 100vh tall, so it changes to fit your screen.
- Video site header: alternativly, you can use an embeded youtube video as a site header. You can also add a custom thumbnail so you don't have a blury default thumbnail ruining the crispness of your site.
- Hero/info Section: Add a picture with a heading and some text. This is usefull for listing some of the main purposes of your business. You can have multiple heroes which are automatically sylized and animated alternating between left and right on desktop. In mobile view It shows the picture then your "blurb".
- Checklist: You can add multiple checklist, you can use a custom Icon that will be shown before every item, or you can add a custom Icon for every single Item.
- Image Card Grid: This is great for showing off services and products that are not available online. Price tags are optional.
- Location information: Embedded google maps with optional heading/plain text address. You can also skip the embedded map and just use the plain text address.
- Shares section: Add links to social media, email, phone or anything else. Optional heading, label and icon.
- Contact sheet: Powered by twillio sendgrid. Provide an api key from sendgrid and simply add your email address in site-info.
- Employee Highlight: Show off your major players in style. Optional titles, phone numbers, and email adress.

### Modifying the theme

This project uses Tailwind.css, you can edit the themefile to get lots of different looks. By default this project is using a "Christmas Present" inspired theme. Modifying tailwind themes is beyond the scope of this readme, but you should be able to find lots of resources to do this yourself.

## Deployment

I personally deploy this on a Linux Ubuntu server, with Caddy acting as a webserver reverse proxying to the local host 3000.

It will probably be easier for you to just deploy this to Vercel.

This website is statically generated, meaning that you will need to rebuild and restart the app to see changes on the backend. Right now this is done manually but in the future it will be automated.

To get started clone the project from github. Next, install the packages by running "npm i" Then install it To build this app type: "npm run build" and wait for that to finish. Finally use "npm run start" to start the app. If you are hosting on linux I recommend using a process manager such as PM2.
