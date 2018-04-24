function add_to(t) {
  $("#results").append("<div>"+t+"</div>")
}

function measureTime() {
  $.ajax({
    url: "http://baidu.com",
    method: 'GET',
    cache: false,
    beforeSend: function (request, settings) {
      start_time = new Date().getTime();
    },
    dataFilter: function (response) {
      let request_time = new Date().getTime() - start_time;
      console.log(request_time);
      add_to(request_time);
    },
    success: function (response) {
      let request_time = new Date().getTime() - start_time;
      console.log(request_time);
      add_to(request_time);
    },
    error: function (jqXHR) {
      let request_time = new Date().getTime() - start_time;
      console.log(request_time);
      add_to(request_time);
    }
  });
}

