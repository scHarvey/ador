# A Day of Rest : Boston

## Workshop Notes
* [Auth and the WordPress API](auth.md)
* [WooCommerce API](woocommerce-api/readme.md)
* [Intro to React](react-beer-me/readme.md)


Conference Notes:

### [Joe Hoyle](https://twitter.com/joe_hoyle) - Diving into REST API - [Slides](https://www.dropbox.com/s/apyw8tgqyyq3tdy/Joe_Hoyle_Diving%20into%20the%20REST%20API.pdf?dl=0)
* Magic "_links" shows relations to the requested object
* /post/123?_embed returns a richer post object with the relations included in _embedded
* API has a robust Schema, helps with client side validation, etc
* Auth
    * Cookie - for apps/additions within an existing WordPress site
    * Basic - server to server applications
    * OAuth 1 - user giving access to the system to act on their behalf. oauth1.wp-api.org
    * Brokered - for when you've built a system that needs to register an OAuth type app and get creds with a user's site. Acts like OAuth after the initial setup.
    * Oauth2 - possible if you know there will be SSL (otherwise same use case as Oauth1)
    * apps.wp-api.org/spec
    * apps.wp-api.org/app_developers
* Client Libraries
    * Backbone Core Client
    * wordpress-rest-api-oauth-1
    * wpapi NodeJS / Browser
* Developing
    * register_rest_route
    * show_in_rest
    * register_meta
    * WP_REST_Controller

### [Phil Sturgeon](https://twitter.com/philsturgeon) - API Tales of Woe and Woah! - [Slides](https://talks.philsturgeon.uk/complete/tales-of-woe-and-woah/#/)
* Don't use GET for a delete - crawler might delete all your stuff
* Be error heavy when developing an API
* API shouldn't just be an HTTP interface to SQL
* Runscope - request/response logging tool
* JSON API documentation formatting
* HTTP status dogs
* Don't just worry about the happy path, code for the errors
* Instead of assuming a particular response, check for it, then deal with it or deal with the unexpected response.
* Swagger - API documenter
* Packagist.org/packages/koine/strong-parameters
* VCR stubs instead of static stubs
* Apisyouwonthate.com coupon:wordpress
* Has new book for front end devs that use APIs
* GraphUL or GraphQL? Compare to rest

### [Adam Silverstein](https://twitter.com/roundearth) - Backbone - Wordpress REST API - [Slides](https:/cl.ly/351x2H1X1h1Z)
* Backbone added in 3.5
* More and more features, mostly admin, moving to backbone
* Context:edit if we want rendered content as it requires authentication
* Vs React
    * Pros
        * Backbone
            * Separation of concerns
            * Event/listener system
            * Sync
            * Templates
            * Built in to WordPress
            * Stable, lightweight, fast
            * Includes underscore
        * React
            * Reusable/Composable component architecture
            * JSX easy to write
            * Component lifecycles events
            * Rich module ecosystem
            * Redux - smarter models
            * React Router
            * Create React App
            * Wicked Fast
    * Cons
        * Backbone
            * No central state management
            * Inner-app communications
            * Too flexible
            * Difficult to reason about
            * Tricky to debug
            * Didn't scale well
            * Complex views no nesting
            * Marionette
        * React
            * Hard to get started
            * Constant churn
            * Docs out of date
            * Heavy
            * Debugging builds
* Examples
    * WAMU.org - react front end, backbone admin
    * NYTimes Journeys - backbone
* Tunedin.net
* Starter themes - React 2016, Us2 hoping to open source WAMU

### [Kelly Dwan](https://twitter.com/ryelle) - Reacting to WordPress - [Slides](https://www.dropbox.com/s/omnxlkdxv2k0yhx/ADOR-2017-ReactWordPress.pdf?dl=0)
* Virtual dom compared to real Dom only changes are written to DOM
* Addons
    * Webpack - packager / runner
    * Babel 
    * Npm
    * Flux - standard for handling data in an app
    * Redux - a bit different approach than flux
        * Egghead.io/redux
    * React Router
    * Node
    * Create React App
