# pimberly-node-test

just code for node test by Emmanuel Mbole

\*\*\*\*First run npm i (to install all dependencies)

1.) To run the script that extracts data from file and sends result to json object:
node appscript.js

\*\*\* for below make sure server is running on port 5000 i.e: npm start

2.To run the api that filters by colour:
run a 'Get' to url: localhost:5000/colorvalue e.g localhost/5000/C4

3. To run the api that filters by size:
   run a 'Get' to url: localhost:5000/sizevalue e.g localhost/5000/S9

IMPROVEMENTS:

1.) Could put more try/catch and logging to handle errors
2.) Could also implement midware authetication and authorisation

PROBLEMS:
Initial router i created errors with a bug saying: router expects a function but instead object is parsed
