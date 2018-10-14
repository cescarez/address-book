function Contact(first, last, favColor, favAnimal, address) {
  this.firstName = first;
  this.lastName = last;
  this.favColor = favColor;
  this.favAnimal = favAnimal;
  this.addresses = [];
};

function Address(street, city, state, type) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.type = type;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Address.prototype.fullAddress = function() {
  return this.type + ": " + this.street + ", " + this.city + ", " + this.state;
}

var resetFields = function() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-favorite-color").val("");
  $("input#new-favorite-animal").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}

$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                  '<div class="form-group">' +
                                    '<label for="new-street">Street</label>' +
                                    '<input type="text" class="form-control new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-city">City</label>' +
                                    '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control new-state">' +
                                  '</div>' +
                                '</div>' +
                                '<label for="address-type">Address Type</label>' +
                                '<select class="form-control" class="address-type">' +
                                  '<option value="home">Home</option>' +
                                  '<option value="yacht">Yacht</option>' +
                                  "<option value='accountant'>Accountant's</option>" +
                                  "<option value='lover'>Lover's pad</option>" +
                                '</select>')
    });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedFavColor = $("input#new-favorite-color").val();
    var inputtedFavAnimal = $("input#new-favorite-animal").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedFavColor, inputtedFavAnimal);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var inputtedType = $(this).find("#address-type").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".favorite-color").text(newContact.favColor);
      $(".favorite-animal").text(newContact.favAnimal);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

    });

    resetFields();

  });
});
