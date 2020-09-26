//function to clean urls, domain names, and swear words from a string
const filterUsername = function(string){
  //remove weird characters from string
  string = string.replace(/[^\x20-\x7E]/g, '');
  string = string.split(' ');
  for(let i=0;i<string.length;i++){
    //check if string contains domain/url and replace with nothing
    string[i] = string[i].replace(/((http|ftp|https):\/\/)?([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/g, '');
  }
  string = string.join(' ')
  string = string.trim();
  if(!string || string.length < 1) string = '----';
  return string;
}

let username = "test ok.com test https://csgoempire.com";

console.log(filterUsername(username))