/*组件必须在头部(最顶端)就引入，不能在函数体内引入*/ 
import Vue from "vue";	
Vue.config.debug = true;//开启错误提示

import myHead from "../route/myHead";
import Left from "../route/left";
import Message from '../route/component/message'; 


/******   页面头部    *********/
var head = new Vue({
	el:'#head',
	components:{
		myHead,
	}
})

/***** container组件 ******/
var container = new Vue({  
    el:'#container',
    data:{
        left:'',
        message:{
            pagination:{
                pageNum:1
            }
        }     
    },
    components:{
        Left,
        Message,
    }
});