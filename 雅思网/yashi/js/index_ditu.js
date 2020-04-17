// JavaScript Document
GetMapContent = function (name, address, telephone, workTime, code, cid, schoolId,tiaozhuan) {
    return '<div class="school-title"  id="2">' +
        '<h3>' + name + '</h3>' +
        '<p class="p1">' + address + '</p>' +
        '<p class="p2"><strong>工作时间:</strong>' + workTime + '</p>' +
        '<p class="p2"><strong>咨询电话:</strong>' + telephone + '</p>' +
        '<p class="p3">' +
//        '<a href="schoolDetail_' + schoolId + '" target="_blank" title="查看校区详情">查看校区详情</a>' +
        '<a href="http://souke.xdf.cn/Search?cid=' + cid + '&acode=' + encodeURIComponent(code) + '&areaname=' + encodeURIComponent(name) + '&ccc=414" target="_blank" title="了解课程详情">了解课程详情</a>' +
        '</p>' +
        '</div>';
};

$(function () {
  window.markers = [];
    var oadr = document.getElementById('arealist');
    //var ad = oadr.getElementsByTagName('dt');

    var o_child = document.getElementById('schoollist');
    //var ad_child = o_child.getElementsByTagName('li');

    var o_list = $('#choicea');
    var a_list = o_list.find('li');


    var x = 116.417856;
    var y = 39.981264;

    var ggPoint = new BMap.Point(x, y);
    var opts = {
        offset: new BMap.Size(0, -10)
    };
    var map = null;
    var icon = new BMap.Icon("images/map_icon.png",
        new BMap.Size(58, 68), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            offset: new BMap.Size(0, 0),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            imageOffset: new BMap.Size(0, 0) // 设置图片偏移    
        }
    );
        window.icon = icon;
    
   window.opts = opts;

    function initialize2(point) {
        //alert(point.lng + "," + point.lat);
        map = new BMap.Map("map"); // 创建Map实例
      window.map = map;
        // // 初始化地图,设置中心点坐标和地图级别。
    
        if (a_list.length > 0) {
            map.centerAndZoom(new BMap.Point(a_list.eq(0).attr("x"), a_list.eq(0).attr("y")), 12);
        } else {
            map.centerAndZoom(point, 14);
        }
  
        map.enableScrollWheelZoom(); //启用滚轮放大缩小

        map.addControl(new BMap.NavigationControl()); // 添加平移缩放控件

        map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
        map.setCurrentCity("北京");



        for (var i = 0; i < a_list.length; i++) {
            var p = new BMap.Point(a_list.eq(i).attr("x"), a_list.eq(i).attr("y"));

            addMarker(p, i, icon);
        }

    }

    //坐标转换完之后的回调函数
    translateCallback = function (point) {

        initialize2(point);
    };
    BMap.Convertor.translate(ggPoint, 2, translateCallback);

    function addMarker(p, i, icon) {
        marker = new BMap.Marker(p, {
            icon: icon
        });
          window.markers.push(marker);
        map.addOverlay(marker);

        marker.addEventListener("click", function () {
            a_list.eq(i).click();
        });
    }
    for (var i = 0; i < a_list.length; i++) {

        a_list[i].onmouseover = function () {
            //odta.style.display = 'block';

        };
        a_list[i].onclick = function () {
            for (var i = 0; i < a_list.length; i++) {
                a_list[i].className = '';
            }
            this.className = 'active';
            if ($(this).attr("x") != "" && $(this).attr("y") != "") {
                content = GetMapContent($(this).attr("title"), $(this).attr("address"), $(this).attr("telephone"), $(this).attr("worktime"), $(this).attr("code"), $(this).attr("cid"), $(this).attr("schoolId"));
                var clickpoint = new BMap.Point($(this).attr("x"), $(this).attr("y"),15);

                 addMarker(clickpoint, i, icon);
                map.openInfoWindow(new BMap.InfoWindow(content, opts), clickpoint);
                map.panTo(clickpoint);
                  window.map.centerAndZoom(new BMap.Point($(this).attr("x"), $(this).attr("y")),19);
            
                //map.setCenter(clickpoint);
                // map.centerAndZoom(clickpoint,12);
            }
        };
    }



})
window.rePaintMarkers = function (xiaoqutype, liuxue, areaid,dangqiandom,xx,yy) {

     
    var showschool =  $("#"+dangqiandom).find("li");
    if (window.map && window.map !== undefined && window.map.closeInfoWindow) {
        window.map.closeInfoWindow();
    }

    //去除标志物

    if (window.markers !== undefined) {
        for(var i = 0; i < window.markers.length; i++) {
            var marker = window.markers[i];
            marker.remove();
        }
    }
     window.markers = [];
    //循环加上目前点击区域的marker
    
   
//定位到当前区域
console.log(dangqiandom);
    if (showschool.length > 0 && window.map.centerAndZoom) {
      if(dangqiandom=='caoyang'){
           window.map.centerAndZoom(new BMap.Point(showschool.eq(0).attr("x"),showschool.eq(0).attr("y")),12);
      }else if(dangqiandom=='haidian'){
           window.map.centerAndZoom(new BMap.Point(showschool.eq(5).attr("x"),showschool.eq(5).attr("y")),13);
      }else if(dangqiandom=='changping'){
           window.map.centerAndZoom(new BMap.Point(showschool.eq(0).attr("x"),showschool.eq(0).attr("y")),11);
      }else{
           window.map.centerAndZoom(new BMap.Point(showschool.eq(0).attr("x"),showschool.eq(0).attr("y")),13);
      }
       
    }
//给当前点击的对象添加marker
 if (window.map.centerAndZoom) {

        //循环加上dian
        for (var i = 0; i < showschool.length; i++) {

            // 给marker加点击事件监听
          var point = new BMap.Point(showschool.eq(i).attr("x"), showschool.eq(i).attr("y"));
           var marker = new BMap.Marker(point, {icon: window.icon});
          window.markers.push(marker);
          window.map.addOverlay(marker);


  
           var content = GetMapContent($(showschool[i]).attr("title"), $(showschool[i]).attr("address"), $(showschool[i]).attr("telephone"), $(showschool[i]).attr("worktime"), $(showschool[i]).attr("code"), $(showschool[i]).attr("cid"),$(showschool[i]).attr("schoolId"));
          var i = i;
          (function(point, content,i) {

                marker.addEventListener("click", function (e) {
               
                    showschool.eq(i).click();

                });
         
        })(point, content,i);
        }

       
        
    }


}

