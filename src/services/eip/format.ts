import { Aws_Eip } from '../../types/generated'
import { toCamel } from '../../utils'
import t from '../../properties/translations'

/**
 * EIP
 */

export default ({
  service: rawData,
  account,
  region,
}: {
  service: any
  account: string
  region: string
}): Aws_Eip => {
  const {
    allocationId: id,
    associationId: ec2InstanceAssociationId,
    customerOwnedIp: customerOwnedIp,
    customerOwnedIpv4Pool: customerOwnedIpv4Pool,
     domain,
    instanceId,
    networkBorderGroup,
     networkInterface,
     networkInterfaceOwnerId,
    privateIpAddress: privateIp,
    publicIp,
     publicIpv4Pool,
    tags,
  } = toCamel(rawData)
  const eip = {
    id,
    arn: `arn:aws:ec2:${region}:${account}:eip-allocation/${id}`,
    vpc: domain === 'vpc' ? t.yes : t.no,
    customerOwnedIp,
    customerOwnedIpv4Pool,
    domain,
    ec2InstanceAssociationId,
    instanceId,
    networkBorderGroup,
    networkInterface,
    networkInterfaceOwnerId,
    privateIp,
    publicIp,
    publicIpv4Pool,
    tags,
  }
  return eip
}
