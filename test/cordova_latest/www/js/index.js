function log(msg){
    $('#log').append('<p>' + msg + '</p>');
}

function submit(){
    hellokotlin.hello($('#input').val(), function(msg){
        log(msg);
    },function(err){
        log(err);
    });
}
