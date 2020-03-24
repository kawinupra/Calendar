
$(function() {
	var calendarEl = $("#calendar")[0];
 
		var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: ["interaction", "dayGrid", "timeGrid", "list"],
		defaultView: "dayGridMonth",
	  selectable: true,
	  defaultDate: '2020-03-12',	 
	  header: {
		left: "prev,next today",
		center: "title",
		center: "addEventButton",
		right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
	  },
		customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: prompt('Enter a name'),
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    },
	  dateClick: function(info){
		  alert('clicked' + info.dateStr);
	  },
	  select:function(info){
		  alert('selected' + info.startStr + 'to' + info.endStr);
	  },
	  navLinks: true,
	  editable: true,
	  eventLimit: true, // allow "more" link when too many events
	  locale: "th",
	  firstDay: 0, // กำหนดวันแรกในปฏิทินเป็นวันอาทิตย์
	  showNonCurrentDates: true,
	  
  
	  eventTimeFormat: {
		// like '14:30'
		hour: "2-digit",
		minute: "2-digit",
		meridiem: true
	  },
	  eventLimit: 3, // จำนวนแถวรายการที่แสดง ในหน้าเดือน
	  eventRender: function(info) {
		//		console.log(info.view.type);
		var startDate = new Date(info.event.start);
		var _H_start =
		  startDate.getHours() >= 10
			? startDate.getHours()
			: "0" + startDate.getHours();
		var _i_start =
		  startDate.getMinutes() >= 10
			? startDate.getMinutes()
			: "0" + startDate.getMinutes();
		var dataDateString = "";
		if ($(info.el).find(".fc-time").length > 0) {
		  // ถ้ามีการแสดงเวลา
		  if (info.event.end !== null) {
			// มีเวลาสิ้นสุด
			var endDate = new Date(info.event.end);
			var _H_end =
			  endDate.getHours() >= 10
				? endDate.getHours()
				: "0" + endDate.getHours();
			var _i_end =
			  endDate.getMinutes() >= 10
				? endDate.getMinutes()
				: "0" + endDate.getMinutes();
			dataDateString =
			  _H_start + ":" + _i_start + "-" + _H_end + ":" + _i_end + " น"; // จัดรูปแบบเวลาที่จะแสดง
			$(info.el)
			  .find(".fc-time")
			  .text(dataDateString);
		  } else {
			dataDateString = _H_start + ":" + _i_start + " น"; // จัดรูปแบบเวลาที่จะแสดง
			$(info.el)
			  .find(".fc-time")
			  .text(dataDateString);
		  }
		}
	  },
	  viewSkeletonRender: function(info) {
		if (info.view.type.match(/time/)) {
		  $("div.fc-slats")
			.find("tr")
			.each(function(i, el) {
			  var dataTime = $(el).data("time");
			  $(el)
				.find("span")
				.text(dataTime.substring(0, 5));
			});
		}
	  },
	  datesRender: function(info) {
		if (info.view.type.match(/time/)) {
		  $("div.fc-slats")
			.find("tr")
			.each(function(i, el) {
			  var dataTime = $(el).data("time");
			  $(el)
				.find("span")
				.text(dataTime.substring(0, 5));
			});
		}
	  },
	  
	  events: [
		{
		  title: "Simple sdfstatic event",
		  start: "2020-03-25",
		  description: "Super cool event"
		},
  
		{
		  title: "Simple some event",
		  start: "2020-03-25",
		  description: "Super cool event"
		}
	  ],
	});
  
	calendar.render();
  });
  