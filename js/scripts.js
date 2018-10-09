function Contact(first, last, favColor, favAnimal, address) {
  this.firstName = first;
  this.lastName = last;
  this.favColor = favColor;
  this.favAnimal = favAnimal;
  this.address = []
};
function Address(street, city, state){
  this.street = street;
  this.city = city;
  this.state = state;
};
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedFavColor = $("input#new-favorite-color").val();
    var inputtedFavAnimal = $("input#new-favorite-animal").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedFavColor, inputtedFavAnimal);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".favorite-color").text(newContact.favColor);
    $(".favorite-animal").text(newContact.favAnimal);
  });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-favorite-color").val("");
    $("input#new-favorite-animal").val("");
  });
});
