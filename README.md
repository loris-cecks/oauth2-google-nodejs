# OAuth2 Google Authentication with Node.js
This repository contains an Express.js application demonstrating Google OAuth2 authentication using the google-auth-library.
# Features
Sign in with Google.
Render user's information after successful authentication.
# Installation
## Prerequisites
Node.js
NPM or Yarn
## Steps
### Clone the repository:
git clone https://github.com/loris-cecks/oauth2-google-nodejs.git
cd oauth2-google-nodejs
### Install dependencies:
npm install
### Set up your environment variables. Copy the sample .env file and replace the placeholders with appropriate values.
cp .env.sample .env
Ensure you fill the .env file with your credentials:
CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
REDIRECT_URL=YOUR_REDIRECT_URL
Remember to replace YOUR_GOOGLE_CLIENT_ID, YOUR_GOOGLE_CLIENT_SECRET, and YOUR_REDIRECT_URL with your actual credentials.
### Run the server:
node index.js
This will start the server on port 3000.
## Usage
Visit http://localhost:3000/ on your browser.
Click on the "Login with Google" button.
You'll be redirected to Google's sign-in page. Authenticate yourself.
Upon successful authentication, you'll be redirected back to a dashboard page showing your profile picture, name, and email.
## Dependencies
express: Web server
google-auth-library: For handling Google's OAuth2 authentication
dotenv: For loading environment variables from .env file
ejs: For rendering views
