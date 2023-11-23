import * as bcrypt from 'bcrypt';

// @Injectable()
export class EncrypterService {
  static async encryptPassword(password: string) {
    // const { password } = userInterface;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  static async comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
