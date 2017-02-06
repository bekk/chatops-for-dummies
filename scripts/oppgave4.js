// Description:
//   Script for å vise hvordan de ulike karakterne ser ut
//
// Commands:
//   hubot hvordan så egentlig <navn> ut - botten gir en link til et bilde


const SKAM_KARAKTERER = [
  {navn: "Vilde", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/Vilde_s3.jpg"},
  {navn: "William", bilde: "http://skam.p3.no/wp-content/uploads/2016/02/william.jpg"},
  {navn: "Noora", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/noora_ses3.jpg"},
  {navn: "Eva", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/eva_ses3.jpg"},
  {navn: "Chris", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/Chris_ses3.jpg"},
  {navn: "Kasper", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/kasper_s3.jpg"},
  {navn: "Eskild", bilde: "http://skam.p3.no/wp-content/uploads/2015/09/eskild.jpg"},
  {navn: "Sana", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/sana_ses3.jpg"},
  {navn: "Jonas", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/jonas_ses3.jpg"},
  {navn: "Isak", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/isak_ses3.jpg"}
];

module.exports = function (robot) {
  robot.respond(/hvordan så egentlig (\w+) ut/, function (res) {

    const navn = res.match[1];

    const match = SKAM_KARAKTERER.find(function (skamPerson) {
      return skamPerson.navn.toLowerCase() == navn.toLowerCase();
    });

    if (match != undefined){
      res.reply(match.bilde)
    }
    else {
      res.reply(`Fant ikke ${navn}`)
    }

  });
};
