import express from 'express'
import { v4 as uuid } from 'uuid'

// tasks Array mit Testdaten wurde von ChatGPT generiert
let tasks = [
  {
    id: 1,
    title: 'Buy milk',
    creationDate: new Date('2023-04-01'),
    fulfillementDate: new Date('2023-04-02'),
    creator: 'test@gmail.com'
  },
  {
    id: 2,
    title: 'Call a friend',
    creationDate: new Date('2023-04-01'),
    fulfillementDate: new Date('2023-04-03'),
    creator: 'test@gmail.com'
  },
  {
    id: 3,
    title: 'Go to the gym',
    creationDate: new Date('2023-04-01'),
    fulfillementDate: new Date('2023-04-04'),
    creator: 'test@gmail.com'
  },
  {
    id: 4,
    title: 'Read a chapter in the book',
    creationDate: new Date('2023-04-02'),
    fulfillementDate: new Date('2023-04-05'),
    creator: 'test@gmail.com'
  },
  {
    id: 5,
    title: 'Write a blog post',
    creationDate: new Date('2023-04-02'),
    fulfillementDate: new Date('2023-04-06'),
    creator: 'test@gmail.com'
  },
  {
    id: 6,
    title: 'Do homework',
    creationDate: new Date('2023-04-03'),
    fulfillementDate: new Date('2023-04-07'),
    creator: 'test@gmail.com'
  },
  {
    id: 7,
    title: 'Cook dinner',
    creationDate: new Date('2023-04-03'),
    fulfillementDate: new Date('2023-04-08'),
    creator: 'test@gmail.com'
  },
  {
    id: 8,
    title: 'Go for a walk',
    creationDate: new Date('2023-04-04'),
    fulfillementDate: new Date('2023-04-09'),
    creator: 'test@gmail.com'
  },
  {
    id: 9,
    title: 'Visit a friend',
    creationDate: new Date('2023-04-04'),
    fulfillementDate: new Date('2023-04-10'),
    creator: 'test@gmail.com'
  },
  {
    id: 10,
    title: 'Watch a movie',
    creationDate: new Date('2023-04-05'),
    fulfillementDate: new Date('2023-04-11'),
    creator: 'test@gmail.com'
  }
]

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(tasks)
})

router.post('/', (req, res) => {
  const { title, fulfillementDate } = req.body
  const creator = req.session.email
  const newTask = {
    id: uuid(),
    title,
    creationDate: new Date(),
    fulfillementDate,
    creator
  }
  if (title === '' || !title) {
    res.status(406).json({ error: 'title is missing' })
  }
  tasks.push(newTask)
  res.status(201).json(newTask)
})

// inspiriert von meinen eigenen Unterrichtsunterlagen
router.get('/:id', (req, res) => {
  const id = req.params.id
  const task = tasks.find((task) => task.id === Number(id))
  task ? res.status(200).json(task) : res.status(404).send('task not found')
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { title, fulfillementDate } = req.body
  const task = tasks.find((task) => task.id === Number(id))
  if (!task) {
    res.status(404).send('task not found')
  }
  if (title === '' || !title) {
    res.status(406).json({ error: 'title is missing' })
  }
  const newTask = {
    id: task.id,
    title,
    creationDate: task?.creationDate,
    fulfillementDate
  }
  const updatedTasks = tasks.map((task) => {
    return task.id === Number(id) ? newTask : task
  })
  tasks = updatedTasks
  res.status(200).json(newTask)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  const task = tasks.find((task) => task.id === Number(id))
  const index = tasks.findIndex((task) => task.id === Number(id))
  if (index > -1) {
    tasks.splice(index, 1)
    res.status(200).json(task)
  } else {
    res.status(404).send('task not found')
  }
})

export default router
