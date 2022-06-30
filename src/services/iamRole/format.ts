import { AwsIamRole } from '../../types/generated'
import { formatTagsFromMap, formatIamJsonPolicy } from '../../utils/format'

import { RawAwsIamRole } from './data'

/**
 * IAM Role
 */

export default ({
  service: rawData,
  account,
}: {
  service: RawAwsIamRole
  account: string
  region: string
}): AwsIamRole => {
  const {
    RoleName: name = '',
    Arn: arn = '',
    Path: path = '',
    CreateDate: createdAt,
    Description: description = '',
    RoleLastUsed,
    AssumeRolePolicyDocument: assumeRolePolicy = '',
    MaxSessionDuration: maxSessionDuration = 0,
    InlinePoliciesName: inlinePolicies = [],
    InlinePoliciesDocuments: inlineFormattedPolicies,
    Tags: tags = {},
  } = rawData

  // Format Role Tags
  const roleTags = formatTagsFromMap(tags)

  const role = {
    id: arn,
    arn,
    accountId: account,
    name,
    path,
    createdAt: createdAt?.toISOString() || '',
    description,
    lastUsedDate: RoleLastUsed?.LastUsedDate?.toISOString() || null,
    rawPolicy: assumeRolePolicy,
    assumeRolePolicy: formatIamJsonPolicy(assumeRolePolicy),
    maxSessionDuration,
    inlinePolicies,
    inlineFormattedPolicies: inlineFormattedPolicies.map(p =>
      formatIamJsonPolicy(p)
    ),
    tags: roleTags,
  }
  return role
}
