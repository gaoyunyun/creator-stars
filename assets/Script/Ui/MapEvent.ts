import { CardEventContainer } from "../Data/Bean/CardEventContainer";
import { Card } from "../Data/Bean/Card";

const {ccclass,property}=cc._decorator 

@ccclass
export class MapEvent extends cc.Component{

    @property
    index:number=1000

    @property(cc.Node)
    cardEventBean:cc.Node=null;

       //TODO 进入后，默认展示地图说明，每次点击屏幕后，探索一次。
    initCard(){
        this.cardEventBean.position=cc.v2(0,45);
       let cardEventContainer = new CardEventContainer();
       this.cardEventBean.getComponent("CardEventBean").getData(
        cardEventContainer.getBeanByID(this.index)
       );
    }

    
}