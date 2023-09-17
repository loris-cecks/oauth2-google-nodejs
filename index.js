require('dotenv').config(); // Load environment variables from .env

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;

const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email']
  });
  res.redirect(url);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: CLIENT_ID
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  const name = payload['name'];
  const email = payload['email'];
  const picture = payload['picture'];
  res.render('dashboard', { userid: userid, name: name, email: email, picture: picture });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
