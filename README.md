# pimberly-node-test

just code for node test by Emmanuel Mbole

\*\*\*\*First run npm i (to install all dependencies)

1.) To run the script that extracts data from file and sends result to json object:
node appscript.js

\*\*\* for below make sure server is running on port 5000 i.e: npm start

2.To run the api that filters by colour:
run a 'Get' to url: http://localhost:5000/colour/"filter" e.g localhost/5000/colour/C1

3. To run the api that filters by size:
   run a 'Get' to url: localhost:5000/size/"filter" e.g localhost/5000/size/S9

IMPROVEMENTS:

1.) Could put more try/catch and logging to handle errors
2.) Could also implement midware authetication and authorisation
2.) A DB would have been better to use right the filter queries with much better results

PROBLEMS
1.) Had a bug in the script where a duplicate still shows up in the results
2.) Had a heap error (solved by using keyword break;)
