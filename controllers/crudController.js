'use strict';
const create = model => async (req, res) => {
  try {
    const record = await model.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findAll = model => async (req, res) => {
  try {
    const records = await model.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findOne = model => async (req, res) => {
  try {
    const record = await model.findByPk(req.params.id);
    if (!record) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = model => async (req, res) => {
  try {
    const [updated] = await model.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ error: 'Record not found' });
    }

    const updatedRecord = await model.findByPk(req.params.id);
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = model => async (req, res) => {
  try {
    const deleted = await model.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ error: 'Record not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = model => ({
  create: create(model),
  findAll: findAll(model),
  findOne: findOne(model),
  update: update(model),
  remove: remove(model),
});
