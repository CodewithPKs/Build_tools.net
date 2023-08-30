//form repeater

$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})



function toggleOptions() {
var barsContainer = document.getElementById("scrollable-bars");
var overlay = document.getElementById("overlay");

barsContainer.classList.toggle("active");
overlay.classList.toggle("active", show);
}

