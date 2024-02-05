function newItem() {
    //1. Adding a new item to the list of items:
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = $('<li>').text(inputValue);

        //2. Crossing out an item from the list of items:
        li.on("dblclick", crossOut);

        //3(i). Adding the delete button "X":
        let crossOutButton = $('<button>').text("X").click(deleteListItem);
        li.append(crossOutButton);

        //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        function deleteListItem() {
            li.addClass("delete");
        }

        $('#list').append(li);
    }

    // Leere den Input nach dem Hinzufügen des Elements:
    $('#input').val('');

    // 4. Reordering the items:
    $('#list').sortable();
}

// Funktion zum Durchstreichen
function crossOut() {
    $(this).toggleClass("strike");
}
