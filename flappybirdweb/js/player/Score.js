import {DataStore} from "../base/DataStore.js";

export class Score {
    constructor(){
        this.scoreNumber=0;
        //用这个变量控制能否加分
        this.isScore=true;
    }
    draw(){
        let ctx=DataStore.getInstance().ctx;
        ctx.font='25px Arial';
        ctx.fillStyle='#ffcbeb';
        ctx.fillText(
            this.scoreNumber,
            window.innerWidth/2,
            window.innerWidth/18,
            1000);
    }

}