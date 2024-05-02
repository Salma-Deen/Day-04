// Create your own resume data in JSON format
let res={
"Name":"Salma M", 
"label":"Developer",
 "Email":"sal@gmail.com",
"Phone":8760907651,
"location":{
"Address":"24,Sakthi Colony",
"postal code":641606,
"city":"Tiruppur",
'Country Code':"INDIA",
},
"profile":{
"network":"facebook",
"username":"XY",
"url":"https:/",
},
"Education" :{
"Institution":"Bharathiar University",
"College":"Maharani Arts and Science College",
"Degree":"M.Sc",
"Duration":"2012-2014",
"score":82,
},
"skills":{
"name":"Web Development",
"Level":"Beginner",
"Key Words":["HTML","VB","JS"],
},
"Languages":{
"Known Languages":["Tamil","Hindi","English"],
"Fluency":["Tamil","Hindi"],
},
"Interest":{
"Name":"Watching Movies",
"Key words":"Rom-Com Movies",
},
"Reference":{
"Name":"",
"Mobile Number":"675*******",
}
};
console.log(res)
OUTPUT:
{
  Name: 'Salma M',
  label: 'Developer',
  Email: 'sal@gmail.com',
  Phone: 8760907651,
  location: {
    Address: '24,Sakthi Colony',
    'postal code': 641606,
    city: 'Tiruppur',
    'Country Code': 'INDIA'
  },
  profile: { network: 'facebook', username: 'XY', url: 'https:/' },
  Education: {
    Institution: 'Bharathiar University',
    College: 'Maharani Arts and Science College',
    Degree: 'M.Sc',
    Duration: '2012-2014',
    score: 82
  },
  skills: {
    name: 'Web Development',
    Level: 'Beginner',
    'Key Words': [ 'HTML', 'VB', 'JS' ]
  },
  Languages: {
    'Known Languages': [ 'Tamil', 'Hindi', 'English' ],
    Fluency: [ 'Tamil', 'Hindi' ]
  },
  Interest: { Name: 'Watching Movies', 'Key words': 'Rom-Com Movies' },
  Reference: { Name: '', 'Mobile Number': '675*******' }
}

2)For the above JSON,iterate over all for loops(for,for in for of,forEach)
A)for loop:
let res={
        "Name":"Salma M", 
   "label":"Developer",
        "Email":"sal@gmail.com",
   "Phone":8760907651,
   "location":{
    "Address":"24,Sakthi Colony",
    "postal code":641606,
    "city":"Tiruppur",
    'Country Code':"INDIA",
   },
   "profile":{
    "network":"facebook",
    "username":"XY",
    "url":"https:/",
   },
  "Education" :{
"Institution":"Bharathiar University",
"College":"Maharani Arts and Science College",
"Degree":"M.Sc",
"Duration":"2012-2014",
"score":82,
  },
  "skills":{
    "name":"Web Development",
    "Level":"Beginner",
    "Key Words":["HTML","VB","JS"],
  },
  "Languages":{
    "Known Languages":["Tamil","Hindi","English"],
    "Fluency":["Tamil","Hindi"],
  },
  "Interest":{
"Name":"Watching Movies",
"Key words":"Rom-Com Movies",
  },
  "Reference":{
    "Name":"",
    "Mobile Number":"675*******",
  }
};
var resume=Object.keys(res);
for(var i=0;i<resume.length;i++)
{
  console.log(res[resume[i]])
}


b)for in loop


