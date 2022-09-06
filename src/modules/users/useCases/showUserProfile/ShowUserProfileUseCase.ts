import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUserByID = this.usersRepository.findById(user_id);

    if (!findUserByID) {
      throw new Error("User not found.");
    }

    return findUserByID;
  }
}

export { ShowUserProfileUseCase };
