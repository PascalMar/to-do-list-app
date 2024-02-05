function newItem() {
    // Adding a new item to the list of items:
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = $('<li>').text(inputValue);

        // Crossing out an item from the list of items:
        li.on("dblclick", crossOut);

        // Adding the delete button "X":
        let crossOutButton = $('<button>').text("X").click(deleteListItem);
        li.append(crossOutButton);

        //( Adding CLASS DELETE (DISPLAY: NONE) from the css:
        function deleteListItem() {
            li.addClass("delete");
        }

        $('#list').append(li);
    }


    $('#input').val('');

    // Reordering the items:
    $('#list').sortable();
}

// Crossing out an item from the list of items:
function crossOut() {
    $(this).toggleClass("strike");
}
