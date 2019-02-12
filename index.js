//first work on adding items 
//enter into input and it creates a new complete div with buttons 
    
$(function () {

    $("#js-shopping-list-form").submit(function(event){
    //
       //keeps it from reverting back to the previous state shortly after the function is called
        event.preventDefault();
        // creates listItem variable to store the input data
        const listItem =$('#shopping-list-entry').val();
            
        //changes input data to string
        $('#shopping-list-entry').val('');
//.append to class .shopping-list the new <li> with ${listItem}
        $('.shopping-list').append(
            //appends with this html
            ` <li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
        // a test to see listItem
        console.log(listItem);
    
    
    });







    //next interaction between the check button; 
    //the check button should cross out the item as in milk

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        //a simple test
        console.log("toggle");
        //this closest to li find .shoping-item which contains label change css to be crossed through
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');


    });
    //delete button needs to remove entire div

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        //this .closest 'li' finds entire html section around the button you click and .removes it
        $(this).closest('li').remove();
    });

   
});