<template>
    <div class="page">

		<myheader :title="title" back="true"></myheader>
		<div id="dcontent" class="dcontent">
			<!--<div class="button" ontap="changeIndex();">
				选择：<span id="display" style="color:#FF0000">主摄像头</span>
				<div style="width:0px;height:0px;overflow:hidden;"><select id="index">
					<option value='1' selected="true">主摄像头</option>
					<option value='2' >辅摄像头</option>
				</select></div>
			</div>-->
			<div class="button" @tap="getImage()">拍照</div>
			<div class="button" @tap="getVideo()">录像</div>
			<br/>
			<!-- History list -->
			<ul id="history" class="dlist" style="text-align:left;">
				<li id="empty" class="ditem-empty">无历史记录</li>
			</ul>
			<br/>
			<div class="button button-waring" @tap="cleanHistory()">清空历史记录</div>
			<br/>
		</div>	

		
    </div>
</template>
<script>
import myheader from './module/myheader'
export default{
    name: 'myMuiCamera',
    data(){
        return{
            title:"摄像头",
            url:'http://m.weibo.cn/u/3196963860',
        }
    },
    methods:{
		// 拍照
		getImage:function(){
			var that = this
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(p){
				
				plus.io.resolveLocalFileSystemURL(p, function(entry){
					that.createItem(entry);
				}, function(e){
					
				});
			}, function(e){
				
			}, {filename:'_doc/camera/',index:1});
		},
		// 录像
		getVideo:function(){
			var that = this
			var i = 1
			var cmr = plus.camera.getCamera();
			cmr.startVideoCapture(function(p){
				plus.io.resolveLocalFileSystemURL(p, function(entry){
					that.createItem(entry);
				}, function(e){
					
				} );
			}, function(e){

			}, {filename:'_doc/camera/',index:i});
		},
		// 添加播放项
		createItem:function(entry){
			var li = document.createElement('li');
			var hl=document.getElementById('history');
			var le=document.getElementById('empty');
			li.className = 'ditem';
			li.innerHTML = '<span class="iplay"><font class="aname"></font><br/><font class="ainf"></font></span>';
			li.setAttribute('@tap', '$router.goTo()' );
			hl.insertBefore( li, le.nextSibling );
			li.querySelector('.aname').innerText = entry.name;
			li.querySelector('.ainf').innerText = '...';
			li.entry = entry;
			this.updateInformation(li);
			// 设置空项不可见
			le.style.display = 'none';
		},
		// 获取录音文件信息
		updateInformation:function(li){
			if(!li || !li.entry){
				return;
			}
			var entry = li.entry;
			entry.getMetadata(function(metadata){
				li.querySelector('.ainf').innerText = dateToStr(metadata.modificationTime);
			}, function(e){
				
			} );
		},
		// 清除历史记录
		cleanHistory:function(){
			var hl=document.getElementById('history');
			hl.innerHTML = '<li id="empty" class="ditem-empty">无历史记录</li>';
			var le = document.getElementById('empty');
			// 删除音频文件
			gentry.removeRecursively(function(){
				// Success
//				outLine('成功！');
			}, function(e){
//				outLine('失败：'+e.message);
			});
		}
    },
	components: {
		myheader
	},
	created:function () {

var i=1,gentry=null,w=null;
var hl=null,le=null,de=null,ie=null;
var unv=true;
var bUpdated=false; //用于兼容可能提前注入导致DOM未解析完更新的问题
// H5 plus事件处理
		function plusReady(){
			// 获取摄像头目录对象
			plus.io.resolveLocalFileSystemURL('_doc/', function(entry){
				entry.getDirectory('camera', {create:true}, function(dir){
					gentry = dir;
					updateHistory();
				}, function(e){
					outSet('Get directory "camera" failed: '+e.message);
				} );
			}, function(e){
				outSet('Resolve "_doc/" failed: '+e.message);
			});
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener('plusready', plusReady, false);
		}
// 监听DOMContentLoaded事件
document.addEventListener('DOMContentLoaded', function(){
	// 获取DOM元素对象
	hl=document.getElementById('history');
	le=document.getElementById('empty');
	de=document.getElementById('display');
	if(ie=document.getElementById('index')){
		ie.onchange=indexChanged;
	}
	// 判断是否支持video标签
	unv=!document.createElement('video').canPlayType;
	updateHistory();
},false );
function changeIndex(){
	outSet('选择摄像头：');
	ie.focus();
}
function indexChanged(){
	de.innerText = ie.options[ie.selectedIndex].innerText;
	i = parseInt(ie.value);
	outLine(de.innerText);
}

// 显示文件
function displayFile(li){
	if(w){
		outLine('重复点击！');
		return;
	}
	if(!li || !li.entry){
		ouSet('无效的媒体文件');
		return;
	}
	var name = li.entry.name;
	var suffix = name.substr(name.lastIndexOf('.'));
	var url = '';
	if(suffix=='.mov' || suffix=='.3gp' || suffix=='.mp4' || suffix=='.avi'){
		//if(unv){plus.runtime.openFile('_doc/camera/'+name);return;}
		url = '/plus/camera_video.html';
	} else {
		url = '/plus/camera_image.html';
	}
	w=plus.webview.create(url,url,{hardwareAccelerated:true,scrollIndicator:'none',scalable:true,bounce:'all'});
	w.addEventListener('loaded', function(){
		w.evalJS('loadMedia("'+li.entry.toLocalURL()+'")');
		//w.evalJS('loadMedia("'+'http://localhost:13131/_doc/camera/'+name+'")');
	}, false );
	w.addEventListener('close', function(){
		w = null;
	}, false);
	w.show('pop-in');
}

// 添加播放项
function createItem(entry){
	var li = document.createElement('li');
	li.className = 'ditem';
	li.innerHTML = '<span class="iplay"><font class="aname"></font><br/><font class="ainf"></font></span>';
	li.setAttribute('@tap', '$router.goTo()' );
	hl.insertBefore( li, le.nextSibling );
	li.querySelector('.aname').innerText = entry.name;
	li.querySelector('.ainf').innerText = '...';
	li.entry = entry;
	updateInformation(li);
	// 设置空项不可见
	le.style.display = 'none';
}
// 获取录音文件信息
function updateInformation(li){
	if(!li || !li.entry){
		return;
	}
	var entry = li.entry;
	entry.getMetadata(function(metadata){
		li.querySelector('.ainf').innerText = dateToStr(metadata.modificationTime);
	}, function(e){
		outLine('获取文件"'+entry.name+'"信息失败：'+e.message);
	} );
}
// 获取录音历史列表
function updateHistory(){
	if(bUpdated||!gentry||!document.body){//兼容可能提前注入导致DOM未解析完更新的问题
		return;
	}
  	var reader = gentry.createReader();
  	reader.readEntries(function(entries){
  		for(var i in entries){
  			if(entries[i].isFile){
  				createItem(entries[i]);
  			}
  		}
  	}, function(e){
  		outLine('读取录音列表失败：'+e.message);
  	});
  	bUpdated = true;
}

	},

}
</script>

