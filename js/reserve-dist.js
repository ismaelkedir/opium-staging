$(document).ready(function(){$("#reserve-form").submit(function(e){var r=$("#name"),a=$("#phone"),t=$("#email"),i=$("#people"),o=$("#date"),m=$("#time");r.val&&a.val&&t.val&&i.val&&o.val&&m.val?(e.preventDefault(),$.ajax({url:"https://formspree.io/kismaelkemal@gmail.com",method:"POST",data:$(this).serialize(),dataType:"json"}).then(function(){toastr.success("Thank you for reserving a table at Opium Restaurant","Reservation made Successfully!"),$("#reserve-form").get(0).reset()},function(){toastr.error("Could not make reservation. Please try again.","Error. Try Again!")})):toastr.error("Please fill-in the form properly.","Error")}),$(".timepicker").timepicker({timeFormat:"h:mm p",interval:60,minTime:"12:00pm",maxTime:"9:00pm",defaultTime:"12",startTime:"10:00",dynamic:!1,dropdown:!0,scrollbar:!0})});