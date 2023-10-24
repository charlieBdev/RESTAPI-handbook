import {
  getItem,
  listItems,
  editItem,
  addItem,
  deleteItem
} from '../models/pets.models.js'

export const getPet = (req, res) => {
  try {
      const resp = getItem(parseInt(req.params.id))
      res.status(200).json(resp)
  } catch (err) {
      res.status(500).send(err)
  }
}

// Using async - just because
export const listPets = async (req, res) => {
  try {
    const resp = await listItems()
    res.status(200).json(resp)
  } catch (err) {
    res.status(500).send(err)
  }
}

// Using promises - just because
export const editPet = (req, res) => {
  editItem(parseInt(req.params.id), req.body)
  .then((resp) => {
    res.status(200).json(resp)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
}

// Using callbacks - just for punishment
export const addPet = (req, res) => {
  addItem(parseInt(req.params.id), req.body, (err, resp) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(resp)
    }
  })
}

// Using async
export const deletePet = async (req, res) => {
  try {
    const resp = await deleteItem(parseInt(req.params.id))
    res.status(200).json(resp)
  } catch (err) {
    res.status(500).send(err)
  }
}