import {CardEventContainer} from "./CardEventContainer";

const {ccclass, property} = cc._decorator;
import {Card} from "./Card";

@ccclass
export class CardEventBean extends cc.Component {

    @property(cc.Label)
    cardName: cc.Label = null;

    @property(cc.Label)
    cardExplain: cc.Label = null;

    @property(cc.ScrollView)
    selectEvent: cc.ScrollView = null;

    @property(cc.Prefab)
    buttonCard: cc.Prefab = null;

    cardEventContainer = new CardEventContainer();

    card = new Card();

    getData(card: Card) {
        this.card=card;
        this.cardName.string = card.name;
        this.cardExplain.string = card.explain;

        //选项
        //TODO 不同类型的事件不同选择框
        if (card.selectEvent.length != 0 ) {
            card.selectEvent.forEach(element => {
                let cardButtonNode = cc.instantiate(this.buttonCard);
                cardButtonNode.getComponentInChildren(cc.Label).string = element;
                this.selectEvent.content.addChild(cardButtonNode);
            });
            this.selectEvent.node.active = true;
        } else {
            this.selectEvent.node.active = false;
        }

    }

    //点击 card 对象
    onClick(event){
        //TODO 搜索时间动画
        if(this.card.type==0){
            if(this.card.nextCard!=0){
                let card = this.cardEventContainer.getBeanByID(this.card.nextCard);
                this.getData(card);
            }
        }
    }

    //点击卡牌选项
    onClickCardEvent(event){

    }

}