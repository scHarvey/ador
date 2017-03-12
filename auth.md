# REST API Authentication - Joe Hoyle - http://twitter.com/joe_hoyle

## Cookie Based
* /wp-json/wp/v2/users/me
    * if this responds with a 401 then you’re not authenticated
* WP REST API bypasses/disables CORS
    * So you need something to prevent it
    * enter nonces
    * if you have a headless JS app that gets data from the rest api you need to pass that nonce from WP somehow
* Best used when you would have previously used admin-ajax
* wp.com calypso https://github.com/Automattic/wp-calypso

## Basic Auth
* Not good for browser
* Best for Server -> server OVER HTTPS (think service level account)
* Doesn’t ship with WP by default: requires plugin like github.com/wp-api/basic-auth
* node example: https://gomix.com/#!/project/ablaze-nut or https://runkit.com/scharvey/58c01e49b80e040014fcd316

## OAuth: https://oauth1.wp-api.org/
* OAuth 1 doesn’t ship with WP by default: requires plugin like https://github.com/WP-API/OAuth1
* OAuth 1: 100% wordpress coverage
* OAuth 2: ~20% wordpress coverage 
* Issues in single page app style implementation because of the browser redirection parts of OAuth auth request/response (however handling in a popup is a crutch)
* OAuth 1
    * Get request token
    * ask user for auth
    * exchange request token for permanent access token
* http://oauth-debugger.aweekofrest.hm/
* USE A CLIENT: wordpress-rest-api-oauth-1 (npm install wordpress-rest-api-oauth-1)
* OAuth 1 Example: https://runkit.com/scharvey/58c0385e35174e00143c7bf9

## Broker Auth:
* apps.wp-api.org
* Helps bootstrap the registration of an OAuth 1 app
* Requires https://wordpress.org/plugins/rest-api-broker/ plugin

add_action(‘wp_head’, function(){
    wp_enqueue(‘wp-api’);
});

## Relevant Links:
https://demo.wp-api.org/ (demo:demo)
https://github.com/wp-api/basic-auth (enables Basic Auth)
https://httpie.org/#installation  API debugger
https://stedolan.github.io/jq/ JSON Response prettifier
https://runkit.com online live node server (like Codepen)
https://gomix.com another live node option
http://oauth-debugger.aweekofrest.hm/  <— handy OAuth 1 Debugger ( https://github.com/WP-API/Oauth-debugger )
http://v2.wp-api.org/extending/javascript-client/
https://github.com/joehoyle/vienna  <— interesting project by the presenter
