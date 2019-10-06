
export class Card{
     //唯一标识
     id:number;
     //选项
     selectEvent:string[];
     //卡名
     name:string;
     //描述
     explain:string;
     //分类 0-初始 1-事件 2-对话
     type:number;
     //关联事件 文本描述ID example：0-表这段话最后一句
     nextCard:number;
}