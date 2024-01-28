			$(window).load(function() {
				$('#slider').nivoSlider();
				
				$("a.grouped_elements").fancybox();
				
				//$("a.grouped_elements").fancybox({
				//	'hideOnContentClick': true
				//});

				/* Apply fancybox to multiple items */
				
				//$("a.grouped_elements").fancybox({
					//'transitionIn'	:	'none',
					//'transitionOut'	:	'none',
					//'speedIn'		:	600, 
					//'speedOut'		:	200, 
					//'overlayShow'	:	false
				//});
				//$("tr:even").css("background-color", "#bbbbff");
				//$("tr:odd").addClass("td_background");
				$("#table_monday .row:even").addClass("td_background");
				$("#table_tuesday .row:even").addClass("td_background");
				$("#table_wednesday .row:even").addClass("td_background");
				$("#table_thursday .row:even").addClass("td_background");
				$("#table_friday .row:even").addClass("td_background");
				$("#table_saturday .row:even").addClass("td_background");
				$("#table_sunday .row:even").addClass("td_background");				
				
				
				$("#monday").css("height",$("#table_monday").height());
				$("#monday p").css("margin-top",$("#table_monday").height()/2 - 18);
				
				$("#tuesday").css("height",$("#table_tuesday").height());
				$("#tuesday p").css("margin-top",$("#table_tuesday").height()/2 - 18);
				
				$("#wednesday").css("height",$("#table_wednesday").height());
				$("#wednesday p").css("margin-top",$("#table_wednesday").height()/2 - 18);
				
				$("#thursday").css("height",$("#table_thursday").height());
				$("#thursday p").css("margin-top",$("#table_thursday").height()/2 - 18);

				$("#friday").css("height",$("#table_friday").height());
				$("#friday p").css("margin-top",$("#table_friday").height()/2 - 18);

				$("#saturday").css("height",$("#table_saturday").height());
				$("#saturday p").css("margin-top",$("#table_saturday").height()/2 - 18);
				
				$("#sunday").css("height",$("#table_sunday").height());
				$("#sunday p").css("margin-top",$("#table_sunday").height()/2 - 18);
				
				// Галерея
				$(".div_in_gallery").css("display","none");
				$("#link1_area").css("display","block");
				
				$(".link1").css("border","0");
				
				$("#links_container a").click(function() {
					$("#links_container a").css("border-bottom","1px dotted #ff5613");
					
					$(this).css("border","0");
					$(".div_in_gallery").css("display","none");

					$("#" + $(this).attr("class") + "_area").css("display", "block");
					
				});
				
				$(".p_instructors").css("min-height", $(".instructors_image").height());
				
				
				console.log($("#table_right").css("height"));


				
				ymaps.ready(init);
				var myMap, 
					myPlacemark;

				function init(){ 
					myMap = new ymaps.Map ("yandex_map", {
						center: [54.616393,39.723735],
						zoom: 17
					}); 
					
					myMap.controls.add('zoomControl');
					
					myPlacemark = new ymaps.Placemark([54.616393,39.723735], {
						content: 'Москва!',
						balloonContent: 'Стоматология "Премиум"'
					});
					
					myMap.geoObjects.add(myPlacemark);
					
					var smallZoomControl = new YMaps.SmallZoom();
				}
			});