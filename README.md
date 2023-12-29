# Possum Portal

Possum Portal is an environmental web mapping and (future) social media application that lets users visualize local environmental projects on a mapping platform and share them with their community. It is built with React, Node, Spring Boot, MongoDB, and the Mapbox GL JS API.

## Frontend

The frontend portion of the application uses React and Material UI to display the landing, mapping, community, and login/registration pages to the user. The mapping page allows users to display and publish environmental projects geographically. A basemap is provided by the Mapbox GL JS API, and users can draw GeoJSON polygons associated with project information in the form of summaries and tags on the map using the Mapbox-GL-Draw interface.

## Backend

The backend of the application consists of a Spring Boot server with REST microservices for user mapping choices. GeoJSON data created or modified on the front end is received by the server, transformed into a storage format, and persisted in MongoDB collections. When responding to front end data requests, the server extracts the data from the appropriate MongoDB collections and transforms it into the GeoJSON format needed for display within Mapbox.