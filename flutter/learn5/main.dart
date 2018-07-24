import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

const userName = 'millent';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
        title: 'Flutter Demo',
        theme: new ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: new ChatController()
    );
  }
}

class ChatController extends StatefulWidget {
  @override
  State createState() => new ChatScreenState();
}

class ChatScreenState extends State<ChatController> {

  final List<MessageItemController> myMessages = new List<MessageItemController>();


  void show(String text){

    if(text == ''){
      Fluttertoast.showToast(
          msg: "输入不能为空",
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.CENTER,
          timeInSecForIos: 1,
          textcolor: '#ffffff'
      );
      return;
    }

    setState(() {
      this.myMessages.insert(0, new MessageItemController(userName, text));      //插入新的消息记录
    });

    Fluttertoast.showToast(
        msg: "发送成功",
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.CENTER,
        timeInSecForIos: 1,
        textcolor: '#ffffff'
    );
  }


  Widget build(BuildContext context){
    return new Scaffold(
        appBar: new AppBar(
            title: new Text('聊天室')
        ),
        body: new Column(
          children: <Widget>[
            new Flexible(
              child: new ListView.builder(
                padding: new EdgeInsets.all(8.0),
                reverse: true,                  //反转排序，列表信息从下至上排列
                itemBuilder: (_, int index) => myMessages[index],
                itemCount: myMessages.length,
              ),
            ),
            new Container(
              decoration: new BoxDecoration (
                color: Theme.of(context).cardColor
              ),
              child: new InputController('asd', show, show),
            )

          ],
        )
    );
  }
}


// 输入框
class InputController extends StatelessWidget {
  String name;
  Function show;
  Function submit;

  final TextEditingController _textController = new TextEditingController();    //聊天窗口的文本输入控件

  InputController(String name, Function show, Function submit){
    this.name = name;
    this.show = show;
    this.submit = submit;
  }

  void sendHandel(){
    show(_textController.text);
    _textController.clear();
  }

  void submitHandel(String text){
    submit(text);
    _textController.clear();
  }


  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 8.0),
      child: Row(
        children: <Widget>[
          new Flexible(
            child: new TextField(
              controller: _textController,
              decoration: new InputDecoration.collapsed(hintText: "请输入文字"),
              onSubmitted: submitHandel,
            ),
          ),
          new Container(
            child: new Column(
              children: <Widget>[
                new IconButton(
                  icon: new Icon(Icons.send),
                  onPressed: sendHandel,
                  color: Color(0xffff0000),
                )
              ]
            ),
          )
        ],
      )
    );
  }
}



class MessageItemController extends StatelessWidget {
  String username;
  String content;
  MessageItemController(String username, String content){
    this.username = username;
    this.content = content;
  }
  @override
  Widget build(BuildContext context) {
    return new Container(
      margin: const EdgeInsets.all(8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          new Container(
            margin: const EdgeInsets.only(right: 12.0),
            child: new CircleAvatar(
              child: new Text(
                username.substring(0, 1),
                style: new TextStyle(
                  fontSize: 16.0
                ),
              ),
            ),
          ),
          new Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              new Container(
                child: new Text(
                  username,
                  style: new TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 14.0
                  ),
                  textAlign: TextAlign.left,
                ),
              ),
              new Container(
                child: Text(content),
              )
            ],
          )
        ],
      ),
    );
  }
}
