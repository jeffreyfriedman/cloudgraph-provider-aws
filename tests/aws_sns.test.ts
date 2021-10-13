import CloudGraph from '@cloudgraph/sdk'
import SnsClass from '../src/services/sns'
import { initTestConfig } from '../src/utils'
import { credentials, region } from '../src/properties/test'
import { RawAwsSns } from '../src/services/sns/data'

describe('SNS Service Test: ', () => {
  let getDataResult
  let formatResult

  initTestConfig()

  beforeAll(
    async () =>
      new Promise<void>(async resolve => {
        try {
          const snsClass = new SnsClass({ logger: CloudGraph.logger })
          getDataResult = await snsClass.getData({
            credentials,
            regions: region,
          })

          formatResult = getDataResult[region].map((item: RawAwsSns) =>
            snsClass.format({ service: item, region })
          )
        } catch (error) {
          console.error(error) // eslint-disable-line no-console
        }
        resolve()
      })
  )

  describe('getData', () => {
    it('should return a truthy value ', () => {
      expect(getDataResult).toBeTruthy()
    })

    it('should return data from a region in the correct format', () => {
      expect(getDataResult[region]).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            Policy: expect.any(String),
            region: expect.any(String),
            DisplayName: expect.any(String),
          }),
        ])
      )
    })
  })

  describe('format', () => {
    it('should return data in the correct format matching the schema type', () => {
      expect(formatResult).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            arn: expect.any(String),
            policy: expect.any(String),
            displayName: expect.any(String),
          }),
        ])
      )
    })
  })
})