<style scoped>
	
.button {
    font-size: 18px;
    font-weight: normal;
    text-decoration: none;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #FFF;
    background-color: #FFCC33;
    border: 1px solid #ECB100;
    padding: .5em 0em;
    margin: .5em .7em;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.dlist {
    padding: 0px;
    margin: 1em;
    background: #fff;
    border: 1px solid #ddd;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
.ditem-empty {
    overflow: hidden;
    list-style-type: none;
    font-size: 1em;
    padding: 1em;
    vertical-align: middle;
}
.button-waring {
    color: #666;
    background-color: #ebebeb;
    border-color: #e0e0e0;
}
	
	
	
.page{
	background-color: #f2f2f2;
}
.myHeader{
  font-size: 18px;
  height: 50px;
  position: relative;
}
.myHeader > a{
  padding: 0 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}
.aname {
	font-size: 16px;
}
.ainf {
	font-size: 12px;
}
.iplay {
	display: block;
	background: no-repeat right center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABYCAYAAAADWlKCAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAKwwAACsMBNCkkqwAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOS8xMi8xM5w+I3MAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAD9UlEQVR4nO2b3XETMRRGDwzvoYOkg5hRAVkqiKmAdIA7wHSQVECoALsC1gXciV0BTge4gvCwgnHk9d/+WF8m97ztxrlXs8fS1Urym6enJxwd3uZugPMcFyKGCxHDhYjhQsRwIWK4EDFciBguRAwXIoYLEcOFiOFCxHAhYrgQMVyIGC5EDBcihgsRw4WI4ULEcCFiuBAx3uVuwDGY2XtgCBTAALjc8tEFMAdKYBJC+HOK9nXBm5dwUM7MCmAEXDcMMQVuQwhlV23qC2khZjYAboGrjkLOgFEIYd5RvM6RrSFmdgs80J0MYqyHGFsSuR4S60TJ9vrwCEziZ+YhhGXy/xdU9aWgqjfnW+IsgEKtvkgJiUPUPfUyZsD42DoQ68+Y+p62AG6UhjAZITt6xopq3L9vGf+Gqh6dJX+S6ilKNaRkU8YCGLSVARBjDGLMdS5jbgkkhMQiWyejSGtEG2KsghopKoU++5AV68ZDcrvXYWTH8Pghdz1R6CHpN3MFDPsc02PsYcy1qy0nJ6uQOANKZz+jfcOUmd3H6W1jYo5RcvsqtikbuXtI+kBmBxbwz8DczMZtksdcsz1tOinZhMRxPF2bGh8R4gz4amZLMxu2aEqa8zq2LQs5e0j6EB8bLv6dAz/NrGwyjMWcj3vadjJyCimS60nLeFfAbzO7bfANT3MXLdvSmJxCBsl12VHcL8AyvpkfSpo7bdvJyCkkfQfocv5/Bnw3s/mBs6Y097aFzd7JPcv6T5dv5GtcAr/2TZN7yt0IGSE908k0+RS8FiEvhhd1yKEFUw5YAVBApoe0XQrZwgL4GEIY7pLRU+5G5OwhC57PZgbAsqPYK6rdxUMXC9Npbro8fzJy9pB0qll0FPcOuDhCRl3ubEvwOYWUyXXb5YoZ1X7GqMHSfZq7bNmWxuQUki5XnDdc+n4EPoUQiiabSzFnejKl7TJOY7IJid/iaXJ7fESIFfCNas+9zQNMc05zHnjIPctKx/mrA9egflCJGLd5eDFXukGWdddQYU+95PlDWVE97GXPeS+oivf6saBZCKHoM+8+cvcQ2NyhOwMmfW4SxdgTNs9oZd0tBAEhsRDfJbcvgbIPKTtOnNzlPnECAkPWP8xsTv3ZrJ1v2UfmuKDqGRt5QgjZ9kDWyd5D1iioP1U4P3KzqZYYY5v0om38rpDpIeCHrUFMCPjPEeSE/COetf3SU/i7EEL2GVUdSjXkGfGBfWDzIFsb/q93dRizU2R7yDr+o09R/GfRzsmRrSGvFRcihgsRw4WI4ULEcCFiuBAxXIgYLkQMFyKGCxHDhYjhQsRwIWK4EDFciBguRAwXIoYLEcOFiOFCxHAhYrgQMf4CVuqCm+17t3sAAAAASUVORK5CYII=);
	background-size: 50px 44px;
	-ms-touch-action: auto;
}
</style>

