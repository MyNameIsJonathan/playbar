const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'mykeyspace',
});

const query = 'SELECT * FROM songs';
client.execute(query).then((result) => console.log(result.rows[0]));
