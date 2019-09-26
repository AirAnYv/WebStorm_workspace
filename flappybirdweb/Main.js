import {DataStore} from "./js/base/DataStore.js";
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {Background} from "./js/runtime/Background.js";
import {Land} from "./js/runtime/Land.js";
import {Bird} from "./js/player/Bird.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";
//程序的主类
//为游戏的运行而初始化一些东西
export class Main {
    constructor(){
        this.canvas=document.getElementById('bird');
        //获取canvas的画笔
        this.ctx=this.canvas.getContext('2d');
        this.dataStore=DataStore.getInstance();
        this.director=Director.getInstance();
        //获取图片资源
        const loader=new ResourceLoader();
        loader.onLoaded(map => this.onFirstLoaded(map));
    }
    onFirstLoaded(map){
        this.dataStore.res=map;
        this.dataStore.ctx=this.ctx;
        this.init();
        this.registerEvent();
    }
       //初始化游戏
    init(){
        //向游戏中添加一个背景对象
        this.dataStore.put('background',new Background());
        //添加一个陆地
        this.dataStore.put('land',new Land());
        this.dataStore.put('pencils',[]);
        this.director.createPencil();
        //添加一个鸟
        this.dataStore.put('bird',new Bird());
        //添加分数对象
        this.dataStore.put('score',new Score());

        //添加开始按钮
        this.dataStore.put('start',new StartButton());
        this.director.isGameOver=false;
        this.director.run();
        // this.registerEvent();

    }

       //注册事件
        registerEvent(){
        this.canvas.addEventListener('touchstart',e=>{
            e.preventDefault();
            if(this.director.isGameOver){
                this.init();

            }else {
                this.dataStore.get('bird').birdClick();
            }

        })

        }

}