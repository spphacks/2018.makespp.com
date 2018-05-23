function htmlSuccess(data){
  var stringData = String(data);
  if(!(stringData.includes("INVALID"))){
    document.write(stringData);}
  else{
    var wrong = document.createElement("LABEL");
    var tt = document.createTextNode("The email address you entered isnt registered with MakeSPP");
    wrong.appendChild(tt);                                
    document.body.appendChild(wrong);}}
function tokenSucess(data){
  var stringData = String(data);
  if(!(stringData.includes("INVALID"))){
    var token = stringData;
    $.ajax({
    type: "POST",
    url: "http://shop.grandstreet.io/makespp",
    data: {"token":token},
    success: htmlSuccess,
    dataType: "text"
    })}
  else{
    var wrong = document.createElement("LABEL");
    var tt = document.createTextNode("The email address you entered isnt registered with MakeSPP");
    wrong.appendChild(tt);                                
    document.body.appendChild(wrong);}}
    
function submitAuthForm(){
  var email = document.getElementByID("email_input").value;
  $.ajax({
  type: "POST",
  url: "http://shop.grandstreet.io/makespp_authentication",
  data: {"email":email},
  success: tokenSuccess,
  dataType: "text"
})};
