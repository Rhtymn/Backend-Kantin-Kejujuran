import CanteenBalance from "../models/CanteenBalanceModel.js";
export const getCanteenBalance = async (req, res) => {
  try {
    const balance = await CanteenBalance.findAll();
    res.json(balance);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCanteenBalance = async (req, res) => {
  try {
    await CanteenBalance.create(req.body);
    res.json({ message: "Canteen Balance Created" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBalance = async (req, res) => {
  try {
    await CanteenBalance.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Canteen Balance Updated" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
