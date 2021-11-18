import cuid from 'cuid'
import { RawAwsIotThingAttribute } from './data'
import { AwsIotThingAttribute } from '../../types/generated'
import { formatTagsFromMap } from '../../utils/format'

export default ({
  service,
  account,
  region
}: {
  service: RawAwsIotThingAttribute
  account: string
  region: string
}): AwsIotThingAttribute => {
  const {
    thingArn: arn,
    thingName,
    thingTypeName,
    attributes = {},
    version,
  } = service

  return {
    accountId: account,
    arn,
    region,
    id: arn,
    thingName,
    thingTypeName,
    attributes: Object.keys(attributes).map(key => ({
      id: cuid(),
      key,
      value: attributes[key]
    })),
    version,
  }
}
