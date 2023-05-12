import { type AccountModel, type AddAccountModel, type AddAccount, type Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly encrypter: Encrypter) {}

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(accountData.password)
    return await new Promise((resolve) => {
      resolve({
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email@gmail.com',
        password: 'valid_password'
      })
    }
    )
  }
}
