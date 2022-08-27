$('#submit').on('click', function() {
    let displayName = ($('.userInputN').val())
    let displayComm = ($('.userComment').val());
    
    $('#commentList').append(`
<div class = "commentBox">
    <img src="profile-test.png">
    <div class = "CommUser">
        <p class = "user"></p>
        <h2 class = "usComm"></p>
    </div>
    <div class = "edit-delete">
        <p><span class="userEdit">Edit</span> <span class="userDelete">Delete</span></p>
    </div>
</div>
`)  

    
        $('.user').append(`${displayName}`);
        $('.usComm').append(`${displayComm}`);
   

    //resetting user and usComm after it has been submitted
    $('.userInputN').val('');
    $('.userComment').val('')
});

//Editing Or Deleting
$('span.userEdit').on('click', function() {
    console.log("Is this working?")
});

$('span.userEdit')



