import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();
    user.name = name;
    user.email = email;
    user.created_at = new Date();
    user.updated_at = new Date();

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const findUserByID = this.users.find((user) => user.id === id);

    return findUserByID;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const findUserByEmail = this.users.find((user) => user.email === email);

    return findUserByEmail;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const findUser = this.users.find((user) => user.id === receivedUser.id);

    findUser.admin = true;
    findUser.updated_at = new Date();

    return findUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
