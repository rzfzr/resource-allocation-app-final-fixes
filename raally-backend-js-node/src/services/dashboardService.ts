import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';

export default class DashboardService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async getUsageByHoursData() {
    const responseData = await SequelizeRepository.getUsageByHoursData(this.options);
    return responseData;
  }

  async getNumberOfPeoplePerRole() {
    const responseData = await SequelizeRepository.getNumberOfPeoplePerRole(this.options);
    return responseData;
  }

  async getUsageByPeopleData() {
    const responseData = await SequelizeRepository.getUsageByPeopleData(this.options);
    return responseData;
  }

  async getIdlenessPerRoleData() {
    const responseData = await SequelizeRepository.getIdlenessPerRoleData(this.options);
    return responseData;
  }
}
