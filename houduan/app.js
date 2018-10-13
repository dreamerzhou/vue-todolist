var express = require('express');
var formidable = require('formidable');

var app = express();

var todos = [
  { id: 1, title: '吃饭', done: true },
  { id: 2, title: '睡觉', done: false },
  { id: 3, title: '敲代码', done: false }
];
var count = todos.length;

// 初始化
app.get('/todos', (req, res) => {
  res.json({todos});
});
// 改变todo - done属性 title属性
app.patch('/todos/:id', (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, {k, v}) => {
    todos = todos.map(item => {
      return item.id == req.params.id ? { ...item, [k]: v} : item
    });
    res.json({todos});
  });
});

// 增加todo
app.post('/todos', (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, {title}) => {
    todos.push({
      id: ++count,
      title,
      done: false
    });
    res.json({todos});
  });  
});
// 删除todo
app.delete('/todos/:id', (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, {id}) => {
    todos = todos.filter(item => {
      return item.id != id;
    });
  });
  res.json({todos});
})

app.listen(3007);