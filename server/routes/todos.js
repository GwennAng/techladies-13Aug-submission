var express = require('express');
var router = express.Router();

const todos=[
  {
    description:"buy grapes",
    isDone:false,
  },
  {
    description:"Amanda",
    isDone:false,
  },
  {
    description:"Victor",
    isDone:true,
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({todos:todos});
});

router.post('/', function(req,res,next){
  const todo=req.body.todo;
  todos.push(todo);
  console.log(todos);
  res.json({ todos:todos});

})

module.exports = router;
