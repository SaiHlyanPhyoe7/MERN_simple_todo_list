const { Router } = require("express");
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.patch('/update', updateToDo)
router.delete('/delete', deleteToDo)

module.exports = router;