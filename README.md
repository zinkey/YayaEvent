yaya event


## 介绍

yaya event,简单好用的事件处理类


## 介绍

yaya template是一个轻量级无依赖非侵入的事件处理类(压缩版0.87kb;完整版1.56kb)。采用绑定document后分发事件思路，使开发变得简单。同时，不会与第三方库冲突（tanggram，jquery等）。

## 使用方法

1.bind:绑定事件。第一个参数为map对象，key/value分为为action名称以及action行为。会覆盖原有bind的事件，但不会去掉已经绑定的。（如新的map里面定义了click，那么click会以新传入的map定义为准，而原有的mouseover等，不会被删掉）。第二个参数（可选,默认为"action"），为dom节点上的“action”字符串，你可以修改为“myaction”或者其他，如修改一次，以后bind不必再修改。
	
	<div myaction="Div_A_Action">this is div a</div>
	<div myaction="Div_B_Action">this is div b</div>

	<script>
	YayaEvent.bind({
		"Div_A_Action":{
		    "click":function(e){
			    alert(e);
			},
		    "mousemove":function(e){
			    document.title = new Date*1;
		    }
		},
		"Div_B_Action":{
		    "click":function(){
			alert(this.innerHTML);
		    }
		}
	},"myaction");
	</script>


2.unbind:取消绑定事件。第一个参数为action的名称，第二个参数为事件名（若为数组，则批量取消绑定）。

	YayaEvent.unbind({
		"Div_A_Action":"click",
		"Div_B_Action":["click","mouseover"]
	});

## 说明
	
1.事件冒泡处理， 默认与普通冒泡事件不一致（这是为了达到更好的性能，并且实践发现冒泡作用的局限）。默认不冒泡。需要冒泡，则只需要在末尾返回true即可冒泡，如果有一级没有返回true，则停止在那一级。
	
	"Div_A_Action":{
	    "click":function(e){
		    alert(e);
	 
		    //默认不冒泡。如希望冒泡则返回true。
		    return true;
	    }
	}

2.建议不同的dom使用不同的action名称，如Div_A_Action,Div_B_Action。

## 更多

地址：http://uloveit.com.cn/event/

© uloveit.com.cn 
