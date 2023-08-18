/*
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-03 14:17:01
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-03 14:27:07
 * @FilePath: \伙伴匹配系统\qipao\src\models\user.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//用户类别
export type UserType = {
  id: number;
  username: string;
  userAccount: string;
  avatarUrl?: string;
  //个人介绍
  profile?: string;
  gender: string;
  phone: string;
  email: string;
  userStatus: number;
  userRole: number;
  planetCode: string;
  tags: string[];
  createTime: Date;
}