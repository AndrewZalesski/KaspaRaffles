
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Root route to handle '/' requests
app.get('/', (req, res) => {
  res.send('Welcome to Kaspa Raffles!');
});

// Catch-all route to serve React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`
   _  __           _                 _  __        __ _     
  | |/ /          | |               | |/ /       / _| |    
  | ' / __ _ _ __ | |__   __ _ ___  | ' /  __ _ | |_| |__  
  |  < / _\` | '_ \| '_ \ / _\` / __| |  <  / _\` ||  _| '_ \ 
  | . \ (_| | |_) | | | | (_| \__ \ | . \| (_| || | | |_) |
  |_|\_\__,_| .__/|_| |_|\__,_|___/ |_|\_\__,_||_| |_.__/ 
           | |                                           
           |_|                                           
  Server is running on http://localhost:${port}
  `);
});
