const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
//新增
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name
  console.log(name)
  Todo.create({
    name: name,
    isDone: 0,
    UserId: 1
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//細節
router.get('/:id', (req, res) => {
  const id = req.params.id  
  return Todo.findByPk(id)
    //.then(todo => console.log(todo))
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    //.then(todo => res.render('detail', { todo: JSON.stringify(todo) }))
    .catch(error => console.log(error))
})

//編輯
router.get('/:id/edit', (req, res) => {  
  const id = req.params.id
  Todo.findOne({where:{ id }})
    .then(todo => res.render('edit', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body
  Todo.update({ name: name, isDone: isDone === 'on' },{where:{id}})
  .then(() => res.redirect(`/todos/${id}`))
  .catch(error => console.log(error))
})
//刪除
router.delete('/:id', (req, res) => {
  const id = req.params.id
  Todo.destroy({where:{id}})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router