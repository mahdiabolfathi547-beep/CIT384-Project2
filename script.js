$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    //pet information and starting value
    var pet_info = {
      name:"Larry",
      weight: 35,
      happiness: 7
    };
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.rest-button').click(clickedRestButton);
  })
  
    // .slideToggle () smoothly opens or closes the care tips
    $(".tips-button").clicks(function () {
    $(".care-tips").slideToggle(300);
    });
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
   

    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 1;
      pet_info.weight+= 1;
      checkAndUpdatePetInfoInHtml();
      showPetMessage ("That treat was delicious!");
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 1;
     pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("I had fun playing with you!");
    }

   
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
     pet_info.happiness -= 1;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("I got some good excercise!");
    }

    //Rest is the new action. It increaes happiness without changing weight.
    function clickRestButton() {
      pet_info.happiness -=1;
      pet_info.weight -=1;
      showPetMessage("I got some good excercise");
    }

    function clickedButton() {
      pet_info.happiness +=1;
      showPetMessage("A little rest makes happy.");
    }


    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }

    function showPetMessage(Message) {
      checkPetValues();
      updatePetInfoInHtml();
    
    //Display a comment after each action button is clicked.
    $(".pet-message").text(message);

    //.fadeTo() briefly makes the pet image partly transparent,
    // then fades it back to full opacity as visual response.
    $(".pet-image").fadeTo(150,0.45).fadeTo(300,1);
  }
    function checkWeightAndHappinessBeforeUpdating() {
      /*Add conditional so if weight is lower than zero.*/
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }

      if (pet_info.happiness < 0 ) {
         pet_info.happiness =0;
      }

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info.name);
      $('.weight').text(pet_info.weight);
      $('.happiness').text(pet_info.happiness);
    }
  