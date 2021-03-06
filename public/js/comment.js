$('#messageBtn').on('click', function () {
    $.ajax({
        type:'POST',
        url:'/api/comment/post',
        data:{
            contentid:$('#contentId').val() ,
            content:$('#messageContent').val()
        },
        success: function (responseData) {
            $('#messageContent').val();
            renderComment(responseData.data.comments.reverse())
        }
    })
})

function renderComment(comments){
    var html='';
    for(var i=0;i<comments.length;i++){
        html+='<div class="messageBox">'+
                '<p class="name clear"> <span class="fl">'+comments[i].username+'</span> <span>'+comments[i].postTime+'</span> </p><p>'+comments[i].content+'</p>'+
              '</div>'
    }
    $('.messageList').html(html);
}