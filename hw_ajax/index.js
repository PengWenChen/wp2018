
$('#btn_all').click((event)=>{
  event.preventDefault();
  // $.getJSON( "students.json", function( data ) {
  //   var items = [];
  //   $.each( data, function( key, val ) {
  //     items.push(  key+": "+ val + "</br>");
  //   });
  //  $("#content").html(items);
  // });
  $.get('show.php', {
  }, (data) => {
    $('#content').html(data);
  });  
});


$('#ajax-form-search button[type=submit]').click((event) => {
  event.preventDefault();
  $.get('ajax_s.php', {
    ID: $('#ajax-form-search input[name=ID]').val(),
  }, (data) => {
    $('#ajax-output-search').html(data);
  });
});

$('#ajax-form-add button[type=submit]').click((event) => {
  event.preventDefault()
  $.get('ajax_a.php', {
    ID: $('#ajax-form-add input[name=ID]').val(),
    name: $('#ajax-form-add input[name=name]').val(),
  }, (data) => {
    $('#ajax-output-add').html(data);
  })
})

$('#ajax-form-delete button[type=submit]').click((event) => {
  event.preventDefault()
  $.get('ajax_d.php', {
    ID: $('#ajax-form-delete input[name=ID]').val(),
  }, (data) => {
    $('#ajax-output-delete').html(data);
  })
})




// $(document).ready(function(){
//   $('#btn_all').click(function(event){
//       event.preventDefault();
//       var $cd=$('#content');
//       $.ajax({
//         dataType: 'json',
//         method: 'GET',
//         url: "./students.json",
//         success:function(data){
//           // alert("hi");
//           // console.log(data);
//           // $('#content').html(data);
//           $.each(data, function(id,name){
//             $cd.append(id+' : '+name+'</br>');
//           });
//         }
//       });
//   });

//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('GET','students.json');
//   ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData);
//   };

//   ourRequest.send();
// })