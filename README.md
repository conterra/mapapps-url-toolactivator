# mapapps-url-toolactivator
This bundle activates a tool on startup using the, with activeTool marked, toolID in the URL. 

Installation Guide
------------------
**Requirement: map.apps @^3.1.4**

No special configuration needed. Just add the bundle to the app.json.

Sample App
------------------

https://demos.conterra.de/mapapps/resources/apps/downloads_urltoolactivator?lang=en&activeTool=basemapgalleryToggleTool
opens the basemapgallery on startup
https://demos.conterra.de/mapapps/resources/apps/downloads_urltoolactivator?lang=en&activeTool=overviewmap
opens the overview map on startup
https://demos.conterra.de/mapapps/resources/apps/downloads_urltoolactivator?lang=en&activeTool=agsprinttool
opens the printing tool on startup

To activate the basemapgallery atomaticcally when opening the app add &activeTool=basemapgalleryToggleTool to the end of the URL


**Restrictions**

Only one tool can be activated at the same time. If the tool is not in the initial app nothing will happen.

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`