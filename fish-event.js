;(function(){
	var map = {
		fn:{},
		args:{}
	};
	var num=0;
	window.FishEvent = function(fn){
		var tag_fn = num++;
		return function(){
			var tag_args = num++;
			map.fn[tag_fn] = fn;
			map.args[tag_args] = arguments;
			return "FishEvent.event('"+tag_fn+"','"+tag_args+"')";
		}
	};
	FishEvent.event = function(tag_fn,tag_args){
		var target = event.target||event.srcElement;
		map.fn[tag_fn].apply(target,map.args[tag_args]);
	};
})();