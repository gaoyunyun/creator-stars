const {ccclass,property}=cc._decorator 

@ccclass
export class cardEventMain extends cc.Component{
    @property(cc.Integer)
    lable:number=0

    //点击触发 按键
    onClick(card:Card){

    }
}