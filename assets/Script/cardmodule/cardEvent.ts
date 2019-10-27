const {ccclass,property}=cc._decorator
import md5 from 'md5.js';

@ccclass
export class cardEventMain extends cc.Component{
    @property(cc.Integer)
    lable:number=0

    //点击触发 按键
    onClick(card:Card){

    }
}