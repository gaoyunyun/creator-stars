import { CardEventContainer } from "./Data/Bean/CardEventContainer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMain extends cc.Component {

    start () {
        // init logic
        this.init();
    }

    init(){
        // let cardEventBean=new CardEventBean();
        // let cardEventContainer=new CardEventContainer();
        // cardEventBean.getData(cardEventContainer.getBeanByID(1000));
        // //卡牌
        // //使用给定的模板在场景生成一个新的节点
        // let newStar = cc.instantiate(this.starPrefab);
        // //将新增的节点添加到 Canvas 几点下面
        // this.node.addChild(newStar);
        // //为星星设置一个随机的位置
        // newStar.setPosition(this.getNewStarPosition());
        // //将 Game 组件的实例传入星星组建
        // newStar.getComponent('Star').init(this);
        // //重置计时器
        // this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        // this.timer = 0;
    }


}
