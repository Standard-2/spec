# Formats

The **SerDe** module supports multiple serialization formats.

| Algorithm                          |
| ---------------------------------- |
| **[`json`](https://www.json.org)** |
| **[`toml`](https://toml.io)**      |
| **[`yaml`](https://yaml.org)**     |

## Additional options

Some formats include additional options. </br> The options should be listed in the options table, which is the third parameter. _(After the base arguments)_

### `json`

| key      | description                                              | type      | default |
| -------- | -------------------------------------------------------- | --------- | ------- |
| `pretty` | Whether to format the data for human readability or not. | `boolean` | `false` |
