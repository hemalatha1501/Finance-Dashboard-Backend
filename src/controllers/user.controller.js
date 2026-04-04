import { createUser } from "../services/user.service.js";

export const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};