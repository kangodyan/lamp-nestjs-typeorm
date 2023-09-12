import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

import { DtoValidation } from '@/modules/core/decorators';

import { ListWithTrashedQueryDto } from '@/modules/restful/dtos';
import { PublicOrderType } from '@/modules/system/constants';

/**
 * 分页查询验证
 */
@DtoValidation({ type: 'query' })
export class QueryRoleAuthorityDto extends ListWithTrashedQueryDto {
    @IsEnum(PublicOrderType, {
        message: `排序规则必须是${Object.values(PublicOrderType).join(',')}其中一项`,
    })
    @IsOptional()
    orderBy?: PublicOrderType;

    @IsOptional()
    roleId?: number;

    @IsOptional()
    roleIds?: number[];
}

/**
 * 创建验证
 */
@DtoValidation({ groups: ['create'] })
export class CreateRoleAuthorityDto {
    @IsOptional()
    @IsNotEmpty({ groups: ['create', 'update'], message: '角色ID不能为空' })
    roleId?: number;

    @IsOptional()
    menuIdList?: number[];

    @IsOptional()
    resourceIdList?: number[];

    authorityId!: number;

    authorityType!: string;
}