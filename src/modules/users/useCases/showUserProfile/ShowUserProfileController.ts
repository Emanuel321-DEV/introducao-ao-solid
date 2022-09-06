import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    try {
      const findUserByID = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(findUserByID);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { ShowUserProfileController };
