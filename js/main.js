(function(){

    function simpleValidation(form) {

		form.onsubmit = function(){
			var _inputs = form.getElementsByTagName('input');
            for(var i = 0; i < _inputs.length; i++){
            	checkValidation(_inputs[i]);

            	if(!document.getElementsByClassName('error').length){
            		alert("Form has been sent successfully!");
            	}
            }
		}

    }
	
	function checkValidation(elem){
		if(elem.value === ""){
    		addClass(elem, "error");
    	}else{
    		removeClass(elem, "error");
    	}
	}

	function addClass(_elem, _class){
        var classes;

        if(_elem.classList){
            classes = _elem.classList.add(_class);
        }else{
            if(!_elem.className.length){
               classes = _elem.className = _class;
            }else{
                if(!hasClass(_elem, _class)){
                   classes = _elem.className +=  " " + _class;
                }
            }
        }

		return classes;
	}

    function hasClass(_elem, _class){
        if(_elem.className.length){
            if(_elem.className.indexOf(_class) > -1){
                return true;
            }else{
                return false;
            }
        } 
                

    }

	function removeClass(_elem, _class){
        if(_elem.classList){
            classes = _elem.classList.remove(_class);
        }else{
            if(_elem.className.length){
                classes = _elem.className = _elem.className.replace(_class, "").replace(/^\s+|\s+$/g, "");
            }
        }
		return classes;
	}

	simpleValidation(document.getElementById("form"));

})();