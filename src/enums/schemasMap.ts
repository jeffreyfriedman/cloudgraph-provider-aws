import services from './services'

/**
 * schemasMap is an object that contains schemas name by resource
 */
export default {
  [services.alb]: 'awsAlb',
  [services.apiGatewayResource]: 'awsApiGatewayResource',
  [services.apiGatewayRestApi]: 'awsApiGatewayRestApi',
  [services.apiGatewayStage]: 'awsApiGatewayStage',
  [services.appSync]: 'awsAppSync',
  [services.asg]: 'awsAsg',
  [services.athenaDataCatalog]: 'awsAthenaDataCatalog',
  [services.billing]: 'awsBilling',
  [services.clientVpnEndpoint]: 'awsClientVpnEndpoint',
  [services.cloud9]: 'awsCloud9Environment',
  [services.cloudFormationStack]: 'awsCloudFormationStack',
  [services.cloudFormationStackSet]: 'awsCloudFormationStackSet',
  [services.cloudfront]: 'awsCloudfront',
  [services.cloudtrail]: 'awsCloudtrail',
  [services.cloudwatch]: 'awsCloudwatch',
  [services.cloudwatchLog]: 'awsCloudwatchLog',
  [services.codebuild]: 'awsCodebuild',
  [services.cognitoIdentityPool]: 'awsCognitoIdentityPool',
  [services.cognitoUserPool]: 'awsCognitoUserPool',
  [services.configurationRecorder]: 'awsConfigurationRecorder',
  [services.customerGateway]: 'awsCustomerGateway',
  [services.dmsReplicationInstance]: 'awsDmsReplicationInstance',
  [services.dynamodb]: 'awsDynamoDbTable',
  [services.ebs]: 'awsEbs',
  [services.ec2Instance]: 'awsEc2',
  [services.ecr]: 'awsEcr',
  [services.ecsCluster]: 'awsEcsCluster',
  [services.ecsContainer]: 'awsEcsContainer',
  [services.ecsService]: 'awsEcsService',
  [services.ecsTask]: 'awsEcsTask',
  [services.ecsTaskDefinition]: 'awsEcsTaskDefinition',
  [services.ecsTaskSet]: 'awsEcsTaskSet',
  [services.efs]: 'awsEfs',
  [services.efsMountTarget]: 'awsEfsMountTarget',
  [services.eip]: 'awsEip',
  [services.eksCluster]: 'awsEksCluster',
  [services.elastiCacheCluster]: 'awsElastiCacheCluster',
  [services.elastiCacheReplicationGroup]: 'awsElastiCacheReplicationGroup',
  [services.elasticBeanstalkApp]: 'awsElasticBeanstalkApp',
  [services.elasticBeanstalkEnv]: 'awsElasticBeanstalkEnv',
  [services.elasticSearchDomain]: 'awsElasticSearchDomain',
  [services.elb]: 'awsElb',
  [services.flowLog]: 'awsFlowLog',
  [services.glueJob]: 'awsGlueJob',
  [services.glueRegistry]: 'awsGlueRegistry',
  [services.guardDutyDetector]: 'awsGuardDutyDetector',
  [services.emrCluster]: 'awsEmrCluster',
  [services.emrInstance]: 'awsEmrInstance',
  [services.emrStep]: 'awsEmrStep',
  [services.iamGroup]: 'awsIamGroup',
  [services.iamOpenIdConnectProvider]: 'awsIamOpenIdConnectProvider',
  [services.iamPasswordPolicy]: 'awsIamPasswordPolicy',
  [services.iamUser]: 'awsIamUser',
  [services.iamRole]: 'awsIamRole',
  [services.iamPolicy]: 'awsIamPolicy',
  [services.iamSamlProvider]: 'awsIamSamlProvider',
  [services.iamServerCertificate]: 'awsIamServerCertificate',
  [services.igw]: 'awsIgw',
  [services.iot]: 'awsIotThingAttribute',
  [services.kinesisFirehose]: 'awsKinesisFirehose',
  [services.kinesisStream]: 'awsKinesisStream',
  [services.kms]: 'awsKms',
  [services.lambda]: 'awsLambda',
  [services.managedAirflow]: 'awsManagedAirflow',
  [services.nacl]: 'awsNetworkAcl',
  [services.nat]: 'awsNatGateway',
  [services.networkInterface]: 'awsNetworkInterface',
  [services.sg]: 'awsSecurityGroup',
  [services.subnet]: 'awsSubnet',
  [services.vpc]: 'awsVpc',
  [services.vpnGateway]: 'awsVpnGateway',
  [services.sqs]: 'awsSqs',
  [services.rdsCluster]: 'awsRdsCluster',
  [services.rdsDbInstance]: 'awsRdsDbInstance',
  [services.redshiftCluster]: 'awsRedshiftCluster',
  [services.route53HostedZone]: 'awsRoute53HostedZone',
  [services.route53Record]: 'awsRoute53Record',
  [services.routeTable]: 'awsRouteTable',
  [services.sageMakerExperiment]: 'awsSageMakerExperiment',
  [services.sageMakerNotebookInstance]: 'awsSageMakerNotebookInstance',
  [services.sageMakerProject]: 'awsSageMakerProject',
  [services.s3]: 'awsS3',
  [services.secretsManager]: 'awsSecretsManager',
  [services.ses]: 'awsSes',
  [services.sns]: 'awsSns',
  [services.systemsManagerInstance]: 'awsSystemsManagerInstance',
  [services.systemsManagerDocument]: 'awsSystemsManagerDocument',
  [services.transitGateway]: 'awsTransitGateway',
  [services.transitGatewayAttachment]: 'awsTransitGatewayAttachment',
  [services.vpnConnection]: 'awsVpnConnection',
  [services.organization]: 'awsOrganization',
  [services.wafV2WebAcl]: 'awsWafV2WebAcl',
  tag: 'awsTag',
}
