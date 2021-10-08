const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        liveDataGroup: String,
        offlineData: String
    }
`)

const resolver = {
  liveDataGroup: () => 'DAQ',
  offlineData: () => 'OffLine Data'
}

graphql(schema, '{ liveDataGroup }', resolver).then((data) => console.log(data))
