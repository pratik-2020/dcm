const nodemailer = require('nodemailer');

const sendMail = (req, res) => {
    const name = req.body.name;
    let company = req.body.company;
    const sal = req.body.sal;
    const a = name.split(' ');
    let f = []
    company = company.toLowerCase();
    a.map((e,key)=> {
      f.push(e.toLowerCase())
    })
    const email = f[0]+f[1]+'@'+company+'.com'
    const mail = `
Hello ${sal},
I am Pratiksingh Rajeshsingh Thakur, a SDE intern at Sarvaha systes, currently pursuing my Bachelor's of Technology at Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded. I am interested in a SDE intern role at ${company}, so may you please refer me for the job.
I have developed a mobile application for the researchers at Dalhousie University, Halifax Canada for their research program under the Mitacs GRI program of the Canadian Government. I am also a Machine Learning intern at Dalhousie University (remote) and Software Intern at Sarvaha Systems. I am attaching link of my resume for your reference, with this email.
Thank you for your time and consideration.
Link of my resume is : https://drive.google.com/file/d/1SulPISuCW7-HfcrlmndbaO59yJcDePCd/view?usp=sharing
Yours Sincerely,
Pratiksingh Thakur
pratikthakur2019@gmail.com
+918080172016
    `
// const mail = 'abc';
    if(req.body.name !== undefined && company !== undefined){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'pratikthakur2019@gmail.com',
              pass: 'zuqqifkocfntqlll'
            }
          });
          
          var mailOptions = {
            from: 'pratikthakur2019@gmail.com',
            to: email,
            subject: 'Application regarding fullstack role',
            text: mail
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.send(error);
            } else {
              res.send('Email is send to your email id.');
            }
          });
    }
}

module.exports = sendMail;