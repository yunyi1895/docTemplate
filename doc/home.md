# evcardAPP接口文档





## 环境地址
> 开发环境 https://...........

> 测试环境 https://..........



## 1 登录/注册/密码

#### 1.1 登录认证
*注：本接口需要由EVCARD实现，供第三方系统调用*

> 服务名称：登录认证

> 服务描述：通过登录获取用户token

> 服务地址：http://[host]:[port]/evcard-XXX?.........

> HTTP Method：POST

> 开发版本: 2.0

> 开发人员：张任华

•	请求body参数：

说明|参数名|类型|备注
---|---|---|---
手机号 | loginName | string | 必须项
密码 | password | string | 必须项
登录来源 | loginOrigin | int | 必须项 0:手机app 1:门户网站 7：微信H5
APP类型 | appType | int | 必须项0：android 1：ios
APP版本号 | version | string | 必须项
IMEI 编号 | imei | string | 
标志 | token | string | 必须项
推送通道id | channelId | string | 
验证码 | verifyCode | string | 



•	Response（返回结果）json

说明|参数名|类型|备注
---|---|---|---
认证结果 | status | int | "0:认证通过 -1：认证其他出错 1:用户未激活 2 登录设备ID变化 3 设备更换次数当月达上限(3次) "
消息 | message | string | 
用户名（中文） | displayName | string | status=0的情况才返回
证件号 | authId | string | status=0的情况才返回，企业用户的情况返回企业ID
标志 | token | string | 
用户类型 | orgUser | int | 0:个人用户 1：企业普通用户 2：用户管理员 3：公务车企业管理员
企业名称 | orgName | string | 企业用户的情况才返回
会员守则条款是否过期 | serviceExp | int | 0:未过期 1：已过期
组织机构 | agencyId | string | 
隐私政策条款是否过期 | privacyPolicyExp | int | 0:未过期 1：已过期




## 2 用户信息

#### 2.1 帐号信息查询
*注：本接口需要由EVCARD实现，供第三方系统调用*

> 服务名称：帐号信息查询

> 服务描述：帐号信息查询

> 服务地址：http://[host]:[port]/evcard-XXX/....

> HTTP Method：POST

> 开发版本: 2.1

> 开发人员：张任华


•	请求body参数：

说明|参数名|类型|备注
---|---|---|---
token|标志|String|必须


•	Response（返回结果）json

说明|参数名|类型|备注
---|---|---|---
结果 | status | int | 0:成功 -1：失败 1:未登录
总订单数 | orderCount | int | 
总租金 | totalRent | float | 单位：元
账户余额 | accountBalance | float | 单位：元
押金 | deposit | float | 单位：元
标准押金值 | maxDeposit | float | 单位：元
总计用车时间 | costMins | int | 单位：分钟
剩余用车时间 | remainderTime | int | 单位：分钟
押金退款状态 | drawbackStatus | int | 0:没有申请退款 1：退款中 2：退款完成 3：拒绝 4：退款失败
高端车押金 | vehicleDeposit | float | 单位：元
高端车标准押金值 | vehicleMaxDeposit | float | 单位：元
高端车押金退款状态 | vehicleDrawbackStatus | int | 0:没有申请退款 1：退款中 2：退款完成 3：拒绝 4：退款失败
普通预授权金额 | preAuthAmount | float | 单位：元
高端预授权金额 | vehiclePreAuthAmount | float | 单位：元
