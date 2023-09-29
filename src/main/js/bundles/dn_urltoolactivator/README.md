# dn_urltoolactivator

This bundle allows activating tools with their corresponding toolID via a URL parameter.

## Usage

1. First you need to add the bundle dn_urltoolactivator to your app.
2. (Optional) Configure the property "activationDelay" if required for the target bundles.
3. Then you can open the app and add a parameter to the url to open a tool on app start.

## Configuration Reference
Some bundles have a slower startup. To be abled to start these bundles using the dn_urltoolactivator a delay might be necessary.
This delay can be configured using the following parameter.

| Property        | Type   | Possible Values | Default | Description                        |
|-----------------|--------|-----------------|---------|------------------------------------|
| activationDelay | Number | Any number >= 0 | ```0``` | Tool startup delay in milliseconds |

### Samples

#### Open the toc on startup

https://demos.conterra.de/mapapps/resources/apps/downloads_urltoolactivator4?activeTools=tocToggleTool

#### Open the toc and the printing widget on startup

https://demos.conterra.de/mapapps/resources/apps/downloads_urltoolactivator4?activeTools=tocToggleTool,printingToggleTool
