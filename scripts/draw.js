$(document).ready(function() {
    var form = $("form");
    form.submit(function (event) {
        var array = form.children();
        event.preventDefault();
        var data = {};
        for (var i = 0; i < array.length; ++i) {
            var input = array[i];
            if (input.name) {
                data[input.name] = input.value;
            }
        }
        // construct an HTTP request
        var xhr = new XMLHttpRequest();
        xhr.open(this.method,this.action, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // send the collected data as JSON
        xhr.send(JSON.stringify(data));

        xhr.onloadend = function () {
            $('#appender').append(xhr.responseText);
        };
    });
});