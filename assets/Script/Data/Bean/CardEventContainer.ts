import { Card } from "./Card";

export class CardEventContainer {

     container=Object.create(null);

     getBeanByID(templateID: number): Card {
            return this.container[templateID];
	}

	//TODO explain-字体格式优化
    constructor(){
        var bean:Card=new Card();
        bean.id=1000;
        bean.selectEvent=[];
        bean.explain="真是不知道走了什么狗屎运气了，我居然被全世界最牛逼的公司面试上了！想想自己的海投" +
            "只收到这一封通知信，难道是某人的恶作剧？欸~这封信又是那么的真实···不管了，一个男人" +
            "怎么能婆婆妈妈的！去就去";
        bean.name="0F - 接待大厅"
        bean.type=0;
        bean.nextCard=1001;
        this.container[bean.id]=bean;

        bean =new Card();
        bean.id=1001;
        bean.selectEvent=["逃跑","拾取","观察"];
        bean.explain="这所公司的东南角有一座年久失修的教学楼，编号13号楼，" +
            "一共4层楼高，墙外爬满了长青藤。除了一些实验室偶尔开放做做试验外，基本没有人在这里上课或是自修。";
        bean.name="0F - 接待大厅"
        bean.type=0;
        bean.nextCard=0;
        this.container[bean.id]=bean;
        
    }


}