* Who's using react
    * Jetpack admin side
    * Foxhound - react theme 
    * Wordpress-rest-api-oauth-1 - npmjs.org/ryelle
    * Wordcamp Us - social media stream
* Accessibility
    * Web aim
* Serverside Rendering -isomorphic
* Calypso extensions - ryelle.codes/calypso-extensions

### [John Eckman](https://twitter.com/jeckman) (CEO 10up) - 10 REST API Use Cases - [Slides](https://www.slideshare.net/jeckman/10-rest-api-use-cases-in-10-minutes)
* Headless - themes/apps not tied to WordPress theme system
    * Pace layering -change front end more often than back end
    * Dynamic applike experience
* Multi-headed
    * customized experience for different audiences
* Infrastructure
    * WordPress as a microservice
    * Create content in WordPress consume it anywhere
* In-Site Content
    * Load more
    * Filtered search
    * Related stories
    * Sponsored content /native ads
* Cross-site content
    * Syndication across a network
    * Pull based on taxonomy
    * Admin experience to push content to another site you have access to
* Improved authoring experience
    * Creating complex content types
    * Infrequent user firms
* Improved editor
* Integrating other services
    * Google docs
* Integration with mobile apps
* Integration with desktop apps

### [Mel Choyce](https://twitter.com/melchoyce) [personal site](http://melchoyce.design) - a design perspective on rest api - [Slides](https://www.dropbox.com/s/xadpu3rscefwbnw/Mel%20Choyce%20design-perspective-on-the-rest-api.pdf?dl=0)
* Quartz - neat site
* Concerns
    * Mobile App Design
        * Apple HID
        * Android Material
    * Interaction Design
        * Button clicks
        * Dragging items
    * Disney's 12 basic principals of animation
    * How can dev help
        * Early talk about requirements
        * What's easier to do with the API now

### [Petra Raykovsky](https://twitter.com/petyeah) - Great Expectations - [Slides](http://petya.in/great-expectations-prepare-your-non-developers-for-a-rest-api-project/)
* Discuss with clients how things will change when you build a site using the rest API.
    * Some admin features they are used to may go away

### [Rachel Baker](https://twitter.com/rachelbaker) - Real Time REST API - [Slides](https://speakerdeck.com/rachelbaker/real-time-rest-api-with-wordpress)
speakersdeck.com/RachelBaker/real-time-rest-api-with-wordpress
* How can the client know if anything changes?
    * Cases
        * Letting a visitor know there's a new post
        * Cache busting
    * Webhooks + WordPress actions
    * Resthooks - resthooks.org/docs
        * Needs
            * Mechanism to store subscriptions
            * CRUD endpoints for subs
        * Gotchas
            * Error handling and/or retrying
            * Performance issues in real time, maybe delayed queue instead
            * Impact of payload size
            * Security and auth
            * You now have an RPC api

### [K. Adam White](https://twitter.com/kadamwhite) - API client API design - [Slides](http://talks.kadamwhite.com/ador-boston)

### [Ben Foxall](https://twitter.com/benjaminbenben) - http kind of sucks - [Slides](https://speakerdeck.com/benfoxall/making-simple-things)
* Why it sucks
    * Was designed with wires in mind
    * Need to be constantly online
    * Can't get a response without request
* IoT + WordPress
    * MQTT message queue telemetry transport
        * Stateful
        * Message based
        * Binary
* Emqtt
* Puck.js
* Espruino
* Nophone
* bitly.com/ADORB


### Random Things from My Notes
* Test 262
* Joke: Swiss Army Hammer vs American Armie Hammer
* Skunk Works - Nicholas Means

### Other Links That Came Up in One Session or Another
* https://github.com/mzabriskie/axios <-- alternative to JQuery AJAX
* https://yarnpkg.com/en/ <-- alternative/wrapper to NPM
* https://zeit.co/blog/next <-- don't remember why I noted this
* https://www.npmjs.com/package/n  <-- alternative to nvm