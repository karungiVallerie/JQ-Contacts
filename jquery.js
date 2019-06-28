$(document).ready(function(){

    function Contact(first_name, second_name, phone_number, email, address) {
           this.firstname = first_name;
           this.secondname = second_name;
           this.phone = phone_number;
           this.email = email;
           this.address =address
       };
   
      /* var contacts = [];
       $('#bt').click(function(){
            var firstName: $("#fistname")first_name.val(),
           lastName: $second_name.val()
           phone: $phone_number.val()
           email: $email.val()
           address: $address.val()
           var new_contact = new Contact(first_name,second_name, phone_number,email,address);
           alert(`Contact to be saved!`);
           contacts.push(new_contact);
           alert(`Contact saved!`);*/
   
   
   
   
   
           var allContacts = [];
           $("#grim").click(function(event) {
               var firstname = $("#one").val();
               var lastname = $("#two").val();
               var phone = $("#three").val();
               var email = $("#four").val();
               var country = $("#five").val();
                   var newcontact = {firstname, lastname, phone, email, country};
                   allContacts.push(newcontact);
                   //console.log("Submitted!");
                   console.log(allContacts);
   
   
   
   
       });
   
   
   
   
       
            
     }); 