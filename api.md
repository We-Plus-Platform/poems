```json
	//检查token
    path: '/logCheck',
    method: 'get'
{
    "status":200,
    "info":"success",//登录成功,可以跳过登录
    
    "status":500,
    "info":"fail"
}
```
```json
	//登录
    path: '/login',
    method: 'post'
{
    "status":200,
    "info":"success",
    
    "status":500,
    "info":"fail"
}

	//发送数据
{
    name:string, 
    schoolNum:string
}
```

```json
	//获取个人信息
    path: '/getInfo',
    method: 'get'
{
    "status":200,
    "info":"success",
    "data":{
        "name":string,
        "grade":number,//总分
        "rank":number,//排名
        "sex":String,//性别
        "everydayLimit":number//1代表今天有一次答题机会,0代表今天机会已用完
    }
    
    "status":500,
    "info":"fail"
}
```

```json

	//获取题目的示例。
	//现在题库太少，会出现重复的题目
{
    "status":200,
    "info":"success",
    "choose":[
        {
            "title":"哪种事物没有出现在《惠崇春江晚景》这首诗里?()",
            "optionA":"A.河豚",
            "optionB":"B.萎蒿",
            "optionC":"C.鲈鱼",
            "optionD":"D.桃花"
        },{
            "title":"《题西林壁》中的“西林”属于今天哪个地方境内?()",
            "optionA":"A.广西庐山",
            "optionB":"B.江西庐山",
            "optionC":"C.浙江庐山",
            "optionD":"D.广东庐山"
        },{
            "title":"“南朝四百八十寺，多少楼台烟雨中。”出自()一诗。",
            "optionA":"A.《山行》",
            "optionB":"B.《清明》",
            "optionC":"C.《忆江南》",
            "optionD":"D.《江南春》"
        },{
            "title":"“劝君更尽一杯酒，西出阳关无故人”中的“阳关”在今()境内。",
            "optionA":"A.甘肃敦煌西南",
            "optionB":"B.甘肃敦煌西北",
            "optionC":"C.甘肃敦煌东南",
            "optionD":"D.甘肃敦煌东北"
        },{
            "title":"“浮天水送无穷树，带雨云埋一半山”是()的诗句。",
            "optionA":"A.苏轼",
            "optionB":"B.王士慎",
            "optionC":"C.辛弃疾",
            "optionD":"D.黄庭坚"
        }],
    "fill":["________，岂必局束为人。(《山石》唐·韩愈)",
            "请君试问东流水，________。(《金陵酒肆留别》唐·李白)",
            "________，未辞剪伐谁能送。(《古柏行》唐·杜甫)",
            "昔有佳人公孙氏，________。(《观公孙大娘弟子舞剑器行·并序》唐·杜甫)",
            "昔有佳人公孙氏，________。(《观公孙大娘弟子舞剑器行·并序》唐·杜甫)"
           ],
    "judge":["“小李杜指”的是李贺和杜牧。（）",
             "“水光潋滟晴方好，山色空蒙雨亦奇。”写的是洞庭湖。（）",
             "“水光潋滟晴方好，山色空蒙雨亦奇。”写的是洞庭湖。（）",
             "“湖光秋月两相和，潭面无风镜未磨。”是描写西湖的美景。（）",
             "“但使龙城飞将在，”下句是“不教胡马度阴山”。（）"
            ],
    "number":[10,6,4,7,3,5,6,8,4,9,4,6,1,7,8]//题号，/submit的时候再提交回来
}
```



```json
	//获取国家层面
    path: '/getCountry',
    method: 'get'
{
    "status":200,
    "info":"success",
    "choose":{
        title:string,
        options:["sadf"."sdf","2ew","xxx"]
    },// 选择题
    "fill":["111","222","333","444","555"],// 填空题
    "judge":["111","222","333","444","555"],// 判断题
    "number":[10,6,4,7,3,5,6,8,4,9,4,6,1,7,8]
    
    "status":500,
    "info":"fail"
}
```

```json
	//获取社会层面
    path: '/getSocial',
    method: 'get'
{
    "status":200,
    "info":"success",
    "choose":{
        title:string,
        options:["sadf"."sdf","2ew","xxx"]
    },// 选择题
    "fill":["111","222","333","444","555"],// 填空题
    "judge":["111","222","333","444","555"],// 判断题
    "number":[10,6,4,7,3,5,6,8,4,9,4,6,1,7,8]
    
    "status":500,
    "info":"fail"
}
```

```json
	//获取个人层面
    path: '/getPersonal',
    method: 'get'
{
    "status":200,
    "info":"success",
    "choose":{
        title:string,
        options:["sadf"."sdf","2ew","xxx"]
    },// 选择题
    "fill":["111","222","333","444","555"],// 填空题
    "judge":["111","222","333","444","555"],// 判断题
    "number":[10,6,4,7,3,5,6,8,4,9,4,6,1,7,8]
    
    "status":500,
    "info":"fail"
}
```

```json

	//提交答案的示例
{
    "choose": ["a","b","c","c","b"],
    "fill": ["一舞剑器动四方",
             "未辞剪伐谁能",
             "岂必局束为人",
             "岂必局束为人",
             "昔有佳人公孙氏"],
    "judge": ["0","0","0","0","1"],//0代表错误，1代表正确
    "number": [7,6,8,3,1,9,8,5,10,4,1,2,7,9,3]//先前在获取题目时得到的题号
}
```

```json
	//提交答案
    path: '/submit',
    method: 'post'
{
    "status":200,
    "info":"success",
    "grade":number,//得到本次作答的成绩
    
    "status":500,
    "info":"fail"
}
// 发送数据: 
{
    "choose":["111","222","333","444","555"],//string
    "fill":["111","222","333","444","555"],//string
    "judge":["111","222","333","444","555"],//string
    "number":[1, 3, 5]//number
}
```

```json
	//排行榜
    path: '/getRanks',
    method: 'get'
{
    "status":200,
    "info":"success",
    "data": [
        {
            "name": string,
            "grade": number//总分
        },
        {
            "name": string,
            "grade": number
        }
    ],
    
    "status":500,
    "info":"fail"
}
```



```json
	//获取题目
    path: '/getQuestion',
    method: 'get'
{
    "status":200,
    "info":"success",
    
    "type":string,//country表示国家层面,social表示社会层面,personal表示个人层面
    "choose":{
        title:string,
        options:["sadf"."sdf","2ew","xxx"]
    },// 选择题
    "fill":["111","222","333","444","555"],// 填空题
    "number":[10,6,4,7,3,5,6,8,4,9]
    
    "status":500,
    "info":"fail"
}
```

   

```json
	//提交答案
    path: '/submit',
    method: 'post'
{
    "status":200,
    "info":"success",
    "grade":number,//得到本次作答的成绩
    
    "status":500,
    "info":"fail"
}
// 发送数据: 
{
    "type":string,//country表示国家层面,social表示社会层面,personal表示个人层面
    "choose":["111","222","333","444","555"],//string
    "fill":["111","222","333","444","555"],//string
    "number":[1, 3, 5]//number
}

{
    "type":"country",
    "choose":["a","c","b","444","555"],//string
    "fill":["111","222","333","444","555"],//string
    "number":[17,
       16,
        23,
        21,
        19,
        2,
        5,
        7,
        9,
        6]//number
}

{
    "type":"country",
    "choose":["a","c","b","444","555"],
    "fill":["苟利国家","222","333","吴起","555"],
    "number":[17,16,23,21,19,2,5,7,9,6]
}
```

