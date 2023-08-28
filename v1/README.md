# the-graph

## Templates

Prettier will try to format `{{block}}` to `{ { block } }`, so make sure you turn off formatting since that will break the template engine.

## Auth

Authenticate to the graph by running this command:

```zsh
yarn graph auth --product hosted-service <token>
```

The token can be found in 1password

## Deploy

### mainnet

1. Run `yarn prepare:mainnet` to update configuratio for mainnet deployment
2. Run `yarn graph deploy --product hosted-service anotherblock/anothergraph` to deploy `anothergraph`

## Troubleshooting

### Events are not indexed

This can be due to the start block being later than the events happened. Verify that the missing events were emitted after **after** the `dataSources.source.startBlock` value in the subgraph definition file
