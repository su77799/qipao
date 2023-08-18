export type TeamType = {
  id: number;
  name: string;
  description: string;
  maxNum: number;
  password?: string;
  status: string;
  createTime?: Date;
  createUser?: UserType;
  //创建队伍的用户id
  createUserId: number;
}