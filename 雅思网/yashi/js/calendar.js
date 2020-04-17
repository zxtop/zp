$(function(){
    var initialLocaleCode = 'zh-cn';
    
	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev, prevYear', 　　　　　　　　　//左边是 前一月/周/日，后一月/周/日  以及  回到今天按钮
				center: 'title', 　　　//中间是  去年的本月/周/日  当前试图的时间   明年的本月/周/日
				right: 'nextYear,next' 
					},
				monthNames: ["1月", "2月", "3月", "4月", 　//设置月份名称，中英文均可
					"5月", "6月", "7月", "8月", "9月",
					"10月", "11月", "12月"
				],
				monthNamesShort: ["1月", "2月", "3月", 　　//设置月份的简称
					"4月", "5月", "6月", "7月", "8月",
					"9月", "10月", "11月", "12月"
				],
				dayNames: ["日", "一", "二", "三", 　　//设置星期名称
				"四", "五", "六"
				],
				dayNamesShort: ["日", "一", "二", 　　　　//设置星期简称
					"三", "四", "五", "六"
				],			
				// height:220,
				// contentHeight:200,	
				aspectRatio: 2.294,
				
			defaultDate: '2017-11-12',
			navLinks: false, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				// {
				// 	title: 'All Day Event',
				// 	start: '2017-11-01',
				// },
			
				// {
				// 	id: 999,
				// 	title: 'Repeating Event',
				// 	start: '2017-11-09T16:00:00'
				// },
				// {
				// 	id: 999,
				// 	title: 'Repeating Event',
				// 	start: '2017-11-16T16:00:00'
				// },
				// {
				// 	title: 'Conference',
				// 	start: '2017-11-11',
				// 	end: '2017-11-13'
				// },
				// {
				// 	title: 'Meeting',
				// 	start: '2017-11-12T10:30:00',
				// 	end: '2017-11-12T12:30:00'
				// },
				// {
				// 	title: 'Lunch',
				// 	start: '2017-11-12T12:00:00'
				// },
				// {
				// 	title: 'Meeting',
				// 	start: '2017-11-12T14:30:00'
				// },
		
			
				{
					title: 'A/G类',
					// url: 'http://google.com/',
					start: '2017-11-28'
				}
			]
		});
		
	});
})