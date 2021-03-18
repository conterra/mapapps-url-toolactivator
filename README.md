# mapapps-url-toolactivator

This bundles makes it possible to activate a tool with its corresponding toolID with help of the URL.

## Installation Guide

No special configuration needed. Just add the bundle dn_urltoolactivator to the app.

[dn_urltoolactivator Documentation](https://github.com/conterra/mapapps-url-toolactivator/tree/master/src/main/js/bundles/dn_urltoolactivator)

## Sample App

https://demos.conterra.de/mapapps/resources/apps/downloads_urltoolactivator?activeTool=tocToggleTool

**Restrictions**

Only one tool can be activated at the same time. If the tool is not available in the app nothing will happen.

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
   `mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
   Change the mapapps.remote.base in the build.properties file and run:
   `mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